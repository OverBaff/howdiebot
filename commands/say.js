module.exports = {
	execute: message => {
        const args = message.content.split(' ');
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас недостаточно прав!");
    let botmessage = args.slice(1).join(" ");
    if(!botmessage) return message.channel.send("Вы не напечатали текст сообщения.")
    message.delete();
    message.channel.send(botmessage);
	},
    name: 'отправить',
    desc: 'Отправка сообщений от имени бота.',
    usage: '+отправить',
    ignore: true,
};
