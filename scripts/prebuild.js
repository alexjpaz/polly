#!/usr/bin/env node

const fs = require('fs').promises;

const main = async () => {
  try {
    const pkg = await fs.readFile("package.json");

    const json = JSON.parse(pkg.toString());

    if(process.env.NETLIFY) {
      json.homepage = process.env.URL;
    }

    await fs.writeFile("package.json", JSON.stringify(json));
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
};

main();
