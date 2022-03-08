import fs from 'fs';
import path from 'path';
import { setFailed, setOutput, getInput, info, startGroup, endGroup } from '@actions/core';
import { RunArgvs, formatConfig, create } from 'markdown-to-html-cli';

;(async () => {
  try {
    const output = getInput('output') || 'index.html';
    const source = getInput('source') || 'README.md';
    const description = getInput('description');
    const favicon = getInput('favicon');
    const config = getInput('config');
    const markdown = getInput('markdown');
    const corners = getInput('github-corners');
    const options: RunArgvs = {}
    info(`source: ${path.resolve(source)}`);
    if (source && !markdown) {
      options.markdown = (await fs.promises.readFile(path.resolve(source))).toString();
    } else {
      options.markdown = markdown;
    }
    options.favicon = favicon;
    options.config = config;
    options.description = description;
    options['github-corners'] = corners;

    const outputPath = path.resolve(output);
    setOutput('output', outputPath);
    const opts = formatConfig({ ...options });

    let cssStr = fs.readFileSync(path.resolve(process.cwd(), '../cli/github.css')).toString();
    if (options['github-corners-fork'] && options['github-corners']) {
      let cssFork = fs.readFileSync(path.resolve(process.cwd(), '../cli/github-fork-ribbon.css')).toString();
      cssStr = `${cssStr}${cssFork}`;
    }

    options.document.style = cssStr;
    
    setOutput('markdown', opts.markdown);
    info(`Config Path: "${opts.config}"`);

    startGroup(`Options: \x1b[34m()\x1b[0m`);
    info(`${opts}`);
    endGroup();

    const htmlStr = create({ ...opts });
    info(`Output Path: "${outputPath}"`);
    setOutput('html', htmlStr);
    fs.writeFileSync(outputPath, htmlStr);
  } catch (error) {
    console.log('error::', error)
    setFailed(error.message);
  }
})();