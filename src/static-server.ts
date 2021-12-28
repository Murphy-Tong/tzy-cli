import path from "path";
import type { Command } from "commander";
import * as express from "express";
import chalk from "chalk";
import { getIpAddress } from "./utils/os";

function startServer(commandAndOptions: { dir: string, port: number }) {
  const dir = path.resolve(process.cwd(), commandAndOptions.dir);
  const port = commandAndOptions.port
  const app = express.default();
  app.use("/", express.static(dir));
  app.listen(port, "0.0.0.0");
  console.log(chalk.white("静态文件服务器已启动：", dir));
  console.log(chalk.green(`Link: http://localhost:${port}`));
  console.log(chalk.green(`Link: http://${getIpAddress()}:${port}`));
}

export default function init(program: Command) {
  program
    .command("ss")
    .option("-p, --port [number]", 'static server port', Number, 8000)
    .option("-d, --dir [string]", 'static file dir', String, process.cwd())
    .description("启动一个静态文件服务器")
    .action(startServer);
}
