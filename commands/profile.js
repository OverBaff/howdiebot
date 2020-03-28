const { MessageEmbed } = require("discord.js");
const Keyv = require("keyv");
const moment = require('moment');

moment.lang('ru');
module.exports = {
    execute: async message => {
        const member = message.mentions.members.first() || message.member;
        const reputationDB = new Keyv(process.env.REPUTATION_DB);
        const moneyDB = new Keyv(process.env.MONEY_DB);
        const profilesDB = new Keyv(process.env.PROFILES_DB);

        let userFromDB = await profilesDB.get(member.user.id) || {};
        if(!userFromDB.header) userFromDB.header = {};
        const embed = new MessageEmbed()
            .setTitle(`Карточка участника ${member.user.tag}`)
            .setThumbnail(member.user.avatarURL())
            .setColor(userFromDB.lineColor)
            .setAuthor(userFromDB.header.text || "", userFromDB.header.image || "")
            .setImage(userFromDB.customImage)
            .setDescription(userFromDB.bio || "Участник не указал информацию о себе");

        //showing badges

        const badges = userFromDB.badges || [];
        let text = "<нет>";
        for(let i = 0; i < badges.length; i++){
            if(text == "<нет>") text = "";
            text += badges[i] + "\n";
        }

        embed.addField("Заслуги", text, true)
            .addField("Вступил на сервер",  `${moment(member.joinedAt).toString().substr(0, 15)}\n(${moment(member.joinedAt).fromNow()})`, true);

        //net worth

        const netWorth = await moneyDB.get(member.user.id) || 0;
        embed.addField("Баланс", netWorth + "§", true);

        //rep

        const rep = await reputationDB.get(member.user.id) || 0;
        embed.setFooter(`Репутация: ${rep}`, rep > 0 && rep != 0 ? "https://cdn1.iconfinder.com/data/icons/color-bold-style/21/04-512.png" : "https://pngimg.com/uploads/minus/minus_PNG39.png");
        
        message.channel.send(embed);
    },
    name: "профиль",
    desc: "Пасспорт участника сервера Хауди Хо",
    usage: "+профиль [участник]"
};