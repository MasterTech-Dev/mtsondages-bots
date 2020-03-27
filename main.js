const { Client } = require('discord.js');
const client = new Client({ disableMentions: 'everyone' });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
  if (msg.content === "everyone") msg.channel.send("@everyone, Salut à tous ;)", { disableMentions: 'none' });
  if (msg.content === "noteveryone") msg.channel.send("@everyone (noteveryone), Salut à tous");
});

client.login('NjkzMTc5NDU0NjM3MzQyODkx.Xn5T0g.j2XpJGmZq2enbkuekBzhLBTwMaQ');