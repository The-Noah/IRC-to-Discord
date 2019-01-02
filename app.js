const ircConfig = require("./irc/config");
const discordConfig = require("./discord/config");

const irc = require("./irc/irc");
const discord = require("./discord/discord");

irc.on("registered", message => {
  //console.log("[IRC] Message:", message);

  discordConfig.channelIDs.forEach(channelID => {
    discord.channels.get(channelID).send(`[INFO] Listening on IRC channel ${ircConfig.channel}`);
  });
});

irc.on(`message${ircConfig.channel}`, (from, message) => {
  console.log(`[IRC] ${from}: ${message}`);

  discordConfig.channelIDs.forEach(channelID => {
    discord.channels.get(channelID).send(`**${from}**: ${message}`);
  });
});