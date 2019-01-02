const config = require("./config");

const irc = require("irc");

const client = new irc.Client("chat.freenode.net", config.name, {
  userName: config.name,
  realName: config.name,
  port: 8000,
  channels: [config.channel]
});

client.on("error", message => {
  console.log("[IRC] Error: ", message);
});

module.exports = client;