module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let matching = {
    "[": "]",
    "(": ")",
    "{": "}",
    "|" : "|"
  }

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[" || str[i] === "|") {

      if (str[i] === "|" && count === 0) {
        stack.push(str[i]);
        count++;
      }

      if (str[i] === "|" && count > 0) {
        check = stack.pop();

        if (str[i] !== "|") {
          return false;
        }
        count = count - 1;
      }
      if (str[i] !== "|")
        stack.push(str[i]);
    }

    else {
      check_last_char = stack.pop();

      if (str[i] !== matching[check_last_char]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}
