const mongoose = require('mongoose');
const config = require('../../../config.json');
require('chalk');
mongoose.set('strictQuery', false);

module.exports = {
    name: "ready",
    once: true,

    async execute(interaction, client) {
        await mongoose.connect(config.mongodb || "", {
            keepAlive: true,
        })

        console.log(`${client.user.username} is online and is in ${client.guilds.cache.size} server!`)
    }
}