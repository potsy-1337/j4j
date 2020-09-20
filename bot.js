const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');//TRIQUETRA WAS HERE
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

const moment = require('moment');
var Jimp = require('jimp');//TRIQUETRA WAS HERE
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

const { Client, Util } = require('discord.js');//TRIQUETRA WAS HERE
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

const weather = require('weather-js')//TRIQUETRA WAS HERE
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

const fs = require('fs');
const db = require('quick.db');//TRIQUETRA WAS HERE
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

require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const cfg = require('./am.json');
//-----------------------------------------------\\//TRIQUETRA WAS HERE
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

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log("Ryan | Hostlandı");
  response.sendStatus(200);
});
app.listen(8000);
setInterval(() => {
  http.get(`http://projeadın.glitch.me/`);
}, 280000)
//-----------------------------------------------\\
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


var prefix = ayarlar.prefix;
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

const log = message => {
    console.log(`${message}`);
};

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

client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
      let props = require(`./komutlar/${f}`);
      log(`Yüklenen komut: ${props.help.name}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });//TRIQUETRA WAS HERE
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

  });//TRIQUETRA WAS HERE
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







client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });//TRIQUETRA WAS HERE
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

};//TRIQUETRA WAS HERE
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


  client.setMaxListeners(20);

client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });//TRIQUETRA WAS HERE
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

};//TRIQUETRA WAS HERE
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

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//-----------------------KOMUTLAR-----------------------\\


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



client.on("guildMemberAdd", async (member, params, args) => {
 let random = [
 `<@${member.id}> sunucuya yeni katıldı - glhf!`,
 `<@${member.id}> yeni katıldı. Herkes meşgul görünsün!`,
` <@${member.id}> yeni katıldı. İyileşebilir miyim? `,
`<@${member.id}> partinize katıldı.`,
`<@${member.id}> Ek direkler inşa etmelisiniz.`,
`Ermagherd. <@${member.id}> burada.`,
`Hoş geldiniz, <@${member.id}> Biraz kalın ve dinleyin.`,
`Hoş geldiniz, <@${member.id}> Sizi bekliyorduk (͡ ° ͜ʖ ͡ °) `,
` Hoş geldiniz <@${member.id}> Umarız pizza getirmişsinizdir.`,
`Hoş geldiniz <@${member.id}> Silahlarınızı kapıya bırakın.`,
`Vahşi bir <@${member.id}> göründü.`,
`Swoooosh. <@${member.id}> az önce indi.`,
`Kendinizi hazırlayın. <@${member.id}> sunucuya yeni katıldı.`,
`<@${member.id}> yeni katıldı. Muzlarınızı saklayın.`,
`<@${member.id}> yeni geldi. OP görünüyor - lütfen nerf.`,
`<@${member.id}> sadece sunucuya kaydırıldı.`,
`Sunucuda bir <@${member.id}> ortaya çıktı.`,
`<@${member.id}> sunucuya atladı. Kangroo !!`,
`<@${member.id}> az önce ortaya çıktı. Biramı tut.`
]
  //:ok_hand: 


  var welcomechannel = client.channels.get("757291959139172554")
   welcomechannel.send(`${random[Math.floor(Math.random() * random.length)]}`)

  
 })


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





client.on(`userUpdate`, (oldUser, newUser) => {
 

  let kişi = client.users.get(oldUser.id)

  let avatar = kişi.avatarURL

  let kanal = client.channels.find(ch => ch.id === '757291701827272837')

 

  const emb = new Discord.RichEmbed()

  .setImage(avatar)
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

  .setFooter(`${kişi.tag}`)
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

  .setTimestamp()
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

  .setDescription(`Fotoğrafa gitmek için [tıkla](${kişi.avatarURL})!`)

  kanal.send(emb)

 

})
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


client.on("message" , async msg => {
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return;
 
  let afk = msg.mentions.users.first()
 
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
 
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){
 
     let ryan = new Discord.RichEmbed()
     .setDescription(`**Etiketlediğiniz üye ${sebep}** sebebiyle. Klavyeden uzak Modunda ! `)
     msg.channel.send(ryan)
   }
 }
  if(msg.author.id === kisi) {
 
    let afkembed = new Discord.RichEmbed()
    .setDescription(`Başarı ile uyku modundan çıktınız.`)
    msg.channel.send(afkembed)
  db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
   msg.member.setNickname(isim)
   
 }
 
});


client.on("guildMemberAdd", async member => {
if(member.guild.id !== "729451385044598844") return;
member.addRole(`754677422980464684`)

});




client.on("userUpdate", async (user, newUser) => {
  
  //${message.guild.members.filter(m => m.user.discriminator.includes(discrim17)).size}
  
  let ryan = "0017"
  let kanal = client.guilds.get('729451385044598844').channels.get('757290708528005120')
  let member = client.guilds.get('729451385044598844').members.get(user.id)
  let ryancolor = "#0d0000"
  
  
  if(!member.roles.has('discrim rol id')) {
    
    if(member.user.discriminator.includes === ryan) {
      
      member.addRole('757290798009155747')
 const ryancık = new Discord.RichEmbed()
      .setColor(ryancolor)
      .setDescription(`${user} discrimine #${ryan} eklediği için rolünü aldı.`)
      .setTimestamp()
      kanal.send(ryancık)
    }
  
    
    
  
    
    } if(member.user.discriminator.includes === (`${!ryan}`)) {
      
      member.removeRole('757290798009155747')
       const ryancık = new Discord.RichEmbed()
      .setColor(ryancolor)
      .setDescription(`${user} dicriminden ##${ryan} kaldırdığı için roünü kaybetti.`)
      .setTimestamp()
      kanal.send(ryancık)
    }
  
    
          });


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





// GUARD KISMI

let botroles = ["754267396629594112",];
let dokunma = [
  "749529202696388632", //
  "yetkili id", //
  "yetkili id", //
  "yetkili id", //
];

client.on("roleUpdate", async function(oldRole, newRole) {
  const bilgilendir = await newRole.guild
    .fetchAuditLogs({ type: "ROLE_UPLATE" })
    .then(hatırla => hatırla.entries.first());
  let yapanad = bilgilendir.executor;
  let idler = bilgilendir.executor.id;
  if (idler === cfg.allah) return;
  if (oldRole.hasPermission("ADMINISTRATOR")) return;

  setTimeout(() => {
    if (newRole.hasPermission("ADMINISTRATOR")) {
      newRole.setPermissions(newRole.permissions - 8);
    }

    if (newRole.hasPermission("ADMINISTRATOR")) {
      if (!client.guilds.get(newRole.guild.id).channels.has(cfg.guard))
        return newRole.guild.owner.send(
          `Rol Koruma Nedeniyle ${yapanad} Kullanıcısı Bir Role Yönetici Verdiği İçin Rolün **Yöneticisi** Alındı. \Rol: **${newRole.name}**`
        ); //bu id ye sahip kanal yoksa sunucu sahibine yaz

      client.channels
        .get(cfg.guard)
        .send(
          `Rol Koruma Nedeniyle ${yapanad} Kullanıcısı Bir Role Yönetici Verdiği İçin Rolün **Yöneticisi Alındı**. \Rol: **${newRole.name}**`
        );
    }
  }, 1000); 
});

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

client.on("guildMemberUpdate", async (oldUser, newUser) => {
  const audit = await oldUser.guild
    .fetchAuditLogs({ type: "MEMBER_ROLE_UPDATE" })
    .then(audit => audit.entries.first());
  const yapanad = audit.executor;
  const id = audit.executor.id;
  if (id === client.user.id || id === oldUser.guild.ownerID) return;

  if (audit.executor.bot) return;
  if ("") return;

  let role_name = "";
  let pasif = "";
  const db = require("quick.db");
  if (oldUser.roles.size < newUser.roles.size) {
    oldUser.roles.forEach(r => {
      db.set(`${r.id}`, "X");
    });
    newUser.roles.forEach(async r => {
      let check = await db.fetch(`${r.id}`);
      if (!check) {
        if (
          r.hasPermission("ADMINISTRATOR") ||
          r.hasPermission("MANAGE_CHANNELS") || 
          r.hasPermission("MANAGE_ROLES") ||
          r.hasPermission("BAN_MEMBERS") ||
          r.hasPermission("MANAGE_WEBHOOKS") ||
          r.hasPermission("MANAGE_GUILD") ||
          r.hasPermission("KICK_MEMBERS")
        ) {
          newUser.removeRole(r.id);
          role_name = r.name;
          const kanal = client.channels.get(cfg.guard);
          kanal.send(
            `(**<@${audit.executor.id}>** (${audit.executor.id})) İsimli Yetkili , Bir Üyeye Rol Vermeye Çalıştığı İçin Rol Alındı.\n Rolü Vermeye Çalıştığı Kişi: (<@${newUser.id}> (${newUser.id}))\nVermeye Çalıştığı Rol İse: (**${role_name}** (${r.id}))  `
          );
        } else {
          pasif = "x";
        }
      }
    });
    newUser.roles.forEach(r => {
      db.delete(`${r.id}`);
    });
  }
});


client.on("guildMemberAdd", async member => {
  const entry = await member.guild
    .fetchAuditLogs({ type: "BOT_ADD" })
    .then(audit => audit.entries.first());
  const xd = entry.executor;
  if (dokunma.includes(xd.id)) return;
  if (xd.id === cfg.sahip) return;
  if (member.user.bot) {
    member
      .ban("• Bot Koruması")
      .then(client.members.get(xd.id).ban("• Bot Koruması"));
    member.guild.roles.forEach(async function(welel) {
      if (botroles.includes(welel.id)) return;
      if (
        welel.hasPermission("ADMINISTRATOR") ||
        welel.hasPermission("BAN_MEMBERS") ||
        welel.hasPermission("MANAGE_GUILD") ||
        welel.hasPermission("KICK_MEMBERS") ||
        welel.hasPermission("MANAGE_ROLES") ||
        welel.hasPermission("MANAGE_CHANNELS")
      ) {
        welel.setPermissions(0);
      }
    });
    let hokoko = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle("• Bot Koruması")
      .setDescription(
        `**<@${xd.id}>** Adlı Kullanıcı Bot Ekledi Bende Onu Banladım, Banlanan Bot: <@${member.id}> => **${member.tag}**`
      )
      .setTimestamp();
    client.channels.get(cfg.botchannel).send(hokoko);
    member.guild.owner.send(hokoko).then(
      client.mebers.get(cfg.sahip).send(
        new Discord.RichEmbed()
          .setTitle("• Bot Koruması")
          .setDescription(
            `**<@${xd.id}>** Adlı Kullanıcı Bot Ekledi || Bende Onu Banladım, Banlanan Bot: <@${member.id}> => **${member.tag}**`
          )//TRIQUETRA WAS HERE
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

          .setColor("RED")//TRIQUETRA WAS HERE
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

      )//TRIQUETRA WAS HERE
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

    );//TRIQUETRA WAS HERE
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

  }//TRIQUETRA WAS HERE
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

});//TRIQUETRA WAS HERE
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
