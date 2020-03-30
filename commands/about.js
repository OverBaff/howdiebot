const Keyv = require("keyv");

module.exports = {
    execute: async message => {
        const profilesDB = new Keyv(process.env.PROFILES_DB);
        const args = message.content.split(" ");
        if(!args[1]) return message.channel.send(":x: Укажите информацию!");
        const bio = args.slice(1).join(" ");
        const user = await profilesDB.get(message.author.id) || {};
        user.bio = bio;
        profilesDB.set(message.author.id, user).then(() => {
            message.react("✅");
        });
    },
    name: "осебе",
    desc: "Расскажите нам о себе, эта информация будет отображаться у вас в профиле",
    usage: "/осебе <текст>"
};