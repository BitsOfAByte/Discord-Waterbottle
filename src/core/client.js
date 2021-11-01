const Discord = require('discord.js');

const client = new Discord.Client({
    disableMentions: 'everyone',
    intents: ['GUILD_MESSAGES', 'GUILDS'],
});

const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();

client.login(process.env.TOKEN);

module.exports = { client, cooldowns };
