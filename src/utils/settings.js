import browser from "webextension-polyfill";

import { STORAGE_KEYS } from "../utils/constants";

const DEFAULT_SETTINGS = {};

export default class Settings {
  constructor() {
    this.storage = browser.storage.sync || browser.storage.local;
  }

  async getSettings() {
    const storageResults = await this.storage.get(STORAGE_KEYS.SETTINGS);
    return storageResults[STORAGE_KEYS.SETTINGS] || DEFAULT_SETTINGS;
  }

  async saveSettings(settings) {
    return await this.storage.set({
      [STORAGE_KEYS.SETTINGS]: settings,
    });
  }

  async resetSettings() {
    return await this.storage.set({
      [STORAGE_KEYS.SETTINGS]: DEFAULT_SETTINGS,
    });
  }
}
