const Keyv = require('keyv');
const { MessageEmbed } = require('discord.js');
module.exports = {
	execute: async message => {
		const db = new Keyv(process.env.MONEY_DB);
		const member = message.mentions.members.first() || message.member;
		const balance = (await db.get(member.user.id)) || 0;
		const profilesDB = new Keyv(process.env.PROFILES_DB);
		let userFromDB = await profilesDB.get(member.user.id) || "RANDOM";
		const embed = new MessageEmbed()
			//.setColor(await profilesDB.get(message.author.id).lineColor || "RANDOM")
			.setColor(userFromDB.lineColor)
			.setAuthor(`Баланс ${member.user.tag} : ${balance}§`, member.user.avatarURL())
			.setTimestamp();

		message.channel.send(embed);
	},
	name: 'баланс',
	desc: 'Узнай своё состояние!',
	usage: '/баланс',
};