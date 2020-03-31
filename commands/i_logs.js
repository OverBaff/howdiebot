const client = require('../index.js');
let { MessageEmbed } = require("discord.js");
           
client.on("channelCreate", function(channel){
    let log = channel.guild.channels.cache.find(l => l.id == '694254188229820506')
    let create = new MessageEmbed()
    .setTitle('Канал создан')
    .addField(`Название канала:`,channel.name,true)
    .addField(`Канал:`,channel,true)
    .setThumbnail('https://i.imgur.com/12K4Y0U.png')
    .setColor("#" + Math.random().toString(16).slice(2, 8))
    .setTimestamp();
    log.send(create)
});
client.on('messageUpdate', async (oldmsg, newmsg) => {
    let log = oldmsg.guild.channels.cache.find(l => l.id == '694254188229820506')
    let embed = new MessageEmbed()
    .setTitle('Сообщение изменино')
    .addField('Отправитель', oldmsg.member, true)
    .addField('Канал', oldmsg.channel, true)
    .addField('Раньше', oldmsg.content)
    .addField('Сейчас', newmsg.content)
    .setColor("#" + Math.random().toString(16).slice(2, 8))
    .setThumbnail('https://i.imgur.com/bqxFpLy.png')
    .setTimestamp()
    log.send(embed)
    //await oldmsg.channel.get(`622320982895493120`).send(embed)
});
client.on('messageDelete', message =>{
    let log = message.guild.channels.cache.find(l => l.id == '694254188229820506')
    let embed = new MessageEmbed()
    .setAuthor('Сообщение удалено', message.guild.iconURL)
    .addField('Отправитель', message.member, true)
    .addField('Канал', message.channel, true)
    .addField('Содержание', message.content)
    .setColor("#" + Math.random().toString(16).slice(2, 8))
    .setThumbnail('https://i.imgur.com/gHqOmOm.png')
    .setTimestamp()
    log.send(embed)
});
client.on("channelDelete", function(channel){
    let log = channel.guild.channels.cache.find(l => l.id == '694254188229820506')
    let create = new MessageEmbed()
    .setTitle('Канал создан')
    .addField(`Название канала:`,channel.name,true)
    .addField('Канал', channel, true)
    .setThumbnail('https://i.imgur.com/gHqOmOm.png')
    .setColor("#" + Math.random().toString(16).slice(2, 8))
    .setTimestamp();
    log.send(create)
});
client.on ("roleCreate", function (role) {
    let embed = new MessageEmbed()
    let log = role.guild.channels.cache.find(l => l.id == '694254188229820506')
    .setAuthor('Роль создана', channel.guild.iconURL)
    .addField('Название роли', role.name)
    .addField('Роль', role, true)
    .setThumbnail('https://i.imgur.com/12K4Y0U.png')
    .setTimestamp();
    log.send(embed)
})
client.on ("roleDelete", function (role) {
    let embed = new MessageEmbed()
    let log = role.guild.channels.cache.find(l => l.id == '694254188229820506')
    .setAuthor('Роль удалена')
    .addField('Название роли', role.name)
    .addField('Роль', role, true)
    .setThumbnail('https://i.imgur.com/gHqOmOm.png')
    .setTimestamp();
    log.send(embed)
})
client.on("channelUpdate", function(oldChannel, newChannel){
    let log = oldChannel.guild.channels.cache.find(l => l.id == '694254188229820506')
    let create = new MessageEmbed()
    .setAuthor('Канал обновлен')
    .addField('Старое название', oldChannel.name)
    .addField('Новое название название', newChannel.name)
    .setThumbnail('https://i.imgur.com/bqxFpLy.png')
    .setTimestamp()
    log.send(create)
})
client.on("emojiCreate", function(emoji){
    let log = emoji.guild.channels.cache.find(l => l.id == '694254188229820506')
    let create = new MessageEmbed()
    .setAuthor('Эмоджи создано')
    .addField('Название', emoji.name)
    .addField('Эмоджи', emoji)
    .setThumbnail('https://i.imgur.com/12K4Y0U.png')
    .setTimestamp()
    log.send(create)
});
client.on("emojiDelete", function(emoji){
    let log = emoji.guild.channels.cache.find(l => l.id == '694254188229820506')
    let create = new MessageEmbed()
    .setAuthor('Эмоджи создано')
    .addField('Название', emoji.name)
    .addField('Эмоджи', emoji)
    .setThumbnail('https://i.imgur.com/gHqOmOm.png')
    .setTimestamp()
    log.send(create)
});