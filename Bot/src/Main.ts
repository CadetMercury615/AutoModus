import AutoModusClient from '../lib/Core/AutoModusClient.ts';
import { Client, Message } from '../lib/Nitro/mod.ts'
const { token } = JSON.parse(await Deno.readTextFile('./Bot/src/config.json'))
const client = new AutoModusClient();

client.connect(token);

client.on('ready', async() => { console.log(`Ready as ${client.user.tag}`) });

client.on('message', async(msg: Message) => {
    if(msg.content.startsWith('a>')) {
        client.cmd.runCMD(client, msg, msg.content.split(" "))
    }
})