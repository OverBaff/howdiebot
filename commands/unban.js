let { MessageEmbed } = require("discord.js");
module.exports = {
	execute: async message => {
        let args = message.content.split(" ");
        let log = message.guild.channels.cache.find(l => l.id == '694254188229820506')
        let membr  = args[1]
        if(!membr) return message.channel.send(':x: Вы не указали id!');
        let member = `<@${membr}>`
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(':x: У вас нет прав!');
        let embed = new MessageEmbed()
        .setTitle(`Разблокирован : ${args[1]}`)
            .addField("Разблокировал:",message.author,true)
            .setColor("#" + Math.random().toString(16).slice(2, 8))
            .setThumbnail('https://i.imgur.com/NLCI4I3.png')
            .setTimestamp();
        log.send(embed)
        message.guild.members.unban(membr)
    },
    name: "разблокировать",
    desc: "Разблокирует участника сервера.",
    usage: "/разблокировать [id] "
    };