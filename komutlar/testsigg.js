const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
	        .addField("ba!3dgif  =  3 Boyutlu Gifler Oluşturur.", "ᅠ")
            .addField("ba!ailemiz  =  Botu Kullanan Sunucuları Gösterir.", "ᅠ")
            .addField("ba!bilgi  =  Botun Destek Sunucusunu VB. Gösterir.", "ᅠ")
            .addField("ba!davet  =  Botun Davet Linkini Gösterir.", "ᅠ")
            .addField("ba!espri  =  Bot Espri Yapar.", "ᅠ")
            .addField("ba!kullanıcıbilgim  =  Kendi Bilgilerini Gösterir", "ᅠ")
			.addField("ba!ping  =  Botun Pingini Gösterir.", "ᅠ")
			.addField("ba!nahçek  =  El Hareketi Çeker.", "ᅠ")
			.addField("ba!sunucubilgi  =  Sunucu Bilgilerini Gösterir.", "ᅠ")
			.addField("ba!kick =  Birini Kickleme Komutu", "ᅠ")
			.addField("ba!ban  =  Birini Banlama Komutu.", "ᅠ")
			.addField("ba!unban  =  Ban Kaldırma Komutu.", "ᅠ")
			.addField("ba!şartlar  =  Partner Olmak İçin Şartları Gösterir.", "ᅠ")
			.addField("ba!temizle  =  Mesaj Temizlersiniz", "ᅠ")
			.addField("ba!yaz  =  Bota Yazı Yazdırırsınız.", "ᅠ")
			.addField("ba!çayiç  =  Şekerli Veya Şekersiz Çay İçersiniz.", "ᅠ")
			.addField("ba!redbulliç  =  Redbull İçersin.", "ᅠ")
			.addField("ba!kahveiç  =  Nescafe İçersin.", "ᅠ")     
			.addField("ba!yazıtura  =  Yazı Mı? Tura Mı? Oynarsın.", "ᅠ")
			.addField("ba!günlükmüzik  =  Her Gün Yeni Şarkılar Eklenir.", "ᅠ")
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
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Sigara İçersin.',
  usage: 'yardım'
};
