const Discord = require('discord.js');
const { stripIndents, oneLine } = require('common-tags');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setAuthor('BİLGİ')
  .setColor(3447003)
  .setDescription(`Yapımcı : Arda#2501 \n\n\ İnternet Sitesi :Eklenicek \n\n\ Komutların Hepsini Görmek İçin : k!yardım \n\n\ Botu Sunucunuza Eklmek İçin :https://discordapp.com/api/oauth2/authorize?client_id=447041352073478144&permissions=2146958583&scope=bot \n\n\ Destek Sunucusu : https://discord.gg/UXCbAtf \n\n\ Bağış Barkodu : Eklenicek `)
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot hakkında bilgi verir.',
  usage: 'bilgi'
};
