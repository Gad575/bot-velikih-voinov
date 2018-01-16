const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if(message.content == 'Привет!') {
    message.reply('Привет!');
  }
});

client.login(process.env.BOT_TOKEN);
