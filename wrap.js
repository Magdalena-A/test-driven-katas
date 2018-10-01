
function wrap(line, maxLen) { 
  if (line.length <= maxLen) { 
    return line;
  }

  const indexOfBlank = line.lastIndexOf(' ', maxLen);
  let split;
  let offset;
  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else { 
    split = maxLen;
    offset = 0;
  }

  return line.substring(0, split) + '\n' + wrap(line.substring(split + offset), maxLen)
}
// const wrap = (line, maxLen) => {
//   let returnStr = '';

//   if (maxLen > line.length) {
//     return line;
//   } else {
//     const words = line.split(' '); // ['happy', 'monday']

//     let i = 0;
//     let newLine = '';

//     while (i < words.length) { 

//       if ((newLine += words[i]).length > maxLen) {
//         newLine += '\n';
//         returnStr += newLine;
//         newLine = '';
//       } else {
//         newLine += words[i] + ' ';
//         i++;
//       }

//     }
      
//     console.log(returnStr);
//     return returnStr;
//   }
// };

// console.log('test', wrap('Happy Monday', 7))

module.exports = wrap;
