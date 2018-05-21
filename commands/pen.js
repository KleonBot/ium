/**const Discord = require("discord.js")
let playing = require("../data/playing.json")
let pens = "9";
exports.run = (bot, message, args) => {
  if(!playing[message.author.id]) {
    playing[message.author.id] = {
      playing: 'None'
    };
  }
  let user = message.author;
  let penGameEmbed = new Discord.RichEmbed()
  .setAuthor("Pen Game", "https://images.emojiterra.com/emojione/v2/512px/1f58a.png")
  .setColor("#77c9ff")
  .addField("How To Play", "In the game you and me start out with 9 pens 🖊, and we take turns taking pens. In every turn you can take 1 pen, 2 pens, or 3 pens. The goal of the game is to make is to make you oponent have one pen left. When your opponent has one pen left you win!")
  .addField("Commands", "`ium pen start` - Starts game\n`ium pen 1` - Takes one pen\n`ium pen 2` - Takes two pens\n`ium pen 3` - Takes three Pens\n`ium pen stop` - Stops the game");
   if(!args[0]) return message.channel.send(penGameEmbed);
   if(args[0] == "start"){
     if (playing[user].playing !== 'None') {
       return message.reply('**You cannot start a game, when you are already in one** You can stop the game by doing, `ium pen stop`');
     }

     if (playing[user].playing === 'None') {
       playing[user] = {
        playing: 'pen',
        pen: 9
      }
     let penCount = 0;
     let penShow = '🖊';
     while (playing[user].pens > penCount) {
       penShow = penShow + '🖊'
       penCount = penCount + 1
     }
     message.channel.send("**Game has started!** (Need help? Type: `ium pen`)")
     let penGameEmbed = new Discord.RichEmbed()
     .setColor("#77c9ff")
     .setDescription(`${penShow}`);
     return message.channel.send(penGameEmbed)
    }
  }
   if(args[0] == "stop" || args[0] == "end"){
     if (playing[user].playing === 'pen') {
       playing[user] = {
        playing: 'None'
     }
     let penGameEmbed = new Discord.RichEmbed()
     .setColor("#77c9ff")
     .setDescription(`Successfully stopped the game!`);
     return message.channel.send(penGameEmbed)
   }
   if(playing[user].playing !== 'pen' === "false"){
     if(args[0] == "1" || args[0] == "2" || args[0] == "3" || args[0] == "stop"){
       return message.channel.send("**You must be in a game to use these commands. Do `ium pen start` to start a game.** (Need help? Type: `ium pen`)");
     }
   }
  let penBot = Math.floor(Math.random() * 2) + 1;
  let botAvatar = bot.user.displayAvatarURL;
  if(playing[user].playing === "pen"){
    if(args[0] == "1"){
      playing[user].pens = playing[user].pens - 1
      let penCount = 0;
      let penShow = '🖊';
      while (playing[user].pens > penCount) {
        penShow = penShow + '🖊'
        penCount = penCount + 1
      }
      if (penShow === '🖊') {
  		    let penGameEmbed = new Discord.RichEmbed()
          .setThumbnail((target.displayAvatarURL))
          .setColor("#000000")
          .addField("Winner", message.author.username, true)
          .addField("Loser", "machine a.k.a ium", true)
          .addField("Summary", `Pens - ${penShow}`)
  		    message.channel.send(penGameEmbed)
          playing[message.author.id] = {
              playing: 'None'
  		           };
  		  return;
  	  }
      playing[user].pens = playing[user].pens - penBot;
      let penCountBot = 0;
      let penShowBot = '🖊';
      while (playing[user].pens > penCountBot) {
        penShowBot = penShowBot + '🖊'
        penCountBot = penCountBot + 1
      }
      if (penShowBot === '🖊') {
  		    let penGameEmbed = new Discord.RichEmbed()
          .setThumbnail((target.displayAvatarURL))
          .setColor("#000000")
          .addField("Winner", "machine a.k.a ium", true)
          .addField("Loser", message.author.username, true)
          .addField("Summary", `Pens - ${penShow} - A machine beat you...`)
  		    message.channel.send(penGameEmbed)
          playing[message.author.id] = {
              playing: 'None'
  		           };
  		  return;
  	  }
      let penGameEmbed = new Discord.RichEmbed()
      .setColor("#77c9ff")
      .addField("You Played", `${penShow}`)
      .addField("I Played", `${penShowBot}`)
      .setFooter(`Pens - ${playing[user].pens}`, user.displayAvatarURL)
      .setTimestamp();
      message.channel.send(penGameEmbed)
    }
    if(args[0] == "2"){
      playing[user].pens = playing[user].pens - 2
      let penCount = 0;
      let penShow = '🖊';
      while (playing[user].pens > penCount) {
        penShow = penShow + '🖊'
        penCount = penCount + 1
      }
      if (penShow === '🖊') {
  		    let penGameEmbed = new Discord.RichEmbed()
          .setThumbnail((target.displayAvatarURL))
          .setColor("#000000")
          .addField("Winner", message.author.username, true)
          .addField("Loser", "machine a.k.a ium", true)
          .addField("Summary", `Pens - ${penShow}`)
  		    message.channel.send(penGameEmbed)
          playing[message.author.id] = {
              playing: 'None'
  		           };
  		  return;
  	  }
      playing[MAID].pens = playing[user].pens - penBot;
      let penCountBot = 0;
      let penShowBot = '🖊';
      while (playing[user].pens > penCountBot) {
        penShowBot = penShowBot + '🖊'
        penCountBot = penCountBot + 1
      }
      if (penShowBot === '🖊') {
  		    let penGameEmbed = new Discord.RichEmbed()
          .setThumbnail((target.displayAvatarURL))
          .setColor("#000000")
          .addField("Winner", "machine a.k.a ium", true)
          .addField("Loser", message.author.username, true)
          .addField("Summary", `Pens - ${penShow} - A machine beat you...`)
  		    message.channel.send(penGameEmbed)
          playing[message.author.id] = {
              playing: 'None'
  		           };
  		  return;
  	  }
      let penGameEmbed = new Discord.RichEmbed()
      .setColor("#77c9ff")
      .addField("You Played", `${penShow}`)
      .addField("I Played", `${penShowBot}`)
      .setFooter(`Pens - ${playing[user].pens}`, user.displayAvatarURL)
      .setTimestamp();
      message.channel.send(penGameEmbed)
    }
    if(args[0] == "3") {
      playing[user].pens = playing[user].pens - 3
      let penCount = 0;
      let penShow = '🖊';
      while (playing[user].pens > penCount) {
        penShow = penShow + '🖊'
        penCount = penCount + 1
      }
      if (penShow === '🖊') {
  		    let penGameEmbed = new Discord.RichEmbed()
          .setThumbnail((target.displayAvatarURL))
          .setColor("#000000")
          .addField("Winner", message.author.username, true)
          .addField("Loser", "machine a.k.a ium", true)
          .addField("Summary", `Pens - ${penShow}`)
  		    message.channel.send(penGameEmbed)
          playing[message.author.id] = {
            playing: 'None'
  		           };
  		  return;
  	  }
      playing[user].pens = playing[user].pens - penBot;
      let penCountBot = 0;
      let penShowBot = '🖊';
      while (playing[user].pens > penCountBot) {
        penShowBot = penShowBot + '🖊'
        penCountBot = penCountBot + 1
      }
      if (penShowBot === '🖊') {
  		    let penGameEmbed = new Discord.RichEmbed()
          .setThumbnail((target.displayAvatarURL))
          .setColor("#000000")
          .addField("Winner", "machine a.k.a ium", true)
          .addField("Loser", message.author.username, true)
          .addField("Summary", `Pens - ${penShow} - A machine beat you...`)
  		    message.channel.send(penGameEmbed)
          playing[message.author.id] = {
              playing: 'None'
  		           };
  		  return;
  	  }
      let penGameEmbed = new Discord.RichEmbed()
      .setColor("#77c9ff")
      .addField("You Played", `${penShow}`)
      .addField("I Played", `${penShowBot}`)
      .setFooter(`Pens - ${playing[user].pens}`, user.displayAvatarURL)
      .setTimestamp();
      message.channel.send(penGameEmbed)
    }
    if(parseInt(args[0]) !== "1" || parseInt(args[0]) !== "2" || parseInt(args[0]) !== "3") return message.channel.send("**You may only take 1, 2, or 3 pens at once!** (Need help? Type: `ium pen`)");
  }
}
/*
*/

const Discord = require("discord.js")
let game = require("../playing.json")

module.exports.run = (bot, message, args) => {

	if(!game[message.author.id]) {
		game[message.author.id] = {
			game: 'None'
		};
	}
	
	let MAID = message.author.id;

    let penGameEmbed = new Discord.RichEmbed()
    .setTitle("Paper Clip Game")
    .setColor("#77c9ff")
    .addField("How To Play:", "In the game you and me start out with 9 paper clips, and we take turns taking clips. In every turn you can take one, two, or three clips. The goal of the game is to make is to make your opponent have one clip left. When your opponent has one clip left you win!")
    .addField("Commands:", "**clip start** - Starts the game.\n**clip 1** - Takes one clip.\n**clip 2** - Takes two clips.\n**clip 3** - Takes three clips.\n**clip end** - Stops the game");
    if(!args[0]) return  message.channel.send(penGameEmbed)

   if(args[0] == "start"){
	    if (game[MAID].game !== 'None') {
		   return message.reply(`you cant start a game because you are already playing ${game[MAID].game}.`)
		}
		if (game[MAID].game === 'None') {
	        game[MAID] = {
				game: 'Clip Game',
				clips: 9
			}
			let penCount = 0;
			let penShow = '📎';
			while (game[MAID].clips > penCount) {
				penShow = penShow + '📎'
				penCount = penCount + 1
			}
			message.channel.send("**Game has started!** (Need help? Type: prefix then `clip`)")
			let penGameEmbed = new Discord.RichEmbed()
			.setColor("#77c9ff")
			.setDescription(`${penShow}`);
			return message.channel.send(penGameEmbed)
		}
   }

   if(game[MAID].game !== 'Clip Game'){
     if(args[0] == "1" || args[0] == "2" || args[0] == "3" || args[0] == "stop"){
       return message.channel.send("**You must be in a game to use these commands. Do prefix then `clip start` to start a game.** (Need help? Type: prefix then `clip`)");
     }
   }


  if(game[MAID].game === 'Clip Game'){

    if(args[0] == "1"){
      game[MAID].clips = game[MAID].clips - 1
      let penCount = 0;
      let penShow = '📎';
      while (game[MAID].clips > penCount) {
        penShow = penShow + '📎'
        penCount = penCount + 1
      }
	  if (penShow === '📎') {
		let penGameEmbed = new Discord.RichEmbed()
        .setColor("#2ecc71")
        .setDescription(`**__👑 YOU HAVE WON 👑__**\n\n**Clips:**\n${penShow}`);
		message.channel.send(penGameEmbed)
		game[message.author.id] = {
			game: 'None'
		};
		return;
	  }
	  let botChoice = Math.floor(Math.random() * 2) + 1;
	  game[MAID].clips = game[MAID].clips - botChoice
	  let penCountB = 0;
      let penShowB = '📎';
      while (game[MAID].clips > penCountB) {
        penShowB = penShowB + '📎'
        penCountB = penCountB + 1
      }
	  if (penShowB === '📎') {
		let penGameEmbed = new Discord.RichEmbed()
        .setColor("#2ecc71")
        .setDescription(`**__👑 I HAVE WON 👑__**\n\n**Clips:**\n${penShowB}`);
		message.channel.send(penGameEmbed)
		game[message.author.id] = {
			game: 'None'
		};
		return;
	  }
      let penGameEmbed = new Discord.RichEmbed()
      .setColor("#77c9ff")
      .setDescription(`**__${message.author.username}'s Turn:__**\nYou took away ${args[0]} clips.\n${penShow}\n\n**__My Turn__**\nI took away ${botChoice} clips.\n${penShowB}`);
      return message.channel.send(penGameEmbed)
    }
    if(args[0] == "2"){
      game[MAID].clips = game[MAID].clips - 2
      let penCount = 0;
      let penShow = '📎';
      while (game[MAID].clips > penCount) {
        penShow = penShow + '📎'
        penCount = penCount + 1
      }
	  if (penShow === '📎') {
		let penGameEmbed = new Discord.RichEmbed()
        .setColor("#2ecc71")
        .setDescription(`**__👑 YOU HAVE WON 👑__**\n\n**Clips:**\n${penShow}`);
		message.channel.send(penGameEmbed)
		game[message.author.id] = {
			game: 'None'
		};
		return;
	  }
	  let botChoice = Math.floor(Math.random() * 2) + 1;
	  game[MAID].clips = game[MAID].clips - botChoice
	  let penCountB = 0;
      let penShowB = '📎';
      while (game[MAID].clips > penCountB) {
        penShowB = penShowB + '📎'
        penCountB = penCountB + 1
      }
	  if (penShowB === '📎') {
		let penGameEmbed = new Discord.RichEmbed()
        .setColor("#2ecc71")
        .setDescription(`**__👑 I HAVE WON 👑__**\n\n**Clips:**\n${penShowB}`);
		message.channel.send(penGameEmbed)
		game[message.author.id] = {
			game: 'None'
		};
		return;
	  }
      let penGameEmbed = new Discord.RichEmbed()
      .setColor("#77c9ff")
      .setDescription(`**__${message.author.username}'s Turn:__**\nYou took away ${args[0]} clips.\n${penShow}\n\n**__My Turn__**\nI took away ${botChoice} clips.\n${penShowB}`);
      return message.channel.send(penGameEmbed)
    }
    if(args[0] == "3") {
      game[MAID].clips = game[MAID].clips - 3
      let penCount = 0;
      let penShow = '📎';
      while (game[MAID].clips > penCount) {
        penShow = penShow + '📎'
        penCount = penCount + 1
      }
	  if (penShow === '📎') {
		let penGameEmbed = new Discord.RichEmbed()
        .setColor("#2ecc71")
        .setDescription(`**__👑 YOU HAVE WON 👑__**\n\n**Clips:**\n${penShow}`);
		message.channel.send(penGameEmbed)
		game[message.author.id] = {
			game: 'None'
		};
		return;
	  }
	  let botChoice = Math.floor(Math.random() * 2) + 1;
	  game[MAID].clips = game[MAID].clips - botChoice
	  let penCountB = 0;
      let penShowB = '📎';
      while (game[MAID].clips > penCountB) {
        penShowB = penShowB + '📎'
        penCountB = penCountB + 1
      }
	  if (penShowB === '📎') {
		let penGameEmbed = new Discord.RichEmbed()
        .setColor("#2ecc71")
        .setDescription(`**__👑 I HAVE WON 👑__**\n\n**Clips:**\n${penShowB}`);
		message.channel.send(penGameEmbed)
		game[message.author.id] = {
			game: 'None'
		};
		return;
	  }
      let penGameEmbed = new Discord.RichEmbed()
      .setColor("#77c9ff")
      .setDescription(`**__${message.author.username}'s Turn:__**\nYou took away ${args[0]} clips.\n${penShow}\n\n**__My Turn__**\nI took away ${botChoice} clips.\n${penShowB}`);
      return message.channel.send(penGameEmbed)
    }
    if(parseInt(args[0]) !== "1" || parseInt(args[0]) !== "2" || parseInt(args[0]) !== "3")
      return message.channel.send("**You may only take 1, 2, or 3 pens at once!** (Need help? Type: prefix then `clip`)");
  }
}
