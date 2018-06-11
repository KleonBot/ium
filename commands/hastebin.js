const Discord = require("discord.js");
const request = require("request");

module.exports = {
    name: 'hastebin',
    description: 'Pastes code that you provide in hastebin, and sends you the link to it.',
    usage: '<code>',
    aliases: ['hb'],
    args: true,
	execute(bot, message, args){
        const snekfetch = require('snekfetch');
        if (!args.slice(0)
            .join(' ')) return message.channel.send('Please, provide the text! Usage: hastebin <text>')
            .then(msg => msg.delete({
                timeout: 10000
            }));
        snekfetch.post('https://hastebin.com/documents')
            .send(args.slice(0)
                .join(' '))
            .then(body => {
                message.channel.send('Posted text to Hastebin\nURL: https://hastebin.com/' + body.body.key);
            });
	},
};