import fs from "node:fs/promises";
import path from "node:path";

function printError(messagge) {
  console.error(messagge);
  process.exit(1);
}

async function controlUserInput(userCLIJSON) {
  let contentJSONtoString = "";
  let JSONtoJSONJS = {};

  if (!userCLIJSON) {
    printError("error: please provide a JSON file path");
  }

  const pathFileJSON = path.resolve(userCLIJSON);

  try {
    contentJSONtoString = await fs.readFile(pathFileJSON, "utf8");
  } catch (error) {
    printError(`error: could not read file: ${pathFileJSON}`);
  }

  try {
    JSONtoJSONJS = JSON.parse(contentJSONtoString);
  } catch (error) {
    printError(`error: invalid JSON in file: ${path.basename(userCLIJSON)}`);
  }

  return JSONtoJSONJS;
}

async function main() {
  const userCLIJSON = process.argv[2];
  const textJSON = await controlUserInput(userCLIJSON);
  console.log(JSON.stringify(textJSON, null, 2));
}

await main();
