const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username)
	.setDescription('**Herkese Çay Ismarladı! ( Hesabı Ödeyemez Fln Şimdi Başınıza Kalmasın Direk İçip Kaçın Beyler :D )**')
    .setImage('https://images-ext-1.discordapp.net/external/_emntPoHeymm-1iZ-2fErqfpGAoiPUldmxCyYwHr7QI/%3Fwidth%3D374%26height%3D250/https/images-ext-1.discordapp.net/external/JYiaThRlKzJ80pvIAKWGAzz1YTU84Y-sR17HzUWznHo/http/cdn.yemek.com/mncrop/940/625/uploads/2015/04/turkiyede-cay-kulturu22.jpg');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Davet Linkim: https://discordapp.com/api/oauth2/authorize?client_id=464805066155622401&permissions=2146958583&scope=bot');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şekerliçay', 'Şekerliçayt', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'herkesebendençay',
  description: 'Çay İçersin.',
  usage: 'herkesebendençay'
};