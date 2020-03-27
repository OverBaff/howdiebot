const client = require("../index.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
    execute: message => {
        let embed = new MessageEmbed()
            .setColor('#' + Math.random().toString(16).slice(2, 8));
        client.commands.forEach(e => {
            if(e.ignore) return;
            embed.addField(e.usage || e.name, e.desc);
        });
        message.channel.send(embed);
    },
    name: "хелп",
    desc: "Базовая справка",
    usage: "+хелп"
};