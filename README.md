## Snapmatic webservice

A lightweight webservice for receiving your Snapmatic pictures and sharing them in your Telegram group in real time.

### Usage

1. Install dependencies
```
npm install
```

2. Fill the `config.js` file with the following information:

- `apiKey`: Your Telegram API Key.
- `chatId`: Your Telegram chat ID.

> You can also set the values by environment variables.

3. Start the server:

```
npm start
```