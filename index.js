require('dotenv').config();
const fs = require('fs');
const { Client, Collection } = require('discord.js');
const path = require('path');

let oldLog = console.log;
console.log = msg => oldLog(`[HowdieBot] ${msg}`);

const client = new Client();
client.commands = new Collection();

const dir = fs.readdirSync(path.join(process.cwd(), 'commands'));
for(let i = 0; i < dir.length; i++) {
	if(dir[i].endsWith('.js')) {
		const module = require(path.join(process.cwd(), 'commands', dir[i]));
		if(!dir[i].startsWith('i_')) {
			if(!module.name) throw new Error(`no 'name' field for ${dir[i]} file`);
			if(!module.execute) throw new Error(`no 'execute' method for ${dir[i]} file`);
			client.commands.set(module.name, module);
			console.log(`Зарегистрирована команда ${dir[i]}`);
		}
		else{
			console.log(`Подключен стат. файл ${dir[i]}`);
		}
	}
}

client.on('message', msg => {
	const args = msg.content.split(' ');
	const command = args[0].slice(process.env.PREFIX.length);
	const toExec = client.commands.get(command);
	if(!toExec) return;
	toExec.execute(msg);
});

client.login(process.env.TOKEN);

module.exports = client;