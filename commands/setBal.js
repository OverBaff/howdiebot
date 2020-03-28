const Keyv = require("keyv");

module.exports = {
    execute: async message => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Нет прав!");
        let member = message.mentions.members.first();
        if(!member) return message.channel.send(":x: Упомяните участника!");
        let args = message.content.split(" ");
        if(!parseInt(args[2])) return message.channel.send(":x: Укажите число!");
        const db = new Keyv(process.env.MONEY_DB);
        db.set(member.user.id, parseInt(args[2])).then(() => {
            message.channel.send(":white_check_mark: Успех!");
        });
    },
    name: "сетБал",
    usage: "+сетБал <участник> <сумма>",
    desc: "Смена баланса",
    ignore: true
};