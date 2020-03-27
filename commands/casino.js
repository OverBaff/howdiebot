const Keyv = require('keyv');
const { MessageEmbed } = require('discord.js');
module.exports = {
	execute: async message => {
    const db = new Keyv(process.env.MONEY_DB);
 let balance = (await db.get(message.author.id)) || 0;
    let casino = () => {
        function set(text){
            return [number[0]+number[1]+number[2],text.symbol,number[6]+number[5]+number[4]];
        }
        let number = ["0⃣","1⃣","2⃣","3⃣","4⃣","5⃣","6⃣","7⃣","8⃣","9⃣"];
        let text = undefined;
        let variables = [{key: 0, symbol: "↖"},
            {key: 1.0, symbol: "⬆"},
            {key: 1.5, symbol: "↗"},
            {key: 0.5, symbol: "➡"},
            {key: 2.0, symbol: "↘"},
            {key: 0.4, symbol: "⬇"},
            {key: 0.7, symbol: "↙"},
            {key: 1.2, symbol: "⬅"}];
        let resultInt = [Math.floor(Math.random() * (variables).length + 0)];
        tempKey = variables[resultInt];
        text = set(tempKey);
        text[1] = number[7] + text[1] + number[3];
        return {text: text, key: tempKey.key};
    }
    let money = parseInt(message.content.split(' ').slice(1));
if(!money || money < 1){
    message.channel.send(`Вы не указали сумму!`);
    return;
}
if(balance < money) {
    message.channel.send('У вас недостаточно средств!');
    return;
}
let casinoResult = casino();
let mno = parseInt(money * casinoResult.key);
db.set(message.author.id, balance -= money);
message.channel.send(new MessageEmbed().setDescription(`Ставка: **${money}**\nМножитель/выигрыш : **${casinoResult.key}**/**${mno}**\n\n${(casinoResult.text).join("\n")}`));
db.set(message.author.id, parseInt(balance + mno) );
},
	name: 'ставка',
};