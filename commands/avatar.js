let { MessageEmbed } = require("discord.js");
module.exports = {
	execute: async message => {
        const member = message.mentions.members.first() || message.member;
        let embed = new MessageEmbed()
        .setAuthor(member.user.tag)
        .setImage(member.user.avatarURL({dynamic: true, format: 'png', size: 1024}))
.setColor("#" + Math.random().toString(16).slice(2, 8))
message.channel.send(embed)
    },
    name: "аватар",
    desc: "Просмотр аватара пользователя",
    usage: "/аватар <участник>"
};