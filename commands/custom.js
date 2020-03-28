const Keyv = require("keyv");
const profilecmd = require("./profile.js");
const numComma = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
module.exports = {
    execute: async message => {
        const profilesDB = new Keyv(process.env.PROFILES_DB);
        const moneyDB = new Keyv(process.env.MONEY_DB);
        const args = message.content.split(" ");
        const user = await profilesDB.get(message.author.id) || {};
        if(!["полоска", "картинка", "шапка"].includes(args[1])) return message.channel.send(":x: Укажите одну из операций!(см. `+хелп`)");
        if(args[1] == "полоска") {
            // custom line logics
            const balance = await moneyDB.get(message.author.id) || 0;
            if(balance < 200) return message.channel.send(`:x: У вас недостаточно средств! Вам нужно еще ${200 - balance}§, чтобы купить этот апгрейд!`);
            if(!args[2]) return message.channel.send(`:x: Укажите цвет полоски(HEX)`);
            user.lineColor = args[2];
            moneyDB.set(message.author.id, balance - 200).then(() => {
                profilesDB.set(message.author.id, user).then(() => profilecmd.execute(message));
                message.channel.send("С вашего счета снято 200§");
            });
        }
        else if(args[1] == "шапка"){
            const balance = await moneyDB.get(message.author.id) || 0;
            if(balance < 500) return message.channel.send(`:x: У вас недостаточно средств! Вам нужно еще ${500 - balance}§, чтобы купить этот апгрейд!`);
            if(!args[2]) return message.channel.send(`:x: Укажите текст шапки(вы также можете прикрепить картинку)`);
            let image;
            if(!message.attachments || !message.attachments.first() || !message.attachments.first().width) image = null;
            else image = message.attachments.first().url;
            user.header = {
                text: args.slice(2).join(" "),
                image: image
            };
            moneyDB.set(message.author.id, balance - 500).then(() => {
                profilesDB.set(message.author.id, user).then(() => profilecmd.execute(message));
                message.channel.send("С вашего счета снято 500§");
            });
        }
        else if(args[1] == "картинка"){
            const balance = await moneyDB.get(message.author.id) || 0;
            if(balance < 1000) return message.channel.send(`:x: У вас недостаточно средств! Вам нужно еще ${1000 - balance}§, чтобы купить этот апгрейд!`);
            if(!message.attachments || !message.attachments.first() || !message.attachments.first().width) return message.channel.send(":x: Прикрепите изображение!");
            user.customImage = message.attachments.first().url;
            moneyDB.set(message.author.id, balance - 1000).then(() => {
                profilesDB.set(message.author.id, user).then(() => profilecmd.execute(message));
                message.channel.send("С вашего счета снято 1000§");
            });
        }
    },
    name: "кастом",
    desc: "Команда для кастомизации профиля",
    usage: "+кастом <полоска/картинка/шапка>"
};