const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

  let pages = ['**Komutlar**\n\nk!afk = Afk Olursunuz. \nk!avatar = Avatarınızı Gösterir. \nk!yardım = BOT Komutlarını Atar. \nk!bağış = Bağış Barkodunu Gösterir. \nk!ping = BOTun Pingini Gösterir. \nk!istatistik = BOT İstatistiklerini Atar.', '**Komutlar 2**\n\nk!ban = Ban Atar. \nk!banaç = Banı Açar. \nk!bilgi = Bot Hakkında Bilgi Verir. \nk!davet = Botu Davet Eder ! \nk!duyuru = Bot Duyuru Yapar. \k!geliştirme-kartları = Geliştirme Kartlarını Gösterir. \nk!istatistik = İstatistikleri Gösterir. \nk!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nk!kullanıcıbilgim = Kullanıcı Bilgini Gösterir. \nk!kurabiye = Kurabiye Verir.', '**Komutlar 3**\n\nk!oylama = Oylama Yapar \nk!ping = Botun Pingini Gösterir. \nk!rol-ver = İstediginiz Kişiye Rol Verir. \nk!ses-kanal-aç = Ses Kanalı Açar. \nk!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nk!sunucubilgi = Sunucu Bilsigini Gösterir. \nk!tavsiye = Tavsiye Verir. \nk!temizle = Mesajları Siler', '**Komutlar 4**\n\nk!uyar = Kişiyi Uyarırsınız. \nk!yazı-kanalı-aç = Yazı Kanalı Açar . \nk!yenilikler = Yeniliklerlen Haberdar Olursunuz. \nk!saat = Türkiye Saatini Gösterir \nk!ascii = Yaz Ve Gör :) \nk!Atam = Değer Ve Kalbimizde Taşıdığımız Atamız <3 \nk!sunucuresmi = Sunucunuzun Resmini Gösterir. \nk!çekiliş = Çekiliş Yapar. \nk!çayiç = Çay İçer. \nk!çekiç = Birisine Çekiç Atar. \nk!yapımcım = Yapımcıyı Gösterir. \nk!ateşet = Ateş Eder :)', '**Komutlar 5** \n\nk!atla = Atlarsınız \nk!şelale = Şelale Gifi Gösterir \nk!wtf = Yorumsuz \nk!havadurumu = İstediginiz Şehrin Hava Durumunu Gösterir \nk!kullanıcı-ara = İstediginiz İsimle Kullanıcı Arar \nk!hedef = Hedefimizi Gösterir \nk!dm = Bu Kurucuya Özel \nk!roller = Sunucudaki Rolleri Gösterir \nk!rol-oluştur = Sunucuda Rol Oluşturur \nk!kaçcm = Sucuğunuzu Gösterir \nk!sunucu-resim-değiş = Sunucu Resmini Değiştirir ', '**Komutlar 6** \n\nk!banned = Dene Ve Gör]; // Sayfalar
  let page = 1; // Sayfa 1

  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter(`Sayfa ${page} / ${pages.length}`, "https://cdn.discordapp.com/attachments/447421983047811072/447423502513995777/fotograf.png")
  .setDescription(pages[page-1])
  .setAuthor("Kepçük", "https://cdn.discordapp.com/attachments/447421983047811072/447423502513995777/fotograf.png")

  message.channel.send(embed).then(msg => {

    msg.react('⬅').then(r => {
      msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir.',
usage: 'yardım'
};
