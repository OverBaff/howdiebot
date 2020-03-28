const Keyv = require("keyv");

module.exports = {
    execute: async message => {
        let users = ["427518363955363841","419524085736013834"];
        if(!users.includes(message.author.id)) return message.channel.send(":x: У вас недостаточно прав для использования этой команды!")
        const member = message.mentions.members.first() || message.member;
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