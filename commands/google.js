module.exports = {
    execute: message => {
        const args = message.content.split(" ");
        let query = args.slice(2).join(" ");
        if(!message.mentions.members.first()) return message.channel.send(":x: Упомяните участника!");
        message.channel.send(`Так как ${message.mentions.members.first()} не умеет гуглить, то мы его научим! https://google.gik-team.com?q=${encodeURIComponent(query)}`);

    },
    name: "гугл",
    desc: "Научи человека гуглить!",
    usage: "+гугл <участник> <запрос>"
};