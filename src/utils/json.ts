import { PathLike } from "fs";
import fs from "fs";

export async function json(path: PathLike) {
    return JSON.parse((await fs.promises.readFile(path, { encoding: 'utf-8' })))
}