import Control from '../utils/Control';
import { ICategoryData } from '../app/quizDataModel';

export class CategoriesPage extends Control {
  onBack: () => void;
  onSelect: (index: number) => void;
  constructor(parentNode: HTMLElement, gameName: string, quizCategoriesData: Array<ICategoryData>) {
    super(parentNode);
    const backButton = new Control(this.node, 'button', '', 'back');
    backButton.node.onclick = () => {
      this.onBack();
    };

    // const categoriesList = [1, 2, 3, 4, 5, 6, 7, 8];
    const categoryButtons = quizCategoriesData.map((el, i) => {
      const button = new Control(this.node, 'button', '', el.name.toString());
      const img = new Image(100, 100);
      button.node.append(img);

      img.src = el.picture;
      button.node.onclick = () => {
        this.onSelect(i);
      };
    });
  }
}
