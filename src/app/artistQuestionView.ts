import Control from '../utils/Control';
// import { IArtistQuestionData } from './IArtistQuestionData ';
import { IPicturesQuestionData } from './quizDataModel';
import { IArtistQuestionData } from './quizDataModel';

export class ArtistQuestionView extends Control {
  onAnswer: (index: number) => void;

  constructor(parentNode: HTMLElement, questionData: IArtistQuestionData) {
    super(parentNode);

    const question = new Control(this.node, 'div', '', 'Кто написал картину?');
    const img = new Image(200, 200);
    img.src = questionData.artistImgUrl;
    question.node.append(img);
    const answerButton = questionData.answers.map((el, i) => {
      const button = new Control(this.node, 'button', '', el.toString());
      button.node.onclick = () => {
        this.onAnswer(i);
      };
    });
  }
}
