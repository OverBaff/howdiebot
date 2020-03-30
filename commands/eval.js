const { inspect } = require("util")
const client = require('../index.js');
module.exports = {
	execute: message => {
        let users = ["427518363955363841","419524085736013834"];
        if(!users.includes(message.author.id)) return message.channel.send(":x: У вас недостаточно прав для использования этой команды!")
        const args = message.content.split(' ');
        let toEval = args.slice(1).join(" ");
        let evaluated = inspect(eval(toEval , { depth : 0 } ))
        try{
            if(toEval){
let start = process.hrtime();
let diff;
diff = process.hrtime(start)
return message.channel.send(`*Выполненно ${diff[0] > 0 ? `${diff[0]}s` : ''}${diff[1] / 1000000}ms.*\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
            } else{
                return message.channel.send(":x: Вы не ввели исполняемый код.")
            }   
        } catch(e) {
message.channel.send(`:x: Возникла ошибка при исполнении : \`${e.message}\``)
        }
	},
    name: 'выполнить',
    desc: 'Выполнение кода указанного в аргументах.',
    usage: '/выполнить',
    ignore: true,
};