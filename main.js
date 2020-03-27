const { Client } = require('discord.js'); // Load discord client library
const { TOKEN, PREFIX } = require('./config.js'); // Load configuration file
const client = new Client({ disableMentions: 'everyone' }); // Load client & disable all mentions '@everyone'

// When the bot start:
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`); // Send a message log in the console
});

// When any user send a message in a discord channel:
client.on('message', msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send('Pong');
});

client.login(TOKEN); // Connect the bot to our discord server (guild)
