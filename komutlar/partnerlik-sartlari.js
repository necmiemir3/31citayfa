const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("B A T M A N 2018 Eğlence&Yetkili Botu ! \n")
  .setColor("RANDOM")
  .addField("**1.** `40+ kişilik sunucunuz olmalı.","ᅠ")
  .addField("**2.** `Günlük aktif 20 üyeniz olmalıdır.","ᅠ")
  .addField("**3.** `Eğer Partnerliğimizi Silerseniz Partnerlik Iptal Olur!,","ᅠ")
  .addField("**4.** `BOT^umuzu Sunucunuza Eklemelisiniz!","ᅠ")
  .addField("**YUKARDAKI KURALLARA UYULMADIGI TAKDIRDE PARTNERLIK IPTAL OLUR!!!**","ᅠ")
  .setFooter("♥ 2018 ♥ BATMAN ♥ BOT ♥ 0.5.0 V ♥", "https://images-ext-2.discordapp.net/external/Oc1mXT6iMiSLjqwy5geBCL0IHFgeXcuFEXpLNZE9pTQ/https/cdn.discordapp.com/attachments/464130193569873920/464838145066926120/2109042164x64.jpg")


  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'şartlar',
  description: 'Partnerlik şartlarımızı gösterir.',
  usage: 'şartlar'
};