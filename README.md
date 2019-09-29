## Snapmatic Webservice

A lightweight web service for receiving your Snapmatic pictures and sharing them in your Telegram group in real-time.

When the server is started and the Telegram credentials are configured, one endpoint is exposed for listening to Snapmatic pictures. They are expected to come as `form-data` filetype.

Here is an example `curl` for testing purposes:

```sh
$ curl -F "file=@/somedir/somepic.jpg" localhost:3000/picture -XPOST
```

Once a new picture is received and properly processed, it's sent as a `JPG` file to your Telegram bot.

### Usage

1. Install dependencies

```sh
$ sudo npm install -g typescript@latest
$ npm install
```

2. Fill the [config.ts](src/config.ts) file with the following information:

- `TG_API_KEY`: Telegram bot API Key.
- `TG_CHAT_ID`: Telegram chat ID.

> You can also set the values by environment variables.

3. Start the server:

```sh
$ npm start
```

Alternatively, you may want to run it using Docker:

```sh
$ docker build -t "snapmatic"
$ docker run --rm -it -p 3000:3000/tcp snapmatic:latest
```

# Authors and contributors

- @manuasir (author)
- @jesusgn90 (contributor)