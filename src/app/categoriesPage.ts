import Control from '../utils/Control';

export class CategoriesPage extends Control {
  onBack: () => void;
  onSelect: (index: number) => void;
  constructor(parentNode: HTMLElement, gameName: string) {
    super(parentNode);
    const backButton = new Control(this.node, 'button', '', 'back');
    backButton.node.onclick = () => {
      this.onBack();
    };

    const categoriesList = [1, 2, 3, 4, 5, 6, 7, 8];
    const categoryButtons = categoriesList.map((el, i) => {
      const button = new Control(this.node, 'button', '', el.toString());
      button.node.onclick = () => {
        this.onSelect(i);
      };
    });
  }
}
