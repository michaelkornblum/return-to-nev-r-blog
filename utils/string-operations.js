exports.pascalize = (string) =>
    string.replace(/^[a-z]|\s[a-z]/g, (match) => match.trim().toUpperCase());
