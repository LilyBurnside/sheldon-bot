const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ]
})
const communist = require('./communist.js');
const communistManifesto = communist.communistManifesto;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content.includes('lol') || msg.content.includes('haha') || msg.content.includes('Lol') || msg.content.includes('Haha')) {
    msg.reply("Bazinga!");
  }

  if (msg.content.includes('!communist')) {
    const randomNumber = Math.floor(Math.random() * 10)
    msg.reply(communistManifesto[randomNumber])
  }

  if (msg.content.includes('morb') || msg.content.includes('Morb')) {
    msg.react('<:9491455149627433971:982006797718159441>');
    msg.react('<a:948544621418536961:982006666486755409>');
  }
})

client.login(process.env.TOKEN)