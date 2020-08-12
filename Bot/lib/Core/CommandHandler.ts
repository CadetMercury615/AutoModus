import AutoModusClient from "./AutoModusClient.ts";
import { Message } from "../Nitro/mod.ts";
import BaseCommand from "./BaseCommand.ts";

import PingCommand from "../../src/Commands/General/PingCommand.ts";

class CommandHandler {
    private readonly commands: BaseCommand[];
    private command!: string;
    private readonly prefix: string = 'a>'
    constructor() {
        const Commands = [
            PingCommand
        ]
        this.commands = Commands.map(Command => new Command());
    }
    async runCMD(client: AutoModusClient, msg: Message, args: string[]) {
        if(!msg.content.startsWith(this.prefix)) return; 
        this.command = args[0].slice(this.prefix.length);
        let mCommand = this.commands.find((c: BaseCommand) => c.names.includes(this.command));
        if(!mCommand) { msg.delete() }
        await mCommand?.run(client, msg, args)
    }
}
export default CommandHandler;