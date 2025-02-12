function understandingStr(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === " " ||
      str[i] === "." ||
      str[i] === "," ||
      str[i] === "!" ||
      str[i] === "?" ||
      str[i] === ";" ||
      str[i] === ":"
    ) {
      newStr += "...";
      break;
    } else newStr += str[i];
  }
  return newStr;
}
console.log(understandingStr("Сероб Серобян Давидович"));
