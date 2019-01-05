import config from "./config";

import * as discord from "discord.js";

const client = new discord.Client();

client.on("ready", () => {
  client.user.setStatus("online");
  client.user.setActivity("IRC", {type: "LISTENING"});

  console.log(`[Discord] Logged in as ${client.user.tag}`);
  
  console.log(`[Discord] Invite to server: https://discordapp.com/api/oauth2/authorize?client_id=${config.discord.clientID}&permissions=${config.discord.permissions}&scope=bot`);
});

client.on("message", message => {
  if(message.mentions.users.first() !== client.user){
    return;
  }

  console.log(message.mentions.members.first().toString());
  message.content = message.content.replace(message.mentions.members.first().toString(), "");
  message.content = message.content.trim();

  console.log(`[Discord] Got ${message.content}`);

  if(message.content === 'ping'){
    message.channel.send("Pong");
  }
});

client.login(config.discord.token);

function send(channel: discord.Channel, message: string){
  if(!channel || !((channel): channel is discord.TextChannel => channel.type === "text")(channel)){
    return;
  }

  channel.send(message);
}

export {client as default, send};