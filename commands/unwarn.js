const Keyv = require('keyv');
let { MessageEmbed } = require("discord.js");
module.exports = {
	execute: async message => {
        let args = message.content.split(" ");
        let log = message.guild.channels.cache.find(l => l.id == '694254188229820506')
        const db = new Keyv(process.env.WARNS_DB);
        const member = message.mentions.members.first();
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(':x: У вас нет прав!');
        if(!member) return message.channel.send(':x: Вы не указали участника!')
        const balance = (await db.get(member.user.id)) || 0;
        if(balance == 0) return message.channel.send(':x: У участника нет предупреждений!')
        db.set(member.id, balance - 1)
        let embed = new MessageEmbed()
        .setTitle(`Предупреждение снято у : ${member.user.tag}`)
            .addField("Предупреждение снял:",message.author,true)
            .addField("Предупреждений:", balance -1,true)
            .setColor("#" + Math.random().toString(16).slice(2, 8))
            .setThumbnail('https://i.imgur.com/EBGj2Yb.png')
            .setTimestamp();
        log.send(embed)
       
    },
	name: 'снятьПредупреждение',
	desc: 'Снимает предупреждение у участника сервера.',
	usage: '/снятьПредупреждение <участник>',
};