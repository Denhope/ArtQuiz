import Control from '../utils/Control';

export class CategoriesPage extends Control {
  onBack: () => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const backButton = new Control(this.node, 'button', '', 'back');
    backButton.node.onclick = () => {
      this.onBack();
    };
  }
}
