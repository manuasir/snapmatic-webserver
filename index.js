'use strict'

const Server = require('./lib/api')
const Bot = require('./lib/bot')
const config = require('./config')
const bot = new Bot(config.apiKey, config.chatId)

const webhook = async (req, res) => {
  try {
    if (!req || !req.file || !req.file.buffer) {
      return res.json({ error: 1, msg: 'Missing file.' })
    }
    const picture = req.file.buffer
    await bot.newPic(picture)
    res.json({ error: 0, msg: 'Done' })
  } catch (error) {
    res.json({ error: 1000, msg: error.message || error })
  }
}

const server = new Server(webhook)
server.start()
