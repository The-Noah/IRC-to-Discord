import config from "./config";

import irc from "./irc";
import {default as discord, send} from "./discord";

import * as ircColors from "irc-colors";

irc.on("registered", message => {
  config.discord.channels.forEach(channel => {
    channel.ircChannels.forEach(ircChannel => {
      send(discord.channels.get(channel.id), `[${new Date().toISOString().replace(/T/, " ").replace(/\..+/, "")}] Listening on IRC channel ${ircChannel}`);
    });
  });
});

config.discord.channels.forEach(channel => {
  channel.ircChannels.forEach(ircChannel => {
    irc.on(`message${ircChannel}`, (from, message) => {
      // remove irc colors and styles
      message = ircColors.stripColorsAndStyle(message);
      
      console.log(`[${ircChannel}] ${from}: ${message}`);
      
      // remove markdown from sender
      from = from.replace("*", "\\*").replace("_", "\\_");
      
      send(discord.channels.get(channel.id), `[${ircChannel}] **${from}**: ${message}`);
    });
  });
});

function exitHandler(options, exitCode){
  console.log(`Exit code: ${exitCode}`);

  discord.user.setStatus("invisible");
  discord.user.setActivity("Offline");

  irc.disconnect("Goodbye", () => {
    discord.destroy().then(() => {
      process.exit();
    });
  });
}

["beforeExit", "disconnect", "exit", "message", "uncaughtException", "unhandledRejection", "SIGINT", "SIGTERM", "SIGUSR1", "SIGUSR2", "SIGHUP", "SIGBREAK"].forEach((eventType: any) => {
  process.on(eventType, exitHandler.bind(null, {exit: true}));
});