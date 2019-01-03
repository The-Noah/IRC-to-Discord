# IRC-to-Discord [![Build Status](https://travis-ci.org/The-Noah/IRC-to-Discord.png?branch=master)](https://travis-ci.org/The-Noah/IRC-to-Discord) [![Node Version](https://img.shields.io/badge/node.js-v10.13.0-red.svg)](https://nodejs.org/en/blog/release/v10.13.0/) [![NPM Version](https://img.shields.io/badge/npm-v6.4.1-red.svg)](https://www.npmjs.com/package/npm/v/6.4.1)

IRC is great, but there are many downsides. One of the big ones is once you disconnect, you can't see any new messages until you connect again which leads to you missing entire conversations. Some people solve this by creating loggers, which do work. But what I have done is created IRC to Discord, which uses Discord to log IRC messsages so you don't have to worry about a place to store them or provide them.

# Gettings Started

It's easy to dive in, just follow the steps below!

## Prerequisites

* [Node.js](https://nodejs.org/ "Node.js Website") (v10.13.0 recommended)
* NPM (v6.4.1 recommended)
* [Discord Application and bot](https://discordapp.com/developers/applications/ "Discord Applications Page")
* Some free disk space

## Installing

Open a terminal on the folder and run `npm install`.

## Configuration Files

Create a new file called `config.json` in the `src/irc` and `src/discord` folders. The templates are as follows.

## IRC

```json
{
  "name": "Name on IRC",
  "channel": "IRC channel to connect to"
}
```

## Discord

```json
{
  "channelIDs": ["IDs", "of", "Discord", "Channels"],
  "clientID": "Application Client ID",
  "permissions": "Discord bot permissions - '2048' recommended",
  "token": "Discord Bot Token"
}
```

# Running

Open a terminal in the direcrory and run "`npm start`", "`node .`" or "`node src/app.js`".

# Acknowledgments

* Author: [The Noah](https://github.com/The-Noah/ "The Noah's GitHub")
* Packages
  * [Discord.js](https://www.npmjs.com/package/discord.js "NPM Discord.js Page")
  * [IRC](https://www.npmjs.com/package/irc "NPM IRC Page")

# License

IRC to Discord is licensed under the MIT license. See the [LICENESE](LICENSE) file for details.
