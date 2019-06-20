'use strict'

class Bot {
  /**
   * Constructor class
   * @param {String} botKey The Telegram API key.
   * @param {String} chatId The Telegram chat ID.
   */
  constructor (botKey, chatId) {
    if (!botKey || !chatId) {
      console.log('Missing Telegram API KEY or chat ID')
      return
    }
    this.Telebot = require('telebot')
    this.botKey = botKey
    this.chatId = chatId
    this.bot = new this.Telebot(this.botKey)
    this.init()
  }

  /**
   * Initializes the Telegram bot
   */
  init () {
    this.bot.start()
  }

  /**
   * Send Photo to Telegram API
   * @param {Buffer} convertedJpg
   */
  async newPic (convertedJpg) {
    try {
      if (convertedJpg) await this.bot.sendPhoto(this.chatId, convertedJpg, {})
    } catch (error) {
      console.error('error ', error)
      return Promise.reject(error)
    }
  }
}

module.exports = Bot
