# IRC-to-Discord

Log IRC messages to Discord.

## Setup

Open the Discord developer page on their website and create a new application. Then create a bot for that application.

## Configuration Files

### IRC

Create a new file called `config.json` in the `irc` folder. The template is as fallows.

```json
{
  "name": "Name on IRC",
  "channel": "IRC channel to connect to"
}
```

### Discord

```json
{
  "channelIDs": ["IDs", "of", "Discord", "Channels"],
  "clientID": "Application Client ID",
  "permissions": "Discord bot permissions - '2048' recommended",
  "token": "Discord Bot Token"
}
```

## Running

Open a terminal in the direcrory and run `npm start`, `node .` or `node app.js`.

## Authors

* [The Noah](https://github.com/The-Noah/ "The Noah's GitHub")