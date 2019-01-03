# IRC-to-Discord [![Build Status][build]](https://travis-ci.org/The-Noah/IRC-to-Discord) [![Node Version][node]](https://nodejs.org/en/blog/release/v10.13.0/) [![NPM Version][npm]](https://www.npmjs.com/package/npm/v/6.4.1) ![Version 2.0.2][version]

IRC is great, but there are many downsides. One of the big ones is once you disconnect, you can't see any new messages until you connect again which leads to you missing entire conversations. Some people solve this by creating loggers, which do work. But what I have done is created IRC to Discord, which uses Discord to log IRC messsages so you don't have to worry about a place to store them or provide them.

# Gettings Started

It's easy to dive in, just follow the steps below!

## Prerequisites

* [Node.js](https://nodejs.org/ "Node.js Website") (v10.13.0 recommended)
* NPM (v6.4.1 recommended)
* [Discord application with a bot](https://discordapp.com/developers/applications/ "Discord Applications Page")
* Some free disk space

## Installing

Open a terminal on the folder and run `npm install`.

## Configuration File

Create a new file called `config.json`. The template is as follows.

```json
{
  "irc": {
    "name": "Name on IRC"
  },
  "discord": {
    "clientID": "Discord Application Client ID",
    "permissions": "Discord Bot Permissions Wanted - '2048' Recommended",
    "token": "Discord Bot Token",  
    "channels": [
      {
        "id": "Discord Channel ID",
        "ircChannels": ["#some", "#irc", "##channels"]
      },
      {
        "id": "Another Discord Channel ID",
        "ircChannels": ["#more", "#irc", "#channels"]
      }
    ]
  }
}
```

# Running

Open a terminal in the direcrory and run "`npm start`", "`node .`" or "`node src/app.js`".

Once you start the bot, it will provide an invite link to you. To check if it is still online send "ping" and mention the bot in the message, and it will respond saying "Pong" if it is online.

# Acknowledgments

* Author: [The Noah](https://github.com/The-Noah/ "The Noah's GitHub")
* Packages Used
  * [IRC](https://www.npmjs.com/package/irc "IRC's NPM Page")
  * [Discord.js](https://www.npmjs.com/package/discord.js "Discord.js's NPM Page")

# License

IRC to Discord is licensed under the MIT license. See the [LICENESE](LICENSE) file for details.

[build]: https://travis-ci.org/The-Noah/IRC-to-Discord.png?branch=master
[node]: https://img.shields.io/badge/node.js-v10.13.0-red.svg
[npm]: https://img.shields.io/badge/npm-v6.4.1-red.svg
[version]: https://img.shields.io/badge/version-2.0.2-blue.svg
