const Discord = require('discord.js');

 //TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE
//TRIQUETRA WAS HERE


exports.run = (client, message, args) => {

 

  let mesaj = args.slice(0).join(' ');

if (!message.author.id != '749529202696388632') return;
  
if (mesaj.length < 1) return message.reply('Bir mesaj gönder');
message.delete()


    const yaz = new Discord.RichEmbed()

      .setColor('#2f3136')

      .setAuthor('Potsudan bir mesaj var.')
      .setDescription(` ${mesaj} `)
      .setTimestamp()
    return message.channel.sendEmbed(yaz);

};

 

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['ows'],

  permLevel: 4

};

 

exports.help = {

  name: 'yaz',

  description: '',

  usage: ''

};

 

