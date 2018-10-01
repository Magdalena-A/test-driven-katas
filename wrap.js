const wrap = (line, maxLen) => {
  if(maxLen > line.length) {
    return line;
  } else {
    const lineBreak = " ";
    return line.replace(lineBreak, "/n")
  }
};

module.exports = wrap;
