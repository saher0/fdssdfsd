const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("566238513327243274")
setInterval(function() {
channel.send(`سبحان الله وبحمده سبحان الله العضيم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);