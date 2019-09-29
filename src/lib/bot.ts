import Telebot from 'telebot';

class Bot {
  _TG_API_KEY: string;
  _TG_CHAT_ID: string;
  _bot: Telebot;

  /**
   * Class constructor
   * @param TG_API_KEY The Telegram API key.
   * @param TG_CHAT_ID The Telegram chat ID.
   */
  constructor(TG_API_KEY: string, TG_CHAT_ID: string) {
    this._TG_API_KEY = TG_API_KEY;
    this._TG_CHAT_ID = TG_CHAT_ID;
    this._bot = new Telebot(this.TG_API_KEY);
    this.bot.start();
  }

  // TG_API_KEY getter
  get TG_API_KEY(): string {
    return this._TG_API_KEY;
  }

  // TG_CHAT_ID getter
  get TG_CHAT_ID(): string {
    return this._TG_CHAT_ID;
  }

  // Bot getter
  get bot(): Telebot {
    return this._bot;
  }

  // Send Photo to Telegram API
  async newPic(convertedJPG: Buffer): Promise<void> {
    await this.bot.sendPhoto(this.TG_CHAT_ID, convertedJPG, {});
  }
}

export { Bot };
