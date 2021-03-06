const Discord = require("discord.js")

module.exports = {
	  name: 'quote',
    description: 'ium will quote a message.',
    aliases: ['quo', 'reference'],
    usage: '<message ID>',
    args: true,
    async execute(bot, message, args) {
      try {
        let msg = message.channel.messages.get(args[0]);
        let author = msg.author
	var embeds = msg.embeds[0]
	if (embeds) var hasEmbed = "[This message contains an embed. Look below for its contents.]";
      	else hasEmbed = "";
        var quote = new Discord.RichEmbed()
        .setAuthor(`${author.tag} said:`, author.avatarURL)
        .setDescription(`${msg.content}`)
        .setFooter(`Quoted by ${message.author.tag}${hasEmbed}`)
        .setColor(0x36393e);
	 if (embeds) {
                let messageEmbed = new Discord.RichEmbed()
                if (embeds.title) messageEmbed = messageEmbed.setTitle(embeds.title);
                if (embeds.description) messageEmbed = messageEmbed.setDescription(embeds.description);
                if (embeds.thumbnail) messageEmbed = messageEmbed.setThumbnail(embeds.description);
                if (embeds.footer) messageEmbed = messageEmbed.setFooter(embeds.footer.text, embeds.footer.iconURL);
                if (embeds.image) messageEmbed = messageEmbed.setImage(embeds.image.url);
                if (embeds.hexColor) messageEmbed = messageEmbed.setColor(embeds.hexColor);
                if (embeds.timestamp) messageEmbed = messageEmbed.setTimestamp();
                if (embeds.url) messageEmbed = messageEmbed.setURL(embeds.url);
                if (embeds.fields) {
                  for (let i = 0; i < embeds.fields.length; i++) {
                    messageEmbed = messageEmbed.addField(embeds.fields[i].name, embeds.fields[i].value, embeds.fields[i].inline);                    
                  }
                }
                message.channel.send({embed: messageEmbed})
       }
      } catch(e) {
        var quote = new Discord.RichEmbed()
        .setTitle(":x: Error")
        .setDescription("Could not retrieve message! Maybe the bot was offline?")
        .setTimestamp()
        .setColor(0x36393e);
      } finally {
         message.channel.send({embed: quote});
      }
    },
};
    
