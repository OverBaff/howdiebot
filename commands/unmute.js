let fs = require("fs");
let durkaRole = "694132474736803920"; 
let client = require("../index.js");
const { MessageEmbed } = require('discord.js');
module.exports = {
    execute: async message => {
        let durkaList = JSON.parse(fs.readFileSync(`${process.cwd()}/mute.json`).toString());
        let keys = Object.keys(durkaList);
        const member = message.mentions.members.first();
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(':x: У вас нет прав!');
        if(!member) return message.channel.send(':x: Вы не указали участника!')
        if(member.roles.cache.get(durkaRole)){
        for(let i = 0; i < keys.length; i++){
            
                let channel = client.guilds.cache.find(g => g.id == durkaList[keys[i]].guild)
            let member1 = channel.members.cache.find(m => m.id == durkaList[keys[i]].member)
            if(member1 != member.id ) return message.channel.send(':x: Данный участник не находится в муте!')
            
            if(Date.now() <= keys[i]){
                
               let log = channel.channels.cache.find(l => l.id == '694254188229820506')
                let ch = channel.channels.cache.find(c => c.id == durkaList[keys[i]].channel)
                
                
                member1.roles.remove(durkaRole);
                for(let g = 0; g < durkaList[keys[i]].refund.length; g++){
                    member1.roles.add(durkaList[keys[i]].refund[g]);
                }
                let embed = new MessageEmbed()
                .setTitle(`Мут закончился у : ${member1.user.tag}`)
                .addField("Мут выдал:",`<@${durkaList[keys[i]].moder}>`,true)
                .addField("Причина мута:",durkaList[keys[i]].reason,true)
                .addField("Время мута:",durkaList[keys[i]].time,true)
                .setColor("#" + Math.random().toString(16).slice(2, 8))
                .setThumbnail('https://i.imgur.com/7bhawaJ.png')
                .setTimestamp();
            log.send(embed)
                delete durkaList[keys[i]];
                fs.writeFileSync(`${process.cwd()}/mute.json`, JSON.stringify(durkaList)); 
                 ch.send(`${member1} снова может писать.`);
                
            }
        }
    }else{
        message.channel.send(':x: Данный участник не находится в муте!')
    }
    
    },
	name: 'снятьМут',
	desc: 'Даёт право писать на сервере.',
	usage: '/снятьМут <участник>',
};