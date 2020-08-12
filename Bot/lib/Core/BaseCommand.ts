import { Message, Client } from "../Nitro/mod.ts"


abstract class BaseCommand {
    names!: string[];

    async run(client: Client, msg: Message, args: string[]): Promise<void> {}
}
export default BaseCommand;