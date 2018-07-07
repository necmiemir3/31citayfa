const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Balık Tuttun Balığı Çekiyorsun..').then(message => {
   var espriler = ['Hamsi Tuttun!' ,'Levrek Tuttun!' ,'Hiçbirşey Tutamadın Maalesef!' ,'Alabalık Tuttun!' ,'Maalesef Balık Oltadan Kaçtı!' ,'İstavrit Tuttun!'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'balıktut',
  description: 'Balık Tutarsın.',
  usage: 'balıktut'
};
