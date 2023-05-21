export class ProxyFactory<T extends object> {
  subs: Function[] = [];
  proxy: T;

  constructor(initialValue: T) {
    const that = this;
    this.proxy = new Proxy<T>(initialValue, {
      get(target, p) {
        let value = Reflect.get(target, p);
        return typeof value == 'function' ? value.bind(target) : value;
      },
      set(target, p, newValue) {
        that.subs.forEach((sub) => sub(target, p, newValue));
        return Reflect.set(target, p, newValue);
      },
      has(target, p) {
        return Reflect.has(target, p);
      },
    });
  }

  addSub(sub: Function) {
    this.subs.push(sub);
  }

  public get data() {
    return this.proxy;
  }
}
