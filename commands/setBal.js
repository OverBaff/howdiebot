const Keyv = require("keyv");

module.exports = {
    execute: async message => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: У вас недостаточно прав для использования этой команды!");
       //если будут использовать не по назначению , то заберем
        //let users = ["427518363955363841","419524085736013834"];
        //if(!users.includes(message.author.id)) return message.channel.send(":x: У вас недостаточно прав для использования этой команды!")
        let member = message.mentions.members.first();
        if(!member) return message.channel.send(":x: Упомяните участника!");
        let args = message.content.split(" ").slice(2);
        if(!parseInt(args)) return message.channel.send(":x: Укажите число!");
        const db = new Keyv(process.env.MONEY_DB);
        db.set(member.user.id, parseInt(args)).then(() => {
            message.channel.send(":white_check_mark: Успех!");
        });
    },
    name: "сетБал",
    usage: "+сетБал <участник> <сумма>",
    desc: "Смена баланса",
    ignore: true
};