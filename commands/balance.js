const { MessageEmbed } = require('discord.js');
const getBalance = require("../util/getBalance.js");
module.exports = {
	execute: async message => {
		const member = message.mentions.members.first() || message.member;
		const balance = getBalance(member.user.id);

		const embed = new MessageEmbed()
			.setColor('#' + Math.random().toString(16).slice(2, 8))
			.setAuthor(`Баланс ${member.user.tag} : ${balance}`, member.user.avatarURL())
			.setTimestamp();

		message.channel.send(embed);
	},
	name: 'баланс',
};