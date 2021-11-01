const { Collection } = require('discord.js');
require('dotenv').config();
const { cooldowns } = require('../core/client.js');

module.exports = async (client, interaction) => {
    if (interaction.user?.bot || !interaction.guild || !process.env.allowCommands) return;
    if (process.env.adminOnlyCmds == 'true' && !interaction.member.roles.cache.has(process.env.adminRoleID)) return;
    const command = client.commands.get(interaction.commandName) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(interaction.commandName));
    if (!command) return;

    /* Per-Command cooldown is handled here, if a user uses the same command before the cooldown has ended, deny the user from using the command */
    if (!cooldowns.has(command.name)) cooldowns.set(command.name, new Collection());

    // Cooldown
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    if (timestamps.has(interaction.user?.id)) {
        const expirationTime = timestamps.get(interaction.user?.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return interaction.reply({
                content: `${interaction.user}, Please wait ${timeLeft.toFixed(1)} more second(s) before using \`${interaction.commandName}\` again.`,
                ephemeral: true,
            });
        }
    }

    try {
        interaction.deferReply();
        timestamps.set(interaction.user?.id, now);
        setTimeout(() => timestamps.delete(interaction.user?.id), cooldownAmount);
        command.execute(interaction);
    } catch (error) {
        console.error(error);
        interaction.reply({ content: 'An unexpected error occured.' });
    }
};
