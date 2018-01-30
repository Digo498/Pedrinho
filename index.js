const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == '.music'){
        message.channel.sendMessage('!play https://www.youtube.com/playlist?list=PLW95hAYbqbmODSt-Zkv3qLtx_8YTKXklT');
        message.channel.sendMessage('!shuffle');
        message.channel.sendMessage('!skip');
    }
});

bot.login(process.env.NDA3NjUzNDM4NDg3NTI3NDI1.DVEyEw.FW1mgi0_YFIRQ7BwdCISg-9yz6w);
