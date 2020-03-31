let { MessageEmbed } = require("discord.js");
module.exports = {
    execute: async message => {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(':x: У вас нет прав!');
        let member = message.mentions.members.first();
        let args = message.content.split(" ");
        if(!member) return message.channel.send(':x: Вы не указали участника!')
        let res = args.slice(2).join(" "); 
        if(!res) return await message.channel.send(":x: Напишите причину");
        let log = message.guild.channels.cache.find(l => l.id == '694254188229820506')
        let embed = new MessageEmbed()
        .setTitle(`Исключен : ${member.user.tag}`)
            .addField("Исключил:",message.author,true)
            .addField("Причина:",res,true)
            .setColor("#" + Math.random().toString(16).slice(2, 8))
            .setThumbnail('https://i.imgur.com/m0578x0.png')
            .setTimestamp();
        log.send(embed)
        message.guild.member(member).kick(res)
    },
    name: "исключить",
    desc: "Исключает участника из сервера.",
    usage: "/исключить [участник] <причина>"
    };