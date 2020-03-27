let Keyv = require("keyv");
let { MessageEmbed } = require("discord.js");
module.exports = {
    execute: async message => {
        let db = new Keyv(process.env.MONEY_DB);
        let member = message.mentions.members.first() || message.member;
        let balance = (await db.get(member.user.id)) || 0;

        let embed = new MessageEmbed()
            .setColor([255,0,0])
            .setAuthor(`Баланс ${member.user.tag} - ${balance}`, member.user.avatarURL())
            .setTimestamp();

        await message.channel.send(embed);
    },
    name: "баланс"
};