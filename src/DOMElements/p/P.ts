import { Attributes } from 'DOMElements/base/Attributes';

export class P extends Attributes {
  #textContent: string = 'initial';
  #HTML = document.createElement('p');
  constructor() {
    super();
  }

  set textContent(v: string) {
    this.#textContent = v;
    this.#HTML.textContent = this.#textContent;
  }

  get textContent(): string {
    return this.#textContent;
  }

  render() {
    this.addAttributes(this.#HTML);
    this.#HTML.textContent = this.#textContent;
    return this.#HTML;
  }
}
