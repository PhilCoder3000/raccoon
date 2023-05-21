import { Attributes } from 'DOMElements/base/Attributes';

export class Button extends Attributes {
  innerText = '';
  type = 'button';
  onclick: Nullable<(this: GlobalEventHandlers, ev: MouseEvent) => any> = null;
  constructor() {
    super();
  }

  render() {
    const HTML = document.createElement('button');
    this.addAttributes(HTML);
    HTML.innerText = this.innerText;
    HTML.type = this.type;
    if (this.onclick) {
      HTML.onclick = this.onclick;
    }
    return HTML;
  }
}
