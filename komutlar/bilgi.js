const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et Dostum Oraya Gönderdim!');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Bot sürümü: 1.0.0  Yapımcı: Batman Bot Ekibi  **:fire:**\n\n_**BOT Davet Linki:**_\n\nhttps://discordapp.com/api/oauth2/authorize?client_id=464877555296632842&permissions=2146958583&scope=bot \n\n_**Bot Destek Sunucusu: https://discord.gg/cN29K8f **_\n\n**Batman** sunucusunun davet linki: https://discord.gg/cN29K8f  \n\n**:copyright: 2018 Batman**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
