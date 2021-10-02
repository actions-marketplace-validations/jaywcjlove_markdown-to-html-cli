import { create } from '../src/create';

it('create test case', async () => {
  expect(typeof create({ markdown: 'Hello World!', _: [] })).toEqual('string');

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>.task-list-item {
list-style-type: none
}
.task-list-item label {
font-weight: 400
}
.task-list-item.enabled label {
cursor: pointer
}
.task-list-item+.task-list-item {
margin-top: 3px
}
.task-list-item .handle {
display: none
}
.task-list-item-checkbox {
margin: 0 .2em .25em -1.6em;
vertical-align: middle
}
.wmde-markdown h1,.wmde-markdown h2,.wmde-markdown h3,.wmde-markdown h4,.wmde-markdown h5,.wmde-markdown h6 {
font-weight: 600;
line-height: 1.25;
margin-bottom: 16px;
margin-top: 24px
}
.wmde-markdown h1 .anchor,.wmde-markdown h2 .anchor,.wmde-markdown h3 .anchor,.wmde-markdown h4 .anchor,.wmde-markdown h5 .anchor,.wmde-markdown h6 .anchor {
float: left;
padding-right: 4px;
margin-left: -20px;
line-height: 1
}
.wmde-markdown h1 .octicon-link,.wmde-markdown h2 .octicon-link,.wmde-markdown h3 .octicon-link,.wmde-markdown h4 .octicon-link,.wmde-markdown h5 .octicon-link,.wmde-markdown h6 .octicon-link {
visibility: hidden;
vertical-align: middle
}
.wmde-markdown h1:hover .octicon-link,.wmde-markdown h2:hover .octicon-link,.wmde-markdown h3:hover .octicon-link,.wmde-markdown h4:hover .octicon-link,.wmde-markdown h5:hover .octicon-link,.wmde-markdown h6:hover .octicon-link {
visibility: visible
}
.github-corner:hover .octo-arm {
-webkit-animation: octocat-wave .56s ease-in-out;
animation: octocat-wave .56s ease-in-out
}
@-webkit-keyframes octocat-wave {
0%, to {
-webkit-transform: rotate(0);
transform: rotate(0);
}
20%, 60% {
-webkit-transform: rotate(-25deg);
transform: rotate(-25deg);
}
40%, 80% {
-webkit-transform: rotate(10deg);
transform: rotate(10deg);
}
}
@keyframes octocat-wave {
0%, to {
-webkit-transform: rotate(0);
transform: rotate(0)
}
20%, 60% {
-webkit-transform: rotate(-25deg);
transform: rotate(-25deg);
}
40%, 80% {
-webkit-transform: rotate(10deg);
transform: rotate(10deg);
}
}
.wmde-markdown {
font-size: 16px;
line-height: 1.5;
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
max-width: 1024px;
margin: 28px auto 60px auto;
}
.wmde-markdown > :first-child {
margin-top: 0 !important;
}
.wmde-markdown > :last-child {
margin-bottom: 0 !important;
}
.wmde-markdown code[class*="language-"],
.wmde-markdown pre[class*="language-"] {
color: black;
text-align: left;
white-space: pre;
word-spacing: normal;
word-break: normal;
word-wrap: normal;
-webkit-hyphens: none;
hyphens: none;
}
.wmde-markdown pre code {
background: none;
overflow-wrap: normal;
white-space: inherit;
-moz-tab-size: 2;
tab-size: 2;
padding: 16px;
font-size: 95%;
line-height: 1.5;
display: block;
text-shadow: 0 1px #fff;
}
.wmde-markdown pre {
margin-bottom: 18px;
font-size: 85%;
line-height: 1.45;
position: relative;
overflow-x: auto;
background-color: #f6f8fa;
border-radius: 3px;
}
.wmde-markdown code,
.wmde-markdown tt {
background-color: rgba(27, 31, 35, 0.05);
border-radius: 3px;
font-size: 85%;
margin: 0;
padding: 0.2em 0.4em;
}
.wmde-markdown pre,
.wmde-markdown code,
.wmde-markdown tt {
font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
}
.wmde-markdown img {
max-width: 100%;
}
.wmde-markdown input {
vertical-align: middle;
margin: 0 0.2em 0.25em -1.6em;
}
.wmde-markdown input + p {
display: inline;
}
.wmde-markdown h1,
.wmde-markdown h2 {
border-bottom: 1px solid #eaecef;
padding-bottom: 0.3em;
}
.wmde-markdown h1,
.wmde-markdown h2,
.wmde-markdown h3,
.wmde-markdown h4,
.wmde-markdown h5,
.wmde-markdown h6 {
font-weight: 600;
line-height: 1.25;
margin-bottom: 16px;
margin-top: 24px;
}
.wmde-markdown h1 .anchor,
.wmde-markdown h2 .anchor,
.wmde-markdown h3 .anchor,
.wmde-markdown h4 .anchor,
.wmde-markdown h5 .anchor,
.wmde-markdown h6 .anchor {
float: left;
padding-right: 4px;
margin-left: -20px;
line-height: 1;
}
.wmde-markdown h1 .octicon-link,
.wmde-markdown h2 .octicon-link,
.wmde-markdown h3 .octicon-link,
.wmde-markdown h4 .octicon-link,
.wmde-markdown h5 .octicon-link,
.wmde-markdown h6 .octicon-link {
visibility: hidden;
vertical-align: middle;
}
.wmde-markdown h1:hover .octicon-link,
.wmde-markdown h2:hover .octicon-link,
.wmde-markdown h3:hover .octicon-link,
.wmde-markdown h4:hover .octicon-link,
.wmde-markdown h5:hover .octicon-link,
.wmde-markdown h6:hover .octicon-link {
visibility: visible;
}
.wmde-markdown h1 {
font-size: 2em;
}
.wmde-markdown h2 {
font-size: 1.5em;
}
.wmde-markdown h3 {
font-size: 1.25em;
}
.wmde-markdown h4 {
font-size: 1em;
}
.wmde-markdown h5 {
font-size: 0.875em;
}
.wmde-markdown h6 {
font-size: 0.85em;
}
.wmde-markdown ol,
.wmde-markdown ul {
padding-left: 2em;
}
.wmde-markdown ol > p,
.wmde-markdown ul > p {
margin-bottom: 0;
}
.wmde-markdown ul {
margin-bottom: 16px;
margin-top: 0;
list-style: initial;
}
.wmde-markdown > blockquote,
.wmde-markdown > blockquote blockquote {
margin: 0;
border-left: 0.25em solid #dfe2e5;
color: #6a737d;
padding: 0 1em;
}
.wmde-markdown > blockquote > :last-child,
.wmde-markdown > blockquote blockquote > :last-child {
margin-bottom: 0;
}
.wmde-markdown > blockquote > :first-child,
.wmde-markdown > blockquote blockquote > :first-child {
margin-top: 0;
}
.wmde-markdown hr {
margin: 1.5em auto;
border: 0;
border-top: 2px dotted #eee;
height: 1px;
}
.wmde-markdown > table,
.wmde-markdown > blockquote table {
display: block;
overflow: auto;
width: 100%;
border-collapse: collapse;
border-spacing: 0;
font-size: 14px;
}
.wmde-markdown > table tr,
.wmde-markdown > blockquote table tr {
background-color: #fff;
border-top: 1px solid #c6cbd1;
}
.wmde-markdown > table td,
.wmde-markdown > blockquote table td,
.wmde-markdown > table th,
.wmde-markdown > blockquote table th {
border: 1px solid #dfe2e5;
padding: 6px 13px;
}
.wmde-markdown blockquote,
.wmde-markdown details,
.wmde-markdown dl,
.wmde-markdown ol,
.wmde-markdown p,
.wmde-markdown pre,
.wmde-markdown table,
.wmde-markdown ul {
margin-bottom: 16px;
margin-top: 0;
}
.wmde-markdown a {
color: #0366d6;
text-decoration: none;
}
.wmde-markdown a:hover {
text-decoration: underline;
}
.wmde-markdown .namespace {
opacity: 0.7;
}
.wmde-markdown .token.important {
font-weight: normal;
}
.wmde-markdown .token.bold {
font-weight: bold;
}
.wmde-markdown .token.italic {
font-style: italic;
}
.wmde-markdown .token.entity {
cursor: help;
}
.wmde-markdown kbd {
background-color: #fafbfc;
border-bottom-color: #d1d5da;
border: 1px solid #d1d5da;
border-radius: 3px;
box-shadow: inset 0 -1px 0 #d1d5da;
color: #56595d;
display: inline-block;
font-size: 10px;
font-family: ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace;
line-height: 10px;
padding: 2px 4px;
vertical-align: middle;
}
.wmde-markdown .token.tag .attr-value {
color: #032f62;
}
.wmde-markdown .token.property,
.wmde-markdown .token.tag,
.wmde-markdown .token.boolean,
.wmde-markdown .token.number,
.wmde-markdown .token.function-name,
.wmde-markdown .token.constant,
.wmde-markdown .token.symbol,
.wmde-markdown .token.deleted {
color: #0060c9;
}
.wmde-markdown .token.punctuation {
color: #a0a0a0;
}
.wmde-markdown code[class*="language-"] {
color: black;
}
.wmde-markdown code[class*="language-"] .token.selector,
.wmde-markdown code[class*="language-"] .token.attr-name,
.wmde-markdown code[class*="language-"] .token.string,
.wmde-markdown code[class*="language-"] .token.char,
.wmde-markdown code[class*="language-"] .token.function,
.wmde-markdown code[class*="language-"] .token.builtin {
color: #6f42c1;
}
.wmde-markdown code[class*="language-"] .token.inserted {
color: #22863a;
background-color: #f0fff4;
}
.wmde-markdown code[class*="language-"] .token.deleted {
color: #b31d28;
background-color: #ffeef0;
}
.wmde-markdown code[class*="language-"] .token.class-name {
color: #6f42c1;
}
.wmde-markdown code[class*="language-"] .code-block {
color: #032f62;
}
.wmde-markdown code[class*="language-"] .token.comment,
.wmde-markdown code[class*="language-"] .token.block-comment,
.wmde-markdown code[class*="language-"] .token.prolog,
.wmde-markdown code[class*="language-"] .token.doctype,
.wmde-markdown code[class*="language-"] .token.cdata {
color: #7D8B99;
}
.wmde-markdown code[class*="language-"] .token.punctuation {
color: #a0a0a0;
}
.wmde-markdown code[class*="language-"] .token.operator,
.wmde-markdown code[class*="language-"] .token.entity,
.wmde-markdown code[class*="language-"] .token.url,
.wmde-markdown code[class*="language-"] .token.variable {
color: #d73a49;
background: rgba(255, 255, 255, 0.5);
}
.wmde-markdown code[class*="language-"] .token.atrule,
.wmde-markdown code[class*="language-"] .token.attr-value {
color: #004698;
}
.wmde-markdown code[class*="language-"] .token.keyword {
color: #d63200;
}
.wmde-markdown code[class*="language-"] .token.regex,
.wmde-markdown code[class*="language-"] .token.important {
color: #e90;
}
.wmde-markdown code[class*="language-"] .token.string {
color: #0a53c1;
}</style>
    <style>body { background: red; }</style>
  </head>
  <body><div class="wmde-markdown">
    <p>Hello World!</p>
  </div></body>
</html>
`;
  expect(create({ markdown: 'Hello World!', _: [] }, { document: { style: 'body { background: red; }' }})).toEqual(html);
});

it('github-corners options test case', async () => {
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>.task-list-item {
list-style-type: none
}
.task-list-item label {
font-weight: 400
}
.task-list-item.enabled label {
cursor: pointer
}
.task-list-item+.task-list-item {
margin-top: 3px
}
.task-list-item .handle {
display: none
}
.task-list-item-checkbox {
margin: 0 .2em .25em -1.6em;
vertical-align: middle
}
.wmde-markdown h1,.wmde-markdown h2,.wmde-markdown h3,.wmde-markdown h4,.wmde-markdown h5,.wmde-markdown h6 {
font-weight: 600;
line-height: 1.25;
margin-bottom: 16px;
margin-top: 24px
}
.wmde-markdown h1 .anchor,.wmde-markdown h2 .anchor,.wmde-markdown h3 .anchor,.wmde-markdown h4 .anchor,.wmde-markdown h5 .anchor,.wmde-markdown h6 .anchor {
float: left;
padding-right: 4px;
margin-left: -20px;
line-height: 1
}
.wmde-markdown h1 .octicon-link,.wmde-markdown h2 .octicon-link,.wmde-markdown h3 .octicon-link,.wmde-markdown h4 .octicon-link,.wmde-markdown h5 .octicon-link,.wmde-markdown h6 .octicon-link {
visibility: hidden;
vertical-align: middle
}
.wmde-markdown h1:hover .octicon-link,.wmde-markdown h2:hover .octicon-link,.wmde-markdown h3:hover .octicon-link,.wmde-markdown h4:hover .octicon-link,.wmde-markdown h5:hover .octicon-link,.wmde-markdown h6:hover .octicon-link {
visibility: visible
}
.github-corner:hover .octo-arm {
-webkit-animation: octocat-wave .56s ease-in-out;
animation: octocat-wave .56s ease-in-out
}
@-webkit-keyframes octocat-wave {
0%, to {
-webkit-transform: rotate(0);
transform: rotate(0);
}
20%, 60% {
-webkit-transform: rotate(-25deg);
transform: rotate(-25deg);
}
40%, 80% {
-webkit-transform: rotate(10deg);
transform: rotate(10deg);
}
}
@keyframes octocat-wave {
0%, to {
-webkit-transform: rotate(0);
transform: rotate(0)
}
20%, 60% {
-webkit-transform: rotate(-25deg);
transform: rotate(-25deg);
}
40%, 80% {
-webkit-transform: rotate(10deg);
transform: rotate(10deg);
}
}
.wmde-markdown {
font-size: 16px;
line-height: 1.5;
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
max-width: 1024px;
margin: 28px auto 60px auto;
}
.wmde-markdown > :first-child {
margin-top: 0 !important;
}
.wmde-markdown > :last-child {
margin-bottom: 0 !important;
}
.wmde-markdown code[class*="language-"],
.wmde-markdown pre[class*="language-"] {
color: black;
text-align: left;
white-space: pre;
word-spacing: normal;
word-break: normal;
word-wrap: normal;
-webkit-hyphens: none;
hyphens: none;
}
.wmde-markdown pre code {
background: none;
overflow-wrap: normal;
white-space: inherit;
-moz-tab-size: 2;
tab-size: 2;
padding: 16px;
font-size: 95%;
line-height: 1.5;
display: block;
text-shadow: 0 1px #fff;
}
.wmde-markdown pre {
margin-bottom: 18px;
font-size: 85%;
line-height: 1.45;
position: relative;
overflow-x: auto;
background-color: #f6f8fa;
border-radius: 3px;
}
.wmde-markdown code,
.wmde-markdown tt {
background-color: rgba(27, 31, 35, 0.05);
border-radius: 3px;
font-size: 85%;
margin: 0;
padding: 0.2em 0.4em;
}
.wmde-markdown pre,
.wmde-markdown code,
.wmde-markdown tt {
font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
}
.wmde-markdown img {
max-width: 100%;
}
.wmde-markdown input {
vertical-align: middle;
margin: 0 0.2em 0.25em -1.6em;
}
.wmde-markdown input + p {
display: inline;
}
.wmde-markdown h1,
.wmde-markdown h2 {
border-bottom: 1px solid #eaecef;
padding-bottom: 0.3em;
}
.wmde-markdown h1,
.wmde-markdown h2,
.wmde-markdown h3,
.wmde-markdown h4,
.wmde-markdown h5,
.wmde-markdown h6 {
font-weight: 600;
line-height: 1.25;
margin-bottom: 16px;
margin-top: 24px;
}
.wmde-markdown h1 .anchor,
.wmde-markdown h2 .anchor,
.wmde-markdown h3 .anchor,
.wmde-markdown h4 .anchor,
.wmde-markdown h5 .anchor,
.wmde-markdown h6 .anchor {
float: left;
padding-right: 4px;
margin-left: -20px;
line-height: 1;
}
.wmde-markdown h1 .octicon-link,
.wmde-markdown h2 .octicon-link,
.wmde-markdown h3 .octicon-link,
.wmde-markdown h4 .octicon-link,
.wmde-markdown h5 .octicon-link,
.wmde-markdown h6 .octicon-link {
visibility: hidden;
vertical-align: middle;
}
.wmde-markdown h1:hover .octicon-link,
.wmde-markdown h2:hover .octicon-link,
.wmde-markdown h3:hover .octicon-link,
.wmde-markdown h4:hover .octicon-link,
.wmde-markdown h5:hover .octicon-link,
.wmde-markdown h6:hover .octicon-link {
visibility: visible;
}
.wmde-markdown h1 {
font-size: 2em;
}
.wmde-markdown h2 {
font-size: 1.5em;
}
.wmde-markdown h3 {
font-size: 1.25em;
}
.wmde-markdown h4 {
font-size: 1em;
}
.wmde-markdown h5 {
font-size: 0.875em;
}
.wmde-markdown h6 {
font-size: 0.85em;
}
.wmde-markdown ol,
.wmde-markdown ul {
padding-left: 2em;
}
.wmde-markdown ol > p,
.wmde-markdown ul > p {
margin-bottom: 0;
}
.wmde-markdown ul {
margin-bottom: 16px;
margin-top: 0;
list-style: initial;
}
.wmde-markdown > blockquote,
.wmde-markdown > blockquote blockquote {
margin: 0;
border-left: 0.25em solid #dfe2e5;
color: #6a737d;
padding: 0 1em;
}
.wmde-markdown > blockquote > :last-child,
.wmde-markdown > blockquote blockquote > :last-child {
margin-bottom: 0;
}
.wmde-markdown > blockquote > :first-child,
.wmde-markdown > blockquote blockquote > :first-child {
margin-top: 0;
}
.wmde-markdown hr {
margin: 1.5em auto;
border: 0;
border-top: 2px dotted #eee;
height: 1px;
}
.wmde-markdown > table,
.wmde-markdown > blockquote table {
display: block;
overflow: auto;
width: 100%;
border-collapse: collapse;
border-spacing: 0;
font-size: 14px;
}
.wmde-markdown > table tr,
.wmde-markdown > blockquote table tr {
background-color: #fff;
border-top: 1px solid #c6cbd1;
}
.wmde-markdown > table td,
.wmde-markdown > blockquote table td,
.wmde-markdown > table th,
.wmde-markdown > blockquote table th {
border: 1px solid #dfe2e5;
padding: 6px 13px;
}
.wmde-markdown blockquote,
.wmde-markdown details,
.wmde-markdown dl,
.wmde-markdown ol,
.wmde-markdown p,
.wmde-markdown pre,
.wmde-markdown table,
.wmde-markdown ul {
margin-bottom: 16px;
margin-top: 0;
}
.wmde-markdown a {
color: #0366d6;
text-decoration: none;
}
.wmde-markdown a:hover {
text-decoration: underline;
}
.wmde-markdown .namespace {
opacity: 0.7;
}
.wmde-markdown .token.important {
font-weight: normal;
}
.wmde-markdown .token.bold {
font-weight: bold;
}
.wmde-markdown .token.italic {
font-style: italic;
}
.wmde-markdown .token.entity {
cursor: help;
}
.wmde-markdown kbd {
background-color: #fafbfc;
border-bottom-color: #d1d5da;
border: 1px solid #d1d5da;
border-radius: 3px;
box-shadow: inset 0 -1px 0 #d1d5da;
color: #56595d;
display: inline-block;
font-size: 10px;
font-family: ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace;
line-height: 10px;
padding: 2px 4px;
vertical-align: middle;
}
.wmde-markdown .token.tag .attr-value {
color: #032f62;
}
.wmde-markdown .token.property,
.wmde-markdown .token.tag,
.wmde-markdown .token.boolean,
.wmde-markdown .token.number,
.wmde-markdown .token.function-name,
.wmde-markdown .token.constant,
.wmde-markdown .token.symbol,
.wmde-markdown .token.deleted {
color: #0060c9;
}
.wmde-markdown .token.punctuation {
color: #a0a0a0;
}
.wmde-markdown code[class*="language-"] {
color: black;
}
.wmde-markdown code[class*="language-"] .token.selector,
.wmde-markdown code[class*="language-"] .token.attr-name,
.wmde-markdown code[class*="language-"] .token.string,
.wmde-markdown code[class*="language-"] .token.char,
.wmde-markdown code[class*="language-"] .token.function,
.wmde-markdown code[class*="language-"] .token.builtin {
color: #6f42c1;
}
.wmde-markdown code[class*="language-"] .token.inserted {
color: #22863a;
background-color: #f0fff4;
}
.wmde-markdown code[class*="language-"] .token.deleted {
color: #b31d28;
background-color: #ffeef0;
}
.wmde-markdown code[class*="language-"] .token.class-name {
color: #6f42c1;
}
.wmde-markdown code[class*="language-"] .code-block {
color: #032f62;
}
.wmde-markdown code[class*="language-"] .token.comment,
.wmde-markdown code[class*="language-"] .token.block-comment,
.wmde-markdown code[class*="language-"] .token.prolog,
.wmde-markdown code[class*="language-"] .token.doctype,
.wmde-markdown code[class*="language-"] .token.cdata {
color: #7D8B99;
}
.wmde-markdown code[class*="language-"] .token.punctuation {
color: #a0a0a0;
}
.wmde-markdown code[class*="language-"] .token.operator,
.wmde-markdown code[class*="language-"] .token.entity,
.wmde-markdown code[class*="language-"] .token.url,
.wmde-markdown code[class*="language-"] .token.variable {
color: #d73a49;
background: rgba(255, 255, 255, 0.5);
}
.wmde-markdown code[class*="language-"] .token.atrule,
.wmde-markdown code[class*="language-"] .token.attr-value {
color: #004698;
}
.wmde-markdown code[class*="language-"] .token.keyword {
color: #d63200;
}
.wmde-markdown code[class*="language-"] .token.regex,
.wmde-markdown code[class*="language-"] .token.important {
color: #e90;
}
.wmde-markdown code[class*="language-"] .token.string {
color: #0a53c1;
}</style>
    <style>body { background: red; }</style>
  </head>
  <body><div class="wmde-markdown"><a aria-label="View source on GitHub" target="__blank" class="github-corner" href="https://github.com/jaywcjlove/markdown-to-html-cli"><svg width="54" height="54" viewBox="0 0 250 250" aria-hidden="true" style="fill: rgb(32, 34, 37); color: rgb(255, 255, 255); position: fixed; z-index: 99999; border: 0px; top: 0px; right: 0px;"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path style="transform-origin: 130px 106px;" class="octo-arm" fill="currentColor" d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"></path><path class="octo-body" fill="currentColor" d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"></path></svg></a>
    <p>Hello World!</p>
  </div></body>
</html>
`;
  expect(create({ markdown: 'Hello World!', 'github-corners': 'https://github.com/jaywcjlove/markdown-to-html-cli', _: [] }, { document: { style: 'body { background: red; }' }})).toEqual(html);
});


it('github-corners options test case', async () => {
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>.task-list-item {
list-style-type: none
}
.task-list-item label {
font-weight: 400
}
.task-list-item.enabled label {
cursor: pointer
}
.task-list-item+.task-list-item {
margin-top: 3px
}
.task-list-item .handle {
display: none
}
.task-list-item-checkbox {
margin: 0 .2em .25em -1.6em;
vertical-align: middle
}
.wmde-markdown h1,.wmde-markdown h2,.wmde-markdown h3,.wmde-markdown h4,.wmde-markdown h5,.wmde-markdown h6 {
font-weight: 600;
line-height: 1.25;
margin-bottom: 16px;
margin-top: 24px
}
.wmde-markdown h1 .anchor,.wmde-markdown h2 .anchor,.wmde-markdown h3 .anchor,.wmde-markdown h4 .anchor,.wmde-markdown h5 .anchor,.wmde-markdown h6 .anchor {
float: left;
padding-right: 4px;
margin-left: -20px;
line-height: 1
}
.wmde-markdown h1 .octicon-link,.wmde-markdown h2 .octicon-link,.wmde-markdown h3 .octicon-link,.wmde-markdown h4 .octicon-link,.wmde-markdown h5 .octicon-link,.wmde-markdown h6 .octicon-link {
visibility: hidden;
vertical-align: middle
}
.wmde-markdown h1:hover .octicon-link,.wmde-markdown h2:hover .octicon-link,.wmde-markdown h3:hover .octicon-link,.wmde-markdown h4:hover .octicon-link,.wmde-markdown h5:hover .octicon-link,.wmde-markdown h6:hover .octicon-link {
visibility: visible
}
.github-corner:hover .octo-arm {
-webkit-animation: octocat-wave .56s ease-in-out;
animation: octocat-wave .56s ease-in-out
}
@-webkit-keyframes octocat-wave {
0%, to {
-webkit-transform: rotate(0);
transform: rotate(0);
}
20%, 60% {
-webkit-transform: rotate(-25deg);
transform: rotate(-25deg);
}
40%, 80% {
-webkit-transform: rotate(10deg);
transform: rotate(10deg);
}
}
@keyframes octocat-wave {
0%, to {
-webkit-transform: rotate(0);
transform: rotate(0)
}
20%, 60% {
-webkit-transform: rotate(-25deg);
transform: rotate(-25deg);
}
40%, 80% {
-webkit-transform: rotate(10deg);
transform: rotate(10deg);
}
}
.wmde-markdown {
font-size: 16px;
line-height: 1.5;
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
max-width: 1024px;
margin: 28px auto 60px auto;
}
.wmde-markdown > :first-child {
margin-top: 0 !important;
}
.wmde-markdown > :last-child {
margin-bottom: 0 !important;
}
.wmde-markdown code[class*="language-"],
.wmde-markdown pre[class*="language-"] {
color: black;
text-align: left;
white-space: pre;
word-spacing: normal;
word-break: normal;
word-wrap: normal;
-webkit-hyphens: none;
hyphens: none;
}
.wmde-markdown pre code {
background: none;
overflow-wrap: normal;
white-space: inherit;
-moz-tab-size: 2;
tab-size: 2;
padding: 16px;
font-size: 95%;
line-height: 1.5;
display: block;
text-shadow: 0 1px #fff;
}
.wmde-markdown pre {
margin-bottom: 18px;
font-size: 85%;
line-height: 1.45;
position: relative;
overflow-x: auto;
background-color: #f6f8fa;
border-radius: 3px;
}
.wmde-markdown code,
.wmde-markdown tt {
background-color: rgba(27, 31, 35, 0.05);
border-radius: 3px;
font-size: 85%;
margin: 0;
padding: 0.2em 0.4em;
}
.wmde-markdown pre,
.wmde-markdown code,
.wmde-markdown tt {
font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
}
.wmde-markdown img {
max-width: 100%;
}
.wmde-markdown input {
vertical-align: middle;
margin: 0 0.2em 0.25em -1.6em;
}
.wmde-markdown input + p {
display: inline;
}
.wmde-markdown h1,
.wmde-markdown h2 {
border-bottom: 1px solid #eaecef;
padding-bottom: 0.3em;
}
.wmde-markdown h1,
.wmde-markdown h2,
.wmde-markdown h3,
.wmde-markdown h4,
.wmde-markdown h5,
.wmde-markdown h6 {
font-weight: 600;
line-height: 1.25;
margin-bottom: 16px;
margin-top: 24px;
}
.wmde-markdown h1 .anchor,
.wmde-markdown h2 .anchor,
.wmde-markdown h3 .anchor,
.wmde-markdown h4 .anchor,
.wmde-markdown h5 .anchor,
.wmde-markdown h6 .anchor {
float: left;
padding-right: 4px;
margin-left: -20px;
line-height: 1;
}
.wmde-markdown h1 .octicon-link,
.wmde-markdown h2 .octicon-link,
.wmde-markdown h3 .octicon-link,
.wmde-markdown h4 .octicon-link,
.wmde-markdown h5 .octicon-link,
.wmde-markdown h6 .octicon-link {
visibility: hidden;
vertical-align: middle;
}
.wmde-markdown h1:hover .octicon-link,
.wmde-markdown h2:hover .octicon-link,
.wmde-markdown h3:hover .octicon-link,
.wmde-markdown h4:hover .octicon-link,
.wmde-markdown h5:hover .octicon-link,
.wmde-markdown h6:hover .octicon-link {
visibility: visible;
}
.wmde-markdown h1 {
font-size: 2em;
}
.wmde-markdown h2 {
font-size: 1.5em;
}
.wmde-markdown h3 {
font-size: 1.25em;
}
.wmde-markdown h4 {
font-size: 1em;
}
.wmde-markdown h5 {
font-size: 0.875em;
}
.wmde-markdown h6 {
font-size: 0.85em;
}
.wmde-markdown ol,
.wmde-markdown ul {
padding-left: 2em;
}
.wmde-markdown ol > p,
.wmde-markdown ul > p {
margin-bottom: 0;
}
.wmde-markdown ul {
margin-bottom: 16px;
margin-top: 0;
list-style: initial;
}
.wmde-markdown > blockquote,
.wmde-markdown > blockquote blockquote {
margin: 0;
border-left: 0.25em solid #dfe2e5;
color: #6a737d;
padding: 0 1em;
}
.wmde-markdown > blockquote > :last-child,
.wmde-markdown > blockquote blockquote > :last-child {
margin-bottom: 0;
}
.wmde-markdown > blockquote > :first-child,
.wmde-markdown > blockquote blockquote > :first-child {
margin-top: 0;
}
.wmde-markdown hr {
margin: 1.5em auto;
border: 0;
border-top: 2px dotted #eee;
height: 1px;
}
.wmde-markdown > table,
.wmde-markdown > blockquote table {
display: block;
overflow: auto;
width: 100%;
border-collapse: collapse;
border-spacing: 0;
font-size: 14px;
}
.wmde-markdown > table tr,
.wmde-markdown > blockquote table tr {
background-color: #fff;
border-top: 1px solid #c6cbd1;
}
.wmde-markdown > table td,
.wmde-markdown > blockquote table td,
.wmde-markdown > table th,
.wmde-markdown > blockquote table th {
border: 1px solid #dfe2e5;
padding: 6px 13px;
}
.wmde-markdown blockquote,
.wmde-markdown details,
.wmde-markdown dl,
.wmde-markdown ol,
.wmde-markdown p,
.wmde-markdown pre,
.wmde-markdown table,
.wmde-markdown ul {
margin-bottom: 16px;
margin-top: 0;
}
.wmde-markdown a {
color: #0366d6;
text-decoration: none;
}
.wmde-markdown a:hover {
text-decoration: underline;
}
.wmde-markdown .namespace {
opacity: 0.7;
}
.wmde-markdown .token.important {
font-weight: normal;
}
.wmde-markdown .token.bold {
font-weight: bold;
}
.wmde-markdown .token.italic {
font-style: italic;
}
.wmde-markdown .token.entity {
cursor: help;
}
.wmde-markdown kbd {
background-color: #fafbfc;
border-bottom-color: #d1d5da;
border: 1px solid #d1d5da;
border-radius: 3px;
box-shadow: inset 0 -1px 0 #d1d5da;
color: #56595d;
display: inline-block;
font-size: 10px;
font-family: ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace;
line-height: 10px;
padding: 2px 4px;
vertical-align: middle;
}
.wmde-markdown .token.tag .attr-value {
color: #032f62;
}
.wmde-markdown .token.property,
.wmde-markdown .token.tag,
.wmde-markdown .token.boolean,
.wmde-markdown .token.number,
.wmde-markdown .token.function-name,
.wmde-markdown .token.constant,
.wmde-markdown .token.symbol,
.wmde-markdown .token.deleted {
color: #0060c9;
}
.wmde-markdown .token.punctuation {
color: #a0a0a0;
}
.wmde-markdown code[class*="language-"] {
color: black;
}
.wmde-markdown code[class*="language-"] .token.selector,
.wmde-markdown code[class*="language-"] .token.attr-name,
.wmde-markdown code[class*="language-"] .token.string,
.wmde-markdown code[class*="language-"] .token.char,
.wmde-markdown code[class*="language-"] .token.function,
.wmde-markdown code[class*="language-"] .token.builtin {
color: #6f42c1;
}
.wmde-markdown code[class*="language-"] .token.inserted {
color: #22863a;
background-color: #f0fff4;
}
.wmde-markdown code[class*="language-"] .token.deleted {
color: #b31d28;
background-color: #ffeef0;
}
.wmde-markdown code[class*="language-"] .token.class-name {
color: #6f42c1;
}
.wmde-markdown code[class*="language-"] .code-block {
color: #032f62;
}
.wmde-markdown code[class*="language-"] .token.comment,
.wmde-markdown code[class*="language-"] .token.block-comment,
.wmde-markdown code[class*="language-"] .token.prolog,
.wmde-markdown code[class*="language-"] .token.doctype,
.wmde-markdown code[class*="language-"] .token.cdata {
color: #7D8B99;
}
.wmde-markdown code[class*="language-"] .token.punctuation {
color: #a0a0a0;
}
.wmde-markdown code[class*="language-"] .token.operator,
.wmde-markdown code[class*="language-"] .token.entity,
.wmde-markdown code[class*="language-"] .token.url,
.wmde-markdown code[class*="language-"] .token.variable {
color: #d73a49;
background: rgba(255, 255, 255, 0.5);
}
.wmde-markdown code[class*="language-"] .token.atrule,
.wmde-markdown code[class*="language-"] .token.attr-value {
color: #004698;
}
.wmde-markdown code[class*="language-"] .token.keyword {
color: #d63200;
}
.wmde-markdown code[class*="language-"] .token.regex,
.wmde-markdown code[class*="language-"] .token.important {
color: #e90;
}
.wmde-markdown code[class*="language-"] .token.string {
color: #0a53c1;
}</style>
    <style>body { background: red; }</style>
    <style>body { color: red; }</style>
  </head>
  <body><div class="wmde-markdown"><a aria-label="View source on GitHub" target="__blank" class="github-corner" href="https://github.com/jaywcjlove/markdown-to-html-cli"><svg width="54" height="54" viewBox="0 0 250 250" aria-hidden="true" style="fill: rgb(32, 34, 37); color: rgb(255, 255, 255); position: fixed; z-index: 99999; border: 0px; top: 0px; right: 0px;"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path style="transform-origin: 130px 106px;" class="octo-arm" fill="currentColor" d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"></path><path class="octo-body" fill="currentColor" d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"></path></svg></a>
    <p>Hello World!</p>
  </div></body>
</html>
`;
  expect(create({
    markdown: 'Hello World!', 'github-corners': 'https://github.com/jaywcjlove/markdown-to-html-cli', _: []
  }, {
    document: { style: ['body { background: red; }', 'body { color: red; }'] },
  })).toEqual(html);
});
