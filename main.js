const Discord = require("discord.js")
const client = new Discord.Client()
const communist = require('./communist.js');
const communistManifesto = communist.communistManifesto;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content.includes('lol') || msg.content.includes('haha')) {
    msg.reply("Bazinga!");
  }

  if (msg.content.includes('!communist')) {
    msg.reply(communistManifesto[0])
  }
})

client.login(process.env.TOKEN)