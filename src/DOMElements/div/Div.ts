import { BaseElement } from 'DOMElements/base/BaseElement';

export class Div {
  children: BaseElement[] = [];
  constructor() {}

  appendChild(child: BaseElement) {
    this.children.push(child);
  }

  render() {
    const HTML = document.createElement('div');
    this.children.forEach((child) => {
      HTML.appendChild(child.render());
    })
    return HTML;
  }
}
