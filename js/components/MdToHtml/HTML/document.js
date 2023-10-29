"use strict";

// const Element = require("./Element.js");
// const Text = require("./Text.js");

import { Text } from "./Text.js";
import { Element } from "./Element.js";

export const document = {
  createElement: (tagName) => new Element(tagName),
  createTextNode: (text) => new Text(text),
};
/**
 * module.exports = document;
 */
