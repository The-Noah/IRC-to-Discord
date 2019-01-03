"use strict";

const config = require("../config");

const discord = require("discord.js");

const client = new discord.Client();

client.on("ready", () => {
  console.log(`[Discord] Logged in as ${client.user.tag}`);

  console.log(`[Discord] Invite to server: https://discordapp.com/api/oauth2/authorize?client_id=${config.discord.clientID}&permissions=${config.discord.permissions}&scope=bot`);
});

client.on("message", message => {
  if(message.content === '~ping'){
    console.log(`[Discord] Got ${message.content}`);

    message.channel.send("Pong");
  }
});

client.login(config.discord.token);

module.exports = client;