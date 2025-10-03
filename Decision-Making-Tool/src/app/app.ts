import MainView from '@/app/view/main/main-view.ts';

export default class App {
  constructor() {
    this.createView();
  }
  private createView(): void {
    const mainView = new MainView();
    const element = mainView.getHtmlElement();
    if (element) {
      document.body.append(element);
    } else {
      console.log('MainView element is null');
    }
  }
}
