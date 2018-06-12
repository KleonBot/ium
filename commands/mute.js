const Discord = require("discord.js");
const errors = require("../utils/errors.js")
const ms = require("ms");

module.exports = {
    name: 'mute',
    description: 'Mutes the user that you mention from your server if you have permission to mute them.',
    usage: '<user>',
    args: true,
	async execute(bot, message, args){
    if(tomute.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "mute");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send("**User not found.** `ium mute <user>`");
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime){
      //message.channel.send("**Specify a time for the user to be muted.**");

      await(tomute.addRole(muterole.id));
      message.send.channel('<@${tomute.id}> has been muted.');
    }

    await(tomute.addRole(muterole.id));
    message.send.channel(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> has been unmuted!`);
    }, ms(mutetime));
	},
};