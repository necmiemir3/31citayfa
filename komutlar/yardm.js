const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel Mesajlarını Kontrol Et Dostum Gönderdim :white_check_mark:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
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
			.addField("ba!balıktut  =  Balık Tutarsın.", "ᅠ")
			.addField("ba!haşmetlim  =  Haşmetlinin Boyunu Gösterir :D. ( YENİ! )", "ᅠ")
			
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botun davet linkini gönderir.',
  usage: 'yardım'
};
