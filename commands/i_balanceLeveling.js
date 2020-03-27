const Keyv = require('keyv');
const client = require('../index.js');

client.on('message', async msg => {
	if(msg.channel == '671255366180405258') return;
	if(msg.channel == '669722735357722624') return;
	if(msg.content.startsWith(process.env.PREFIX)) return;
	const db = new Keyv(process.env.MONEY_DB);
	const balance = (await db.get(msg.author.id) || 0);
	db.set(msg.author.id, balance + 1);
});