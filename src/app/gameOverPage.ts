import Control from '../utils/Control';

export class GameOverPage extends Control {
  onNext: () => void;
  onHome: () => void;
  constructor(parentNode: HTMLElement, results: any) {
    super(parentNode);
    const res = new Control(this.node, 'h1', 'res', 'Result Page');

    const resultIndicator = new Control(this.node, 'div', '', '');
    resultIndicator.node.textContent = results.map((el: boolean) => (el ? '+' : '-')).join(' ');
    const nextButton = new Control(this.node, 'button', '', 'next');
    nextButton.node.onclick = () => {
      this.onNext();
    };
    const homeButton = new Control(this.node, 'button', '', 'home');
    homeButton.node.onclick = () => {
      this.onHome();
    };
  }
}
