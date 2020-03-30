const Keyv = require("keyv");
const { MessageEmbed } = require('discord.js');
module.exports = {
    execute: async message => {
        //let python = await message.guild.roles;
 // python = python.find(r => r.name == 'Python ✔️')
        const member = message.mentions.members.first() || message.member;
        const profilesDB = new Keyv(process.env.PROFILES_DB);
		let userFromDB = await profilesDB.get(member.user.id) || "RANDOM";
        const embed = new MessageEmbed()
        .setColor(userFromDB.lineColor)
        .setTitle(`Достижения участника: ${member.user.tag}`)
        .setTimestamp()
        if(member.roles.cache.get('693878907278983218')){
            embed.addField(`✅ : Любитель подушить питона.`, `Получить подтвёрждённую роль по Python`)
        }else{
            embed.addField(`:x: : Любитель подушить питона.`, `Получить подтвёрждённую роль по Python`)
        }
        if(member.roles.cache.get('693792896775618570')){
            embed.addField(`✅ : Поцеловать жабу.`, `Получить подтвёрждённую роль по Java`)
        }else{
            embed.addField(`:x: : Поцеловать жабу.`, `Получить подтвёрждённую роль по Java`)
        }
        if(member.roles.cache.get('693792892497428540')){
            embed.addField(`✅ : Художник от слова "худо".`, `Получить подтвёрждённую роль по веб дизайну`)
        }else{
            embed.addField(`:x: : Художник от слова "худо".`, `Получить подтвёрждённую роль по веб дизайну`)
        }
        if(member.roles.cache.get('693886036828487750')){
            embed.addField(`✅ : Браузерная жаба.`, `Получить подтвёрждённую роль по JavaScript`)
        }else{
            embed.addField(`:x: : Браузерная жаба.`, `Получить подтвёрждённую роль по JavaScript`)
        }
        if(member.roles.cache.get('693885456492003368')){
            embed.addField(`✅ : Ах, а вы, я смотрю, любитель пострелять себе в ногу?`, `Получить подтвёрждённую роль по C++`)
        }else{
            embed.addField(`:x: : Ах, а вы я смотрю, любитель пострелять себе в ногу?`, `Получить подтвёрждённую роль по C++`)
        }
        if(member.roles.cache.get('693887572790738994')){
            embed.addField(`✅ : Любитель попыхтеть.`, `Получить подтвёрждённую роль по РНР`)
        }else{
            embed.addField(`:x: : Любитель попыхтеть.`, `Получить подтвёрждённую роль по РНР`)
        }
        if(member.roles.cache.get('693889366552215735')){
            embed.addField(`✅ : Юный конструктор.`, `Получить подтвёрждённую роль по 3D`)
        }else{
            embed.addField(`:x: : Юный конструктор.`, `Получить подтвёрждённую роль по 3D`)
        }
        if(member.roles.cache.get('693890451018874911')){
            embed.addField(`✅ : Профессиональный разметчик.`, `Получить подтвёрждённую роль по Frontend`)
        }else{
            embed.addField(`:x: : Профессиональный разметчик.`, `Получить подтвёрждённую роль по Frontend`)
        }
        if(member.roles.cache.get('693907588659675188')){
            embed.addField(`✅ : Попасть за решётку.`, `Получить подтвёрждённую роль по С#`)
        }else{
            embed.addField(`:x: : Попасть за решётку.`, `Получить подтвёрждённую роль С#`)
        }
        if(member.roles.cache.get('693910032710107186')){
            embed.addField(`✅ : Пробежать марафон.`, `Получить подтвёрждённую роль по Go`)
        }else{
            embed.addField(`:x: : Пробежать марафон.`, `Получить подтвёрждённую роль Go`)
        }
message.channel.send(embed)
},
name: "достижения",
desc: "Информация о полученных и предстоящих получить достижениях.",
usage: "/достижения "
};