import { Client } from "../Nitro/mod.ts";
import Logger from "../Nitro/src/utils/misc/Logger.ts";
import CommandHandler from "./CommandHandler.ts";

class AutoModusClient extends Client {
    public cmd = new CommandHandler();
    public logger = new Logger('AutoModus')
    register(token: string) {
        this.connect(token)
        this.logger.notice(`Client successfully logged in as: ${this.user.tag}`)
    }

}
export default AutoModusClient;