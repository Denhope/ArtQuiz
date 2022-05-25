import Control from '../utils/Control';
import { IPicturesQuestionData } from './quizDataModel';
import { IArtistQuestionData } from './quizDataModel';

export class PictureQuestionsView extends Control {
  onAnswer: (index: number) => void;

  constructor(parentNode: HTMLElement, questionData: IPicturesQuestionData) {
    super(parentNode);

    const question = new Control(this.node, 'div', '', questionData.artistName);
    const answerButton = questionData.answers.map((el, i) => {
      const button = new Control(this.node, 'button', '', i.toString());
      const img = new Image(200, 200);
      img.src = el;
      button.node.append(img);
      button.node.onclick = () => {
        this.onAnswer(i);
      };
    });
  }
}
