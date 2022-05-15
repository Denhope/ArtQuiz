import Control from '../utils/Control';
import { SettingsPage } from './settingsPage';
import { StartPage } from './startPage';
import { CategoriesPage } from './categoriesPage';
import { GameFieldPage } from './gameField';
import { GameOverPage } from './gameOverPAge';

export class Application extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.mainCycle();
  }
  private gameCycle(gameName: string, categoryIndex: number) {
    const gameField = new GameFieldPage(this.node, {
      gameName: gameName,
      categoryIndex: categoryIndex,
    });
    gameField.onHome = () => {
      gameField.destroy();

      this.mainCycle();
    };
    gameField.onBack = () => {
      gameField.destroy();
      this.categoryCycle(gameName);
    };
    gameField.onFinish = (result) => {
      gameField.destroy();
      const gameOverPage = new GameOverPage(this.node, result);
      gameOverPage.onHome = () => {
        gameOverPage.destroy();
        this.mainCycle();
      };
      gameOverPage.onNext = () => {
        gameOverPage.destroy();

        this.gameCycle(gameName, categoryIndex + 1);
      };
    };
  }
  private categoryCycle(gameName: string) {
    const categories = new CategoriesPage(this.node, gameName);
    categories.onBack = () => {
      categories.destroy();
      this.mainCycle();
    };
    categories.onSelect = (index) => {
      categories.destroy();
      this.gameCycle(gameName, index);
    };
  }

  private mainCycle() {
    const startPage = new StartPage(this.node);
    startPage.onGameSelect = (gameName) => {
      startPage.destroy();
      this.categoryCycle(gameName);
    };

    startPage.onSettings = () => {
      startPage.destroy();
      const settingsPage = new SettingsPage(this.node);
      settingsPage.onBack = () => {
        settingsPage.destroy();
        this.mainCycle();
      };
      settingsPage.onSave = (setting) => {
        console.log(setting);
        settingsPage.destroy();
        this.mainCycle();
      };
    };
  }
}
