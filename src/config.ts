import * as fs from "fs";

const config = JSON.parse(fs.readFileSync("../config.json", "utf8"));

export {config as default};