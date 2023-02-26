const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');

const { loadCommands } = require('./bot/Handlers/commandHandler')
const { loadEvents } = require('./bot/Handlers/eventHandler');

const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)],
});

client.commands = new Collection();
client.config = require('./config.json')

client.login(client.config.token).then(() => {
    loadCommands(client);
    loadEvents(client);
})