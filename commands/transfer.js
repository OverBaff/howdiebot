const Keyv = require('keyv');
module.exports = {
	execute: async message => {
		const db = new Keyv(process.env.MONEY_DB);
		db.set("427518363955363841", 100);
		const member = message.mentions.members.first();
		if(!member) {
			message.channel.send('Вы не указали пользователя!');
			return;
		}
		if(member == message.author) {
			message.channel.send('Нельзя перевести валюту самому себе!');
			return;
		}
		const balanceAuthor = (await db.get(message.author.id)) || 0;
		const balanceMember = (await db.get(member.user.id)) || 0;
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
			message.channel.send('У вас недостаточно средств!');
			return;
		}
		db.set(message.author.id, balanceAuthor - money);
		db.set(member.id, balanceMember + money);
		message.channel.send(`${message.author} Перевёл на баланс ${member} : ${money}`);
	},
	name: 'перевести',
};