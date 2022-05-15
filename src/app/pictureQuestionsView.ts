import Control from '../utils/Control';
import { IArtistQuestionData } from './IArtistQuestionData ';

export class PictureQuestionsView extends Control {
  onAnswer: (index: number) => void;

  constructor(parentNode: HTMLElement, questionData: IArtistQuestionData) {
    super(parentNode);

    const question = new Control(this.node, 'div', '', 'Кто написал картину?');
    const answerButton = questionData.answers.map((el, i) => {
      const button = new Control(this.node, 'button', '', i.toString());
      button.node.onclick = () => {
        this.onAnswer(i);
      };
    });
  }
}
