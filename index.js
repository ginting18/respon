const { prefix, developerID } = require("./config.json")
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('KRN RESPONSE is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    if(command === 'done'){
        client.commands.get('done').execute(message, args, Discord);
    } else if (command === 'door1'){
        client.commands.get('door1').execute(message, args, Discord);

    }  else if (command === 'door2'){
        client.commands.get('door2').execute(message, args, Discord);

    }else if (command === 'door3'){
        client.commands.get('door3').execute(message, args, Discord);

    }else if (command === 'door4'){
        client.commands.get('door4').execute(message, args, Discord);

    }else if (command === 'door5'){
        client.commands.get('door5').execute(message, args, Discord)

    } else if (command === 'door6'){
        client.commands.get('door6').execute(message, args, Discord)

    }else if (command === 'door7'){
        client.commands.get('door7').execute(message, args, Discord)

    }else if (command === 'door8'){
        client.commands.get('door8').execute(message, args, Discord)

    }else if (command === 'format'){
        client.commands.get('format').execute(message, args, Discord)

    }

})

client.login(process.env.TOKEN);
