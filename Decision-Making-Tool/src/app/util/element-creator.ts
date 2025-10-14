import type { ElementParams } from '@/app/types/ElementParams';

export default class ElementCreator {
  public element: HTMLElement;

  constructor(param: ElementParams) {
   this.element = this.createElement(param);
   this.setCssClasses(param.classNames)
  }

  public getElement(): HTMLElement{
    return this.element;
  }

  public addInnerElement ( element: HTMLElement | ElementCreator) : this {
    if (element instanceof ElementCreator) {
        this.element?.appendChild(element.getElement())
    }
    else {
        this.element.appendChild(element);
    }
    return this
  }

  private createElement(param: ElementParams): HTMLElement {
    return document.createElement(param.tag);

  }

  private setCssClasses(cssClasses: string[] | undefined): void {
    if (cssClasses) {
      cssClasses.forEach(className => this.element?.classList.add(className));
    }
  }


}
