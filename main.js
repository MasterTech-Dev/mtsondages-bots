const { Client } = require('discord.js'); // Load discord client library
const { MessageEmbed } = require('discord.js'); // Load discord embed message library
const { TOKEN, PREFIX } = require('./config.js'); // Load configuration file
const client = new Client({ disableMentions: 'everyone' }); // Load client & disable all mentions '@everyone'

// When any user send a message in a discord channel:
client.on('message', msg => {
  if (msg.author.bot) return;
  const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === 'repeat') {
    const embed = new MessageEmbed();

    if (msg.channel.id !== "693180701847322654") {
      embed.setColor('#cc0000')
        .setDescription(`:x: You can't run this command in this channel!`);
      msg.channel.send(embed);
      return msg.delete().then(console.log('Command\'s invocation message has been deleted!'));
    }

    const channel_id = args.shift();
    const color_name = args.shift().toLowerCase();

    if (channel_id.length !== 18) {
      embed.setColor('#cc0000')
        .setDescription(`:x: The specified id **${channel_id}** is not valid!`);
      msg.channel.send(embed);
      return msg.delete().then(console.log('Command invocation has been deleted ;)'));
    }

    const channel = client.channels.fetch(channel_id);

    if (msg.channel.id === channel_id || !channel) {
      if (color_name.startsWith('#')) {
        if (color_name.length !== 7 && color_name.length !== 4) {
          embed.setColor('#cc0000')
            .setDescription(`:x: The color **${color_name}** is not valid!`);
          return msg.channel.send(embed);
        }

        embed.setColor(color_name)
          .setDescription(args.join(' '));
        return channel.then(c => c.send(embed));
      }
      embed.setColor('#37BB4B');
      embed.setDescription(color_name + ' ' + args.join(' '));
      return channel.then(c => c.send(embed));
    }

    if (color_name.startsWith('#')) {
      if (color_name.length !== 7 && color_name.length !== 4) {
        embed.setColor('#cc0000')
          .setDescription(`:x: The color **${color_name}** is not valid!`);
        return msg.channel.send(embed);
      }

      embed.setColor(color_name)
        .setDescription(args.join(' '));
      return client.channels.fetch(channel_id).then(c => c.send(embed));
    }
    embed.setColor('#37BB4B');
    embed.setDescription(color_name + ' ' + args.join(' '));
    client.channels.fetch(channel_id).then(c => c.send(embed));
  } else if (cmd === 'ban') {
    
  }
});

client.login(TOKEN); // Connect the bot to our discord server (guild)

// When the bot start:
client.on('ready', () => console.log('I\'m ready to be used')); // Send a message log in the console when the bot is started
client.on('error', console.error); // Send a message log in the console when the bot detect an error
client.on('warn', console.warn); // Send a message log in the console when the bot warn anything
client.on('debug', console.log); // Send a message log in the console when the bot is debugging anything
