import config from "./config";

import irc from "./irc";
import {default as discord, send} from "./discord";

irc.on("registered", message => {
  //console.log("[IRC] Message:", message);

  config.discord.channels.forEach(channel => {
    channel.ircChannels.forEach(ircChannel => {
      send(discord.channels.get(channel.id), `\[**INFO**] Listening on IRC channel ${ircChannel}`);
    });
  });
});

config.discord.channels.forEach(channel => {
  channel.ircChannels.forEach(ircChannel => {
    irc.on(`message${ircChannel}`, (from, message) => {
      // cleanup messages
      from = from.replace(/[^\x20-\x7E]/g, "");
      message = message.replace(/[^\x20-\x7E]/g, "");
    
      console.log(`[${ircChannel}] ${from}: ${message}`);
    
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