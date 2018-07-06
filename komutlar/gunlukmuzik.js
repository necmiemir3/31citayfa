const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Şarkı Yükleniyor...').then(message => {
   var espriler = ['https://www.youtube.com/watch?v=50QA4OsXcKc' ,'https://www.youtube.com/watch?v=soEGH6Akf5A','https://www.youtube.com/watch?v=d3YXTFLXf2Q','https://www.youtube.com/watch?v=EQ1RQO0_pmc','https://www.youtube.com/watch?v=quwybaIr5aA','https://www.youtube.com/watch?v=Gfek6fBTLIs','https://www.youtube.com/watch?v=Gfek6fBTLIs','https://www.youtube.com/watch?v=5PnEC4__CyM','https://www.youtube.com/watch?v=3RmbF8i5YsI','https://www.youtube.com/watch?v=sV2t3tW_JTQ','https://www.youtube.com/watch?v=BcjoGIoErdE','','','',''];
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
  name: 'günlükmüzik',
  description: 'Bot Günlük Müzik Atar.',
  usage: 'günlükmüzik'
};
