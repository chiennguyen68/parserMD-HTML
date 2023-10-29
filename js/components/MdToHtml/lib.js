"use strict";

export const parseBoolean = (value, defaultValue) =>
  typeof value === "boolean" ? value : defaultValue;

export const parseMaxHeader = (value, defaultValue) => {
  if (Number.isInteger(value) && value >= 1 && value <= 6) {
    return value;
  }

  return defaultValue;
};

// module.exports.parseBoolean = parseBoolean
// module.exports.parseMaxHeader = parseMaxHeader
