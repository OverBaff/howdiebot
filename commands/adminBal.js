const getBalance = require("../util/getBalance.js");
const setBalance = require("../util/setBalance.js");
module.exports = {
	execute: async message => {
        const member = message.mentions.members.first();
        if(!member) return message.channel.send(":x: Укажите участника");
		const balance = getBalance(member.user.id);
        const amount = parseInt(message.content.split(" ")[1]);
        if(!amount) return message.channel.send(":x: Укажите сумму!");
        setBalance(member.user.id, balance + amount);
        message.channel.send(`:white_check_mark: На счет ${member} было добавлено ${amount} и теперь у него ${getBalance(member.user.id)}§`);
	},
	name: 'админБал',
};