require('dotenv').config();
const functions = require('../functions');
module.exports = {
    name: 'optout',
    description: 'Opt out of the hydration role',
    cooldown: 3,
    execute: async (interaction) => {
        let errorOccured = false;
        let role = (await interaction.guild.roles.cache.find((role) => role.id === process.env.roleID)) || functions.emit.error(`The specified role does not appear to exist.`, 1);
        if (interaction.member.roles.cache.has(role.id)) return interaction.followUp({ content: `${interaction.user}! You already have the role.` });
        await interaction.member.roles.remove(role, 'Removing users hydration role').catch(() => {
            errorOccured = true;
        });
        if (errorOccured) return interaction.followUp({ content: `I was unable to remove the role, maybe I lack the permissions or the role is managed by an extension.` });
        return interaction.editReply({ content: `Okay, ${interaction.user}, I have removed the \`${role.name}\` role from you.` });
    },
};
