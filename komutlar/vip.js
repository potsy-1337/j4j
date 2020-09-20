exports.run  = async(client, message, args) => {
  const Discord = require('discord.js');
  const db = require('quick.db');
  
if(!message.member.roles.has("757283866598703164") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu komutu kullanmaya yetkin yok."); 


 let user = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!user.roles.has('754605394520702986')) {
user.addRole('754605394520702986')
const ryancık = new Discord.RichEmbed()
.setDescription(`${user} Allah oldun afrm`)
  message.channel.send(ryancık)

message.react('react id')


} else {
  user.removeRole('754605394520702986')
const member = new Discord.RichEmbed()
.setDescription(`${user} köle statüsüne düşürüldü köle oç.`)
message.channel.send(member)


  message.react('react id')


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

  
}
    }
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip', 'allah'],
  permLevel: 0,
};

exports.help = {
  name: 'vip',
  description: 'vip.',
  usage: 'vip @member.id',
};