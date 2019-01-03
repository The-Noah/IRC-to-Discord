"use strict";

const config = require("../config");

const irc = require("./irc");
const discord = require("./discord");

irc.on("registered", message => {
  //console.log("[IRC] Message:", message);

  config.discord.channels.forEach(channel => {
    channel.ircChannels.forEach(ircChannel => {
      discord.channels.get(channel.id).send(`\[**INFO**] Listening on IRC channel ${ircChannel}`);
    });
  });
});

config.discord.channels.forEach(channel => {
  channel.ircChannels.forEach(ircChannel => {
    irc.on(`message${ircChannel}`, (from, message) => {
      from = from.replace(/[^\x20-\x7E]/g, "");
      message = message.replace(/[^\x20-\x7E]/g, "");
    
      console.log(`[${ircChannel}] ${from}: ${message}`);
    
      discord.channels.get(channel.id).send(`[${ircChannel}] **${from}**: ${message}`);
    });
  });
});