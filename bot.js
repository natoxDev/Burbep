const Discord = require('discord.js'); 
var bot = new Discord.Client();
var prefix = "+";
var token = "";

bot.on("ready", function() {
bot.user.setActivity(`+help | {bot.guilds.size}`)
console.log(`Le bot a démarré.`); 
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "say") {
var say = args.join(' ')
message.delete()
const embed = new Discord.RichEmbed()
.setAuthor(`${message.author.username} a dit:`)
.setDescription(say)
message.channel.send(embed)
}

if(command === "help") {
var ip_embed = new Discord.RichEmbed()
.setColor ('RANDOM')
.setTitle('Commandes')
.addField ('+help', "Affiche l'aide")
.addField ('+kick', "Expulser un membre")
.addField ('+pdp', "Affiche la photo de profil d'un utilisateur mentionné")
.addField ('+mpdp', 'Affiche ta photo de profil')
.addField('+say', "Répète ce que l'utilisateur dit")
.setThumbnail(bot.user.avatarURL)
message.channel.send(ip_embed);
}

if(command === "kick") {
    if(!message.member.hasPermission("KICK_MEMBERS")) 
      return message.reply("tu n'as pas la permission!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("veuillez mentionner un membre!");

    let raison = args.slice(1).join(' ');
    if(!raison)
      return message.reply("veuillez indiquez une raison.")
	    
    await member.kick(raison)
   
message.delete()
message.channel.send(`${member.user.username} a été expulsé par ${message.author.username} pour ${raison}.`);
  }

if(command === "ban") {
    if(!message.member.hasPermission("ADMINISTRATOR")) 
      return message.reply("tu n'as pas la permission!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("veuillez mentionner un utilisateur!");

    let raison = args.slice(1).join(' ');
    if(!raison)
      return message.reply("veuillez indiquez une raison!")
	    
    await member.ban(raison)
   
message.delete()
    message.channel.send(`${member.user.username} a été bannis par ${message.author.username} pour ${raison}.`);
  }

if(command === "mpdp") {
var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setImage (message.author.avatarURL)
message.channel.send(embed)
}

if(command === "pdp") {
let member = message.mentions.members.first();
var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setImage (member.user.avatarURL)
message.channel.send(embed)
}
});


bot.login(token);
