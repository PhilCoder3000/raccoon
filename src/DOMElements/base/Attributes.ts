type AttributesObj = Record<string, string>;

export class Attributes {
  #attributes: AttributesObj;
  constructor(attributes?: AttributesObj) {
    this.#attributes = attributes || {};
  }

  setAttribute(qualifiedName: string, value: string) {
    this.#attributes[qualifiedName] = value;
  }

  setAttributes(newAttributes: AttributesObj) {
    this.#attributes = { ...this.#attributes, ...newAttributes };
  }

  removeAttribute(qualifiedName: string) {
    delete this.#attributes[qualifiedName];
  }

  getAttribute(qualifiedName: string): string {
    return this.#attributes[qualifiedName];
  }

  getAttributes(): AttributesObj {
    return this.#attributes;
  }

  hasAttribute(qualifiedName: string): boolean {
    return qualifiedName in this.#attributes;
  }

  addAttributes(node: HTMLElement) {
    if (Object.keys(this.#attributes).length > 0) {
      Object.entries(this.#attributes).forEach(([key, value]) => {
        node.setAttribute(key, value);
      });
    }
  }
}