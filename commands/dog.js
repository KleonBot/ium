const Discord = require("discord.js");
const superAgent = require("superagent");
  
  
    module.exports = {
        name: 'dog',
        description: 'Shows a random image of a dog.',
        aliases: ['woof', 'puppy'],
        async execute(bot, message, args){

            let{body} = await superAgent
            .get(`https://random.dog/woof.json`);
        
            let dogEmbed = new Discord.RichEmbed()
            .setColor("#bd9a82")
            .setTitle("Dog :dog:")
            .setImage(body.url)
            .setFooter("Powered by random.dog");
        
            message.channel.send(dogEmbed);
        },
    };