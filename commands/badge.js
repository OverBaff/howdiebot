const Keyv = require("keyv");

module.exports = {
    execute: async message => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Нет прав!");
        const profilesDB = new Keyv(process.env.PROFILES_DB);
        const args = message.content.split(" ");
        const member = message.mentions.members.first();
        if(!member) return 
        const user = await profilesDB.get(member.user.id) || {};
        let badges = user.badges || [];
        if(!args[2]) return message.channel.send(":x: Укажите заслугу!");
        badges.push(args.slice(2).join(" "));
        user.badges = badges;
        profilesDB.set(member.user.id, user).then(() => {
            message.react("✅");
        });
    },
    name: "заслуга",
    ignore: true,
    desc: "Выдача заслуг участникам",
    usage: "+заслуга <участник> <за что>"
};