const getBalance = require("../util/getBalance.js");
const setBalance = require("../util/setBalance.js");
module.exports = {
	execute: async message => {
		const member = message.mentions.members.first();
		if(!member) {
			message.channel.send('Вы не указали пользователя!');
			return;
		}
		if(member == message.author) {
			message.channel.send('Нельзя перевести валюту самому себе!');
			return;
		}
		const balanceAuthor = getBalance(message.author.id);
		const balanceMember = getBalance(member.user.id);
		const money = parseInt(message.content.split(' ').slice(1));
		if(!money) {
			message.channel.send('Вы не указали сумму!');
			return;
		}
		if(money < 0) {
			message.channel.send('Нельзя переводить отрицательные числа!');
			return;
		}

		if(balanceAuthor < money) {
			message.channel.send('У вас не достаточно средств!');
			return;
		}
		setBalance(message.author.id, balanceAuthor - money);
		setBalance(member.id, balanceMember + money);
		message.channel.send(`${message.author} Перевёл на баланс ${member} : ${money}`);
	},
	name: 'перевести',
};