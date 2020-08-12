import AutoModusClient from "../../../lib/Core/AutoModusClient.ts";
import BaseCommand from "../../../lib/Core/BaseCommand.ts";
import { Message } from "../../../lib/Nitro/mod.ts";

class PingCommand extends BaseCommand {
    names = ['ping', 'p']

    async run(client: AutoModusClient, msg: Message, args: string[]) {
        let m = await msg.channel.send('Pinging');
        let diff = m.timestamp - msg.timestamp;
        m.edit(`Pong! \`${diff}ms\``);
    }
}
export default PingCommand;