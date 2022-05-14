import Control from '../utils/Control';

export class StartPage extends Control {
  onSettings: () => void;

  onGameSelect: (gameName: string) => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const artistsButton = new Control(this.node, 'button', '', 'atristButton');
    artistsButton.node.onclick = () => {
      this.onGameSelect('artist');
    };
    const picturesButton = new Control(this.node, 'button', '', 'pictureButton');
    picturesButton.node.onclick = () => {
      this.onGameSelect('picture');
    };

    const settingsButton = new Control(this.node, 'button', '', 'settingsButton');
    settingsButton.node.onclick = () => {
      this.onSettings();
    };
  }
}
