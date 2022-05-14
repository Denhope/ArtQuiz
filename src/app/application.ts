import Control from '../utils/Control';
import { SettingsPage } from './settingsPage';
import { StartPage } from './startPage';
import { CategoriesPage } from './categoriesPage';
export class Application extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.mainCycle();
  }
  private mainCycle() {
    const startPage = new StartPage(this.node);
    startPage.onGameSelect = () => {
      startPage.destroy();
      const categories = new CategoriesPage(this.node);
      categories.onBack = () => {
        categories.destroy();
        this.mainCycle();
      };
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
