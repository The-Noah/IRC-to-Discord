[![Build Status](https://travis-ci.org/The-Noah/IRC-to-Discord.png?branch=master)](https://travis-ci.org/The-Noah/IRC-to-Discord)
[![Node version](https://img.shields.io/badge/node.js-v10.13.0-red.svg)](https://nodejs.org/en/blog/release/v10.13.0/)
[![Node version](https://img.shields.io/badge/npm-v6.4.1-red.svg)](https://www.npmjs.com/package/npm/v/6.4.1)

# IRC-to-Discord

Log IRC messages to Discord.

## Setup

Open the Discord developer page on their website and create a new application. Then create a bot for that application.

Open a terminal on the folder and run `npm install`.

## Configuration Files

Create a new file called `config.json` in the `src/irc` and `src/discord` folders. The templates are as follows.

### IRC

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

Open a terminal in the direcrory and run "`npm start`", "`node .`" or "`node src/app.js`".

## Author

[The Noah](https://github.com/The-Noah/ "The Noah's GitHub")

## License

IRC to Discord is released under the MIT license. See the [LICENESE](LICENSE) file for details.