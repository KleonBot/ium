const Discord = require("discord.js");
let inline = true

module.exports = {
    name: 'patreon',
    description: 'Provides a link to ium\'s patreon.',
    aliases: ['donate'],
	async execute(bot, message, args){
        let botEmbed = new Discord.RichEmbed()
        .setColor('#000000')
        .setDescription("Donate: https://ium-bot.github.io/donate \nDonators: Cubic")
    
        message.channel.send(botEmbed);
	},
};