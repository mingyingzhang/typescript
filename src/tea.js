const path = require('path');
const os = require('os');
const fs = require('fs');

const cwd = path.resolve(".");
const package = require(path.join(cwd, "package.json"));
const deps = ["@tencent/tea-scripts","@tencent/tea-cli"].filter(
    i =>
    !(package.dependencies || {})[i] && !(package.devDependencies || {})[i]
).map(i => ({name: i}));// package中没有这项依赖
const globalPackages = deps.filter(i => i.global);

const templateUrl = path.resolve(__dirname, './index.html');
const template = (() => {
  let template = fs.readFileSync(templateUrl, { encoding: 'utf-8' });
  const scriptModuleRE =
    /(<script\b[^>]*type\s*=\s*(?:"module"|'module')[^>]*>)(.*?)<\/script>/gims;
  return template.replace(scriptModuleRE, '');
})();
const build = {template};

const argv = process.argv;

console.log(deps,globalPackages,os.homedir(),build,argv)