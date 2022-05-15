import Control from '../utils/Control';
import { ArtistQuestionView } from './artistQuestionView';
import { IArtistQuestionData } from './IArtistQuestionData ';
import { PictureQuestionsView } from './pictureQuestionsView';
interface IQuizOptions {
  gameName: string;
  categoryIndex: number;
}

// interface IQuizResults {}
type IQuizResults = Array<boolean>;

export class GameFieldPage extends Control {
  onBack: () => void;
  onHome: () => void;
  onFinish: (results: IQuizResults) => void;
  progressIndicator: Control<HTMLElement>;

  results: IQuizResults;

  answerIndicator: Control<HTMLElement>;
  constructor(parentNode: HTMLElement, gameOptions: IQuizOptions) {
    super(parentNode);
    console.log(gameOptions);
    const header = new Control(
      this.node,
      'h1',
      '',
      `${gameOptions.gameName} - ${gameOptions.categoryIndex}`,
    );

    const backButton = new Control(this.node, 'button', '', 'back');
    backButton.node.onclick = () => {
      this.onBack();
    };
    const homeButton = new Control(this.node, 'button', '', 'home');
    homeButton.node.onclick = () => {
      this.onHome();
    };

    this.progressIndicator = new Control(this.node, 'div', '', '');
    this.answerIndicator = new Control(this.node, 'div', '', '');

    const questions: Array<IArtistQuestionData> = [
      { answers: [1, 2, 3, 4], correctAnswerIndex: 1 },
      { answers: [1, 2, 3, 4], correctAnswerIndex: 2 },
      { answers: [1, 2, 3, 4], correctAnswerIndex: 3 },
    ];
    this.results = [];
    this.questionCycle(gameOptions.gameName, questions, 0, () => {
      this.onFinish(this.results);
    });
  }
  questionCycle(
    gameName: string,
    questions: Array<IArtistQuestionData>,
    index: number,
    onFinish: () => void,
  ) {
    if (index >= questions.length) {
      onFinish();
      return;
    }
    this.progressIndicator.node.textContent = `${index + 1} /${questions.length}`;
    this.answerIndicator.node.textContent = this.results.map((el) => (el ? '+' : '-')).join(' ');

    if (gameName == 'artist') {
      const question = new ArtistQuestionView(this.node, questions[index]);
      question.onAnswer = (answerIndex) => {
        question.destroy();
        this.results.push(answerIndex == questions[index].correctAnswerIndex);
        this.questionCycle(gameName, questions, index + 1, onFinish);
      };
    } else if (gameName == 'picture') {
      const question = new PictureQuestionsView(this.node, questions[index]);
      question.onAnswer = (answerIndex) => {
        question.destroy();
        this.results.push(answerIndex == questions[index].correctAnswerIndex);
        this.questionCycle(gameName, questions, index + 1, onFinish);
      };
    } else {
      throw new Error('game broken');
    }
  }
}
