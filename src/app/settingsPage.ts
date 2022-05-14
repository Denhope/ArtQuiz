import Control from '../utils/Control';
interface IQuizSettings {}

export class SettingsPage extends Control {
  onBack: () => void;
  onSave: (setting: IQuizSettings) => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const backButton = new Control(this.node, 'button', '', 'back');
    backButton.node.onclick = () => {
      this.onBack();
    };

    const setting: IQuizSettings = {};

    const saveButton = new Control(this.node, 'button', '', 'save');
    saveButton.node.onclick = () => {
      this.onSave(setting);
    };
  }
}
