import type { ElementParams } from '@/app/types/ElementParams';
import ElementCreator from '@/app/util/element-creator';
import './main.css';

type CssClasses = {
  MAIN: string;
};

const cssClasses: CssClasses = {
  MAIN: 'main',
};
const text = {
    TEXT: 'Decision Making Tool'
}

export default class MainView {
  private elementCreator: ElementCreator;

  constructor() {
    this.elementCreator = this.createView();
  }

  public getHtmlElement(): HTMLElement | null {
    return this.elementCreator.getElement();
  }

  private createView(): ElementCreator {
    const params: ElementParams = {
      tag: 'main',
      classNames: [cssClasses.MAIN],
    };
    const elementCreator = new ElementCreator(params);
    return elementCreator;
  }
}
