let { MessageEmbed } = require("discord.js");
module.exports = {
	execute: async message => {
        let args = message.content.split(" ");
        let log = message.guild.channels.cache.find(l => l.id == '694254188229820506')
        const member = message.mentions.members.first();
        if(member == message.author)return message.channel.send(':x: Вы не можете заблокировать самого себя!');
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(':x: У вас нет прав!');
        if(!member) return message.channel.send(':x: Вы не указали участника!')
        let res = args.slice(2).join(" "); 
        if(!res) return await message.channel.send(":x: Напишите причину");
        let embed = new MessageEmbed()
        .setTitle(`Заблокирован : ${member.user.tag}`)
            .addField("Заблокировал:",message.author,true)
            .addField("Причина:",res,true)
            .setColor("#" + Math.random().toString(16).slice(2, 8))
            .setThumbnail('https://i.imgur.com/tfSm8aN.png')
            .setTimestamp();
        log.send(embed)
        message.guild.member(member).ban(res)
    },
    name: "заблокировать",
    desc: "Блокирует участника сервера.",
    usage: "/заблокировать [участник] <причина>"
    };