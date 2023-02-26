function loadCommands(client) {
    const ascii = require('ascii-table');
    const fs = require('fs')
    const table = new ascii().setHeading("Commands", "Status")

    let commandArray = [];

    const commandsFolder = fs.readdirSync("./bot/Commands");

    for (const folder of commandsFolder) {
        const commandFiles = fs
        .readdirSync(`./bot/Commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

        for (const file of commandFiles) {
            const commandFile = require(`../Commands/${folder}/${file}`)

            const properties = { folder, ...commandFile };
            client.commands.set(commandFile.data.name, properties);

            commandArray.push(commandFile.data.toJSON());

            table.addRow(file, "Loaded")
            continue;
        }
    }

    client.application.commands.set(commandArray);

    return console.log(table.toString(), "\n Loaded Commands")

}

module.exports = { loadCommands }