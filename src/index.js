require('dotenv').config();
const fs = require('fs');
const { client } = require('./core/client.js');

fs.readdir('./src/events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        if (!file.endsWith('.js')) return;
        const event = require(`./events/${file}`);
        if (process.env.enableDebugLogs) console.log(`⌛ Loading Event: ${file} @ ${new Date()}`);
        let eventName = file.split('.')[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

fs.readdir('./src/commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split('.')[0];
        if (process.env.enableDebugLogs) console.log(`⌛ Loading Command: ${file} @ ${new Date()}`);
        client.commands.set(commandName, props);
    });
});
