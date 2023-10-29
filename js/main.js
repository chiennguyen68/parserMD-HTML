import { HtmlToMarkDownServices } from "./components/HtmlToMd/HtmlToMd.js";
// const {parser} = require("./components/MdToHtml/markdown.js");
import * as markdown from "./components/MdToHtml/markdown.js";
// const parser = require('@deskeen/markdown')

let turndownService = new HtmlToMarkDownServices();
let textEditor = document.getElementById("tool-editor");
let formatValue;
let textRender = document.getElementById("text-render");
let save = document.getElementById("editor-button-save");

textEditor.addEventListener("keyup", (event) => {
  formatValue = event.target.value;
  formattingMD(formatValue);
});

function formattingMD(formatValue) {
  formatValue = turndownService.turndown(formatValue);
  textRender.textContent = formatValue;
  save.addEventListener("click", () => {
    localStorage.setItem("mdValue", formatValue);
  });
}
console.log(localStorage.getItem("mdValue"));
if (localStorage.getItem("mdValue")) {
  let test = localStorage.getItem("mdValue");
  const htmlCode = markdown.parse(test).innerHTML;
  console.log(htmlCode);
}

// console.log(markdown);
