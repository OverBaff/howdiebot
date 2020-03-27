const Keyv = require('keyv');
const client = require('../index.js');

client.on("message", async message => {
    const db = new Keyv(process.env.REPUTATION_DB);
    if(message.content.startsWith(`+rep`)){
        if(recent.includes(message.author.id)) return message.channel.send(":x: Вы уже изменяли репутацию! Подождите 10 минут после последнего использования.");
        const member = message.mentions.members.first();
        if(!member) return message.channel.send(":x: Укажите участника!");
        if(member.user.id == message.author.id) return message.channel.send(":x: Вы не можете изменять свою репутацию");
        const oldBal = (await db.get(member.user.id)) || 0;
        db.set(member.user.id, oldBal + 1).then(() => {
            message.channel.send(`:white_check_mark: Репутация пользователя ${member} повышена на 1, теперь у него **${oldBal + 1}** репутации!`);
        });
    }

    if(message.content.startsWith(`-rep`)){
        const member = message.mentions.members.first();
        if(!member) return message.channel.send(":x: Укажите участника!");
        if(member.user.id == message.author.id) return message.channel.send(":x: Вы не можете изменять свою репутацию");
        const oldBal = (await db.get(member.user.id)) || 0;
        db.set(member.user.id, oldBal - 1).then(() => {
            message.channel.send(`:white_check_mark: Репутация пользователя ${member} уменьшена на 1, теперь у него **${oldBal - 1}** репутации!`);
        });
    }
});