## Snapmatic webservice

A lightweight webservice for receiving your Snapmatic pictures and sharing them in your Telegram group in real time.

When server is started and the Telegram credentials are configured, one endpoint is exposed for listening Snapmatic pictures. They are expected to come as `form-data` filetype:
```
POST /pictures
```
When a new picture is received it's allocated in memory as a buffer, then it's sent as a  `JPG` file to your Telegram bot.

### Usage

1. Install dependencies
```
npm install
```

2. Fill the `config.js` file with the following information:

- `apiKey`: Your Telegram bot API Key.
- `chatId`: Your Telegram chat ID.

> You can also set the values by environment variables.

3. Start the server:

```
npm start
```