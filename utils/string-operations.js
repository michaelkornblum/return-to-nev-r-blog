exports.capitalize = (string) =>
    string.replace(/^[a-z]|\s[a-z]/g, (match) => match.toUpperCase());

exports.camelCase = (string) =>
    string.replace(/\s[a-z]/g, (match) => match.toUpperCase());

exports.pascalCase = (string) =>
    string.replace(/^[a-z]|\s[a-z]/g, (match) => match.trim().toUpperCase());
