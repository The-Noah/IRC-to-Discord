# IRC to Discord [![Build Status][build]](https://travis-ci.org/The-Noah/IRC-to-Discord) [![Node Version][node]](https://nodejs.org/en/blog/release/v10.13.0/) [![NPM Version][npm]](https://www.npmjs.com/package/npm/v/6.4.1) ![Version 2.0.2][version]

IRC is commonly used for discussions and by the open-source community, however it does contain several disadvantages. One of them is while not joined messages are not received, thus causing one to possibly miss entire conversations and discussions. This can be solved with IRC bots which function as loggers, but this generally requires a complicated setup. Instead, a simpler and easier form is provided which takes advantage of Discord, it's capabilities to easily store messages for free.

# Getting Started

It is easy to get started with the following steps.

## Prerequisites

* [Node.js](https://nodejs.org/ "Node.js Website") (v10.13.0 or above recommended)
* NPM (v6.4.1 or above recommended)
* [Discord application with a bot enabled](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token "Creating a Discord Bot & Getting a Token")
* Some free disk space (3MB+ recommended)

## Installing

Open up the terminal within the directory and run 'npm install' without quotes.

## Configuration File

The configuration file should be called `config.json` in order for it to run by default. The following is the template for the configuration file:

```json
{
  "irc": {
    "name": "IRC_Bot_Nick"
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

Open the terminal within the directory and run either `npm start`, `node .` or `node src/app.js`.

One started, the bot will provide a Discord invite link. To check if the bot is online, send 'ping' and mention the bot within the message and if it is online, it will reply with a 'pong'.

# Acknowledgments

* Author: [The Noah](https://github.com/The-Noah/ "The Noah's GitHub Profile")
* Documentation Helper: [Zehra](https://github.com/Zehra/ "Zehra's GitHub Profile")
* NPM Packages Used
  * [IRC](https://www.npmjs.com/package/irc "IRC's NPM Page")
  * [Discord.js](https://www.npmjs.com/package/discord.js "Discord.js's NPM Page")

# License

IRC to Discord is licensed under the MIT License. See the included [LICENESE](LICENSE) file for details.

[build]: https://travis-ci.org/The-Noah/IRC-to-Discord.png?branch=master
[node]: https://img.shields.io/badge/node.js-v10.13.0-red.svg
[npm]: https://img.shields.io/badge/npm-v6.4.1-red.svg
[version]: https://img.shields.io/badge/version-2.0.2-blue.svg
