#!ts-node
import { Command } from "commander";
import path from "path";
import { json } from "./utils/json";
import ss from './static-server'

async function start() {
    const pck = await json(path.resolve('../package.json'))
    const program = new Command();
    program.version(pck.version);
    ss(program)
    program.parse(process.argv)
}



start()