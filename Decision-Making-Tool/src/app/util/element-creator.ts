import type { ElementParams } from '@/app/types/ElementParams';

export default class ElementCreator {
  public element: HTMLElement | null;

  constructor(param: ElementParams) {
    this.element = null;
    this.createElement(param);
  }

  public getElement(): HTMLElement | null {
    return this.element;
  }

  private createElement(param: ElementParams): void {
    this.element = document.createElement(param.tag);
    this.setCssClasses(param.classNames);
  }

  private setCssClasses(cssClasses: string[] | undefined): void {
    if (cssClasses) {
      cssClasses.forEach(className => this.element?.classList.add(className));
    }
  }
}
