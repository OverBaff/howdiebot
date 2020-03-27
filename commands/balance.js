const Keyv = require('keyv');
const { MessageEmbed } = require('discord.js');
module.exports = {
	execute: async message => {
		const db = new Keyv(process.env.MONEY_DB);
		const member = message.mentions.members.first() || message.member;
		const balance = (await db.get(member.user.id)) || 0;

		const embed = new MessageEmbed()
			.setColor([255, 0, 0])
			.setAuthor(`Баланс ${member.user.tag} - ${balance}§`, member.user.avatarURL())
			.setTimestamp();

		await message.channel.send(embed);
	},
	name: 'баланс',
};