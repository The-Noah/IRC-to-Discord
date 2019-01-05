import config from "./config";

import * as irc from "irc";

const channels = [];

config.discord.channels.forEach(channel => {
  channel.ircChannels.forEach(ircChannel => {
    channels.push(ircChannel);
  });
});

const client = new irc.Client("chat.freenode.net", config.irc.name, {
  userName: config.irc.name,
  realName: config.irc.name,
  port: 8000,
  channels: channels
});

client.on("error", message => {
  console.log("[IRC] Error: ", message);
});

export {client as default};