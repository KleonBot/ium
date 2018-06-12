
const Discord = require('discord.js');
const snekfetch = require('snekfetch');

module.exports = {
    name: 'magik',
    description: 'Displays an enlarged image of a user\'s avatar, with a direct link to it.',
    aliases: ['magic'],
    usage: '<user>',
    args: false,
    async execute (bot, message, args) {
        let msg = await message.channel.send(':loading: Generating avatar...');
        let mentionedUser = message.mentions.users.first() || message.author;
        let avatar = 'https://discord.services/api/magik?url=' + mentionedUser.displayAvatarURL;
        let avatarEmbed = new Discord.RichEmbed()
            .setImage(avatar)
            .setColor('RANDOM')
            .setTitle('Magik')
            .setDescription('[Magik Link](' + avatar + ')');

        message.channel.send(avatarEmbed);
        msg.delete();
    },
};