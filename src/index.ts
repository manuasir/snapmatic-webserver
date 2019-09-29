'use strict';
import express from 'express';
import { API, Bot } from './lib';
import { API_KEY, CHAT_ID } from './config';
const bot = new Bot(API_KEY, CHAT_ID);

const webhook = async (req: express.Request, res: express.Response) => {
  try {
    if (!req || !req.file || !req.file.buffer) {
      throw new Error('Missing file');
    }
    const picture = req.file.buffer;
    await bot.newPic(picture);
    res.json({ error: 0, msg: 'Done' });
  } catch (error) {
    res.status(500);
    res.json({ msg: error.message || error });
  }
};

const server = new API(webhook);
server.start();
