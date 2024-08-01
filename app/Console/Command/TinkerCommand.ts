import { Command } from "@lunoxjs/core/console";
import repl from "bun-repl/src/repl";

class TinkerCommand extends Command {

  protected signature = "tinker:bun";

  protected description = "Interact with your application using bun REPL";

  public async handle() {
    process.env.BUN_REPL_PROMPT="lunox@repl> ";
    await repl.start();
    return this.KEEPALIVE;
  }

}

export default TinkerCommand;
