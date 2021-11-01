module.exports = {
    name: 'ping',
    description: 'Displays the bots WS ping',
    cooldown: 3,
    execute: async (interaction) => {
        return interaction.followUp({ content: `Pong! \`${interaction.client.ws.ping}ms\`` });
    },
};
