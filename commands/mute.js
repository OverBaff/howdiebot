let fs = require("fs");
let ms = require("ms");
let { MessageEmbed } = require("discord.js"); 
let client = require("../index.js");
module.exports = {
    execute: async message => {
        let member = message.mentions.members.first();
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(':x: У вас нет прав!');
        let infoList = JSON.parse(fs.readFileSync(`${process.cwd()}/mute.json`).toString());
        let args = message.content.split(" ");
        
        if(!member) return await message.channel.send(":x: Упомяните участника");
        if(message.author.id == member.user.id) return message.channel.send(":x: Вы не можете замутить самого себя!");
        let res = args.slice(3).join(" "); // cmd - 0; men - 1; time - 2; res - 3
        if(!res) return await message.channel.send(":x: Напишите причину");
        let time = ms(args[2]);
        if(!time) return await message.channel.send(":x: Укажите верное время");
        let info = {
            member: member.id,
            guild: message.guild.id,
            channel: message.channel.id,
            moder: message.author.id,
            time: args[2],
            date: new Date(),
            reason: res,
            refund: [] 
        };
         
      
        member.roles.cache.filter(r => r.name != "@everyone").forEach( r => {
            info.refund.push(r.id);
            member.roles.remove(r.id);
       });
       
        
       member.roles.add('694132474736803920')
       let log = message.guild.channels.cache.find(l => l.id == '694254188229820506')
        infoList[Date.now() + time] = info;
        fs.writeFile(`${process.cwd()}/mute.json`, JSON.stringify(infoList, null, 4), async () => {
            await message.channel.send(`${member} отправлен в мут! На ${args[2]} по причине : ${res}`);
            let embed = new MessageEmbed()
            .setTitle(`Мут выдан : ${member.user.tag}`)
            .addField("Мут выдал:",message.author,true)
            .addField("Причина мута:",res,true)
            .addField("Время мута:",args[2],true)
            .setColor("#" + Math.random().toString(16).slice(2, 8))
            .setThumbnail('https://i.imgur.com/1PNNkPW.png')
            .setTimestamp();
        log.send(embed)
    })
    },
name: "мут",
desc: "Ограничивает право писать на сервере.",
usage: "/мут [участник] <время> <причина>"
};