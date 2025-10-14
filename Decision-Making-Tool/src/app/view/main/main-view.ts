import type { ElementParams } from '@/app/types/ElementParams';
import ElementCreator from '@/app/util/element-creator';
import './main.css';

type CssClasses = {
  MAIN: string;
  OPTION_LIST: string;
  ADD_BUTTON: string
    OPTION_ITEM: string
};

const cssClasses: CssClasses = {
  MAIN: 'main',
    OPTION_LIST: 'option__list',
    ADD_BUTTON: 'add__button',
    OPTION_ITEM: 'option__item'
};

const text = {
    TEXT: 'Decision Making Tool',
    ADD_BUTTON: 'Add button'
}

export default class MainView {
  private elementCreator: ElementCreator;
  private optionList: ElementCreator;
    private optionCounter:number = 1;

  constructor() {
      //ul
      this.optionList = new ElementCreator({
          tag: 'ul',
          classNames: [cssClasses.OPTION_LIST]
      })
    this.elementCreator = this.createView();
  }

  public getHtmlElement(): HTMLElement | null {
    return this.elementCreator.getElement();
  }

  private handleAddOptions():void {
      const newOptions = new ElementCreator({
          tag: 'li',
          textContent: `Option ${this.optionCounter++}`,
          classNames: [cssClasses.OPTION_ITEM]
      })
      this.optionList.addInnerElement(newOptions)
  }

  private createView(): ElementCreator {
    const params: ElementParams = {
      tag: 'main',
      classNames: [cssClasses.MAIN],
    };
    const elementCreator = new ElementCreator(params);
        // заголовок
    const titleParams: ElementParams = {
        tag: 'h1',
        textContent: text.TEXT
    }
    const titleElement = new ElementCreator(titleParams)
      elementCreator.addInnerElement(titleElement)



      // button
      const addButton = new ElementCreator({
          tag: 'button',
          classNames: [cssClasses.ADD_BUTTON],
          textContent: text.ADD_BUTTON,
          callback: this.handleAddOptions.bind(this)
      })

      elementCreator.
      addInnerElement(this.optionList).
      addInnerElement(addButton)

    return elementCreator
  }
}
