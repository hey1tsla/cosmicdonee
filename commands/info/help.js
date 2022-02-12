const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

      module.exports = {
       name: "help",
       aliases: ["h"],
       description: "Help Command!",
        usage: "Help | <Command Name>",
      run: async(client, message, args) => {
    
     message.delete();
    
        let embed = new MessageEmbed()
           .setColor('#0099ff')
           .setImage("https://c.tenor.com/C8Yr_YcPOn8AAAAC/discord-banner-discord-profile.gif")
           .setThumbnail ('https://st2.depositphotos.com/1035837/8479/i/600/depositphotos_84798240-stock-photo-galaxy-stars-abstract-space-background.jpg')
           .setTitle(`${client.user.username} Commands!`)
          .setDescription(`$ __***Fun***__

   ** Avatar,Coinflip,Howgay,Meme,Rate,Dicksize,Ascii,Choose,Hack,Randomnumber**

   $***__Moderation__***
  **Clear, Mute, Unmute, Tempmute, Kick, Ban, Unban, Tempban, Warn, Warnings, ResetWarns

  $**__Information__***
  Help, Covid, Weather, Userinfo, Serverinfo, Ping , MORE SOON 
 

 `)
 
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();
    
    
    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};


