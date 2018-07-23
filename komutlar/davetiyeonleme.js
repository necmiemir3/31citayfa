exports.run = (client, msg, args) => {
  const members = msg.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
  return msg.channel.send(members.map(member => `\`${member.id}\` ${member.displayName}`).join("\n") || "Lan sen kimsin link paylaşıyon bir daha görmeyeyim ha!");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ci"]
};

exports.help = {
  name: 'davetiyeonleme',
  description: 'Returns a list of members with an invite as their game.',
  usage: 'davetiyeonleme'
};