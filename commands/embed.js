const { MessageEmbed } = require('discord.js');
module.exports = {
	execute: message => {
        const args = message.content.split(' ');
        function embed(ar,color,image){
            let result = new MessageEmbed().setDescription(ar).setColor(color ? color : "#" + Math.random().toString(16).slice(2, 8));
            if(image)
                result.setImage(image);
            return result;
        }
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас недостаточно прав!");
    let botmessage = args.slice(1).join(" ");
    if(!botmessage) return message.channel.send("Вы не напечатали текст сообщения.")
    message.delete();
    message.channel.send(embed(botmessage));
	},
    name: 'рамка',
    desc: 'Отправка сообщений от имени бота в рамке.',
    usage: '+рамка',
    ignore: true,
};
