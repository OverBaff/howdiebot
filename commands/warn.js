const Keyv = require('keyv');
let { MessageEmbed } = require("discord.js");
module.exports = {
	execute: async message => {
        let args = message.content.split(" ");
        let log = message.guild.channels.cache.find(l => l.id == '694254188229820506')
        const db = new Keyv(process.env.WARNS_DB);
        const member = message.mentions.members.first();
        if(member == message.author)return message.channel.send(':x: Вы не можете дать предупреждение самому себе!');
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(':x: У вас нет прав!');
        if(!member) return message.channel.send(':x: Вы не указали участника!')
        let res = args.slice(2).join(" "); 
        if(!res) return await message.channel.send(":x: Напишите причину");
        const balance = (await db.get(member.user.id)) || 0;
        db.set(member.id, balance + 1)
        let embed = new MessageEmbed()
        .setTitle(`Предупреждение : ${member.user.tag}`)
            .addField("Предупреждение выдал:",message.author,true)
            .addField("Причина:",res,true)
            .addField("Предупреждений:", balance +1,true)
            .setColor("#" + Math.random().toString(16).slice(2, 8))
            .setThumbnail('https://i.imgur.com/YdoUgfu.png')
            .setTimestamp();
        log.send(embed)
        message.channel.send(`${member} получил предупреждение!Причина: \`${res}\`.Теперь у него **${balance +1}** преждупредения.`)
        if(balance == 1){
            message.guild.member(member).kick(res)
            let embe1d = new MessageEmbed()
        .setTitle(`Исключен : ${member.user.tag}`)
            .addField("Исключил:",`<@694051784129511424>`,true)
            .addField("Причина:",res,true)
            .setColor("#" + Math.random().toString(16).slice(2, 8))
            .setThumbnail('https://i.imgur.com/m0578x0.png')
            .setTimestamp();
        log.send(embe1d)
        message.guild.member(member).kick(res)
        }
        if(balance == 2){
            message.guild.member(member).ban(res)
            let embed1 = new MessageEmbed()
        .setTitle(`Заблокирован : ${member.user.tag}`)
            .addField("Заблокировал:",`<@694051784129511424>`,true)
            .addField("Причина:",res,true)
            .setColor("#" + Math.random().toString(16).slice(2, 8))
            .setThumbnail('https://i.imgur.com/tfSm8aN.png')
            .setTimestamp();
        log.send(embed1)
        }
    },
	name: 'предупреждение',
	desc: 'Даёт предупреждение участнику сервера.',
	usage: '/предупреждение <участник> <причина>',
};