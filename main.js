  const Discord = require('discord.js');
const express = require('express');
const app = express();

//DEBUT PARAMETRES HEROKU
app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function(){
    console.log(`Bot en fonctionnement sur le port ${app.get('port')}`);
})

var bot = new Discord.Client();
var prefix = ("l");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[lhelp] LegacyBattle',type: 0}});
    console.log('Bot Ready !');
});

bot.login('NDYzNDI2NTQ3MTIzMDkzNTA0.DhwPLQ.283Sc2Yd-wzNKlAYHjOM5sejZFg'); {
console.log('Bot Connected !');
}

bot.on("guildMemberAdd", member => {
    
    member.guild.channels.find("name", "lobby").send(` ${member.user.username} à rejoint le groupe`)
    console.log('Membre + !');
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "lobby").send(`${member.user.username} à quitté le groupe`)
    console.log('Membre - !');
})

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Joueurs');
    member.addRole(role)
    console.log('Role Joueurs attribué à nouveau Membre');
})

bot.on('message' , message =>{
if (message.content === 'Salut'){
    message.reply('Salut !');
    console.log('Salut ...');
}

if (message.content === 'Bonjour'){
    message.reply('Bonjour !');
    console.log('Bonjour ...');
}

if (message.content === 'Yo'){
    message.reply('Yo !');
    console.log('Yo ...'); 
}

if (message.content === prefix + "help"){
    var help_embed = new Discord.RichEmbed()
    .setColor('#B0AAFE')
    .addField("Commande du bot !", "-lhelp : affiche les commande du bot ! \n-lclass : affiche le classement du tournoy en cours ! \n-lpartage : donne le lien du serveur !")
    message.channel.sendEmbed(help_embed);
    console.log('Commande help éxécuté !')
}

if (message.content === prefix + "class"){
    message.reply ('Voici le classement :ok_hand: https://i.imgur.com/HzGesCw.jpg ');  //{files: ['./classement/actuel.png']} 
    console.log('Commande class éxécuté !')
}

if (message.content === prefix + "partage"){
    message.reply ('Voici le lien du serveur: https://discord.gg/QkuhP9z :vulcan:')
    console.log ('Commande partage éxécuté')
}

if (message.content === "TestBot"){
    var help_embed = new Discord.RichEmbed()
    .setColor('#B0AAFE')
    .addField("TestBot", "reply for TestBot\nBot is ok")
    message.channel.sendEmbed(help_embed);
    console.log('Bot oppérationel')

}

});
 
