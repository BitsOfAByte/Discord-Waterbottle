require('dotenv').config();
const functions = require('../functions');
module.exports = {
    name: 'optin',
    description: 'Opt in to the hydration role',
    cooldown: 3,
    execute: async (interaction) => {
        let errorOccured = false;
        let role = (await interaction.guild.roles.cache.find((role) => role.id === process.env.roleID)) || functions.emit.error(`The specified role does not appear to exist.`, 1);
        if (interaction.member.roles.cache.has(role.id)) return interaction.followUp({ content: `${interaction.user}! You already have the role.` });
        await interaction.member.roles.add(role, 'Giving user hydration role').catch(() => {
            errorOccured = true;
        });
        if (errorOccured) return interaction.followUp({ content: `I was unable to add you to the role, maybe I lack the permissions or the role is managed by an extension.` });
        return interaction.editReply({ content: `Okay, ${interaction.user}, you have been given the \`${role.name}\` role.` });
    },
};
