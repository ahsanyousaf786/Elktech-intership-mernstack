#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const winston = require("winston");

const chalk = require("chalk");

// ---------------- LOGGER ----------------
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log" }),
  ],
});

// ---------------- CLI CONFIG ----------------
const argv = yargs(hideBin(process.argv))
  .usage(chalk.yellow("Usage: node cli.js --file <path> [options]"))
  .option("file", {
    alias: "f",
    describe: "Path to the file",
    type: "string",
    demandOption: true,
  })
  .option("words", {
    alias: "w",
    describe: "Count words",
    type: "boolean",
  })
  .option("lines", {
    alias: "l",
    describe: "Count lines",
    type: "boolean",
  })
  .option("chars", {
    alias: "c",
    describe: "Count characters",
    type: "boolean",
  })
  .help()
  .parse();

// ---------------- FILE PROCESS ----------------
async function processFile(filePath) {
  return new Promise((resolve, reject) => {
    let wordCount = 0;
    let lineCount = 0;
    let charCount = 0;

    try {
      const fullPath = path.resolve(filePath);

      if (!fs.existsSync(fullPath)) {
        throw new Error("File not found");
      }

      const stream = fs.createReadStream(fullPath, { encoding: "utf8" });

      stream.on("error", (err) => {
        logger.error(`Stream error: ${err.message}`);
        reject(err);
      });

      const rl = readline.createInterface({
        input: stream,
        crlfDelay: Infinity,
      });

      rl.on("line", (line) => {
        lineCount++;
        charCount += line.length + 1;

        const words = line.trim().split(/\s+/).filter(Boolean);
        wordCount += words.length;
      });

      rl.on("close", () => {
        resolve({ wordCount, lineCount, charCount });
      });

    } catch (error) {
      logger.error(error.message);
      reject(error);
    }
  });
}

// ---------------- UI HELPERS ----------------
function printHeader() {
  console.log(
    chalk.blue.bold("\n📂 FILE ANALYZER CLI") +
    chalk.gray("\n----------------------------------")
  );
}

function printResults(result, argv) {
  console.log(chalk.green.bold("\n📊 Analysis Result:\n"));

  if (argv.words || (!argv.words && !argv.lines && !argv.chars)) {
    console.log(chalk.cyan("📝 Words: ") + chalk.white(result.wordCount));
  }

  if (argv.lines || (!argv.words && !argv.lines && !argv.chars)) {
    console.log(chalk.magenta("📄 Lines: ") + chalk.white(result.lineCount));
  }

  if (argv.chars || (!argv.words && !argv.lines && !argv.chars)) {
    console.log(chalk.yellow("🔡 Characters: ") + chalk.white(result.charCount));
  }

  console.log(chalk.gray("\n----------------------------------"));
}

// ---------------- MAIN ----------------
(async () => {
  try {
    printHeader();

    console.log(chalk.blue("⏳ Processing file..."));

    const start = Date.now();

    const result = await processFile(argv.file);

    const end = Date.now();

    printResults(result, argv);

    console.log(
      chalk.green(`✅ Completed in ${end - start} ms\n`)
    );

    logger.info("File processed successfully");

  } catch (error) {
    console.log(chalk.red.bold("\n❌ Error: ") + chalk.white(error.message));
    logger.error(`Execution failed: ${error.message}`);
  }
})();