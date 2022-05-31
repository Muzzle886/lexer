import * as data from './data'

function isNumber(n) {
  return n >= '0' && n <= '9'
}

function isChar(c) {
  return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
}

export function lexer(code) {
  let cur = 0
  let char = code[cur]
  let result = []
  let row = 1
  while (char !== undefined) {
    if (char === ' ' || char === '\t') {
      char = code[++cur]
    } else if (char == '\n') {
      char = code[++cur]
      row++
    } else if (isNumber(char)) {
      let str = char
      char = code[++cur]
      while (isNumber(char)) {
        str += char
        char = code[++cur]
      }
      result.push({
        row,
        type: '无符号整数',
        str,
      })
    } else if (isChar(char)) {
      let str = char
      char = code[++cur]
      while (isChar(char) || isNumber(char)) {
        str += char
        char = code[++cur]
      }
      result.push({
        row,
        type: data.keywords.indexOf(str) >= 0 ? '关键字' : '标识符',
        str,
      })
    } else if (char === ':') {
      let str = char
      char = code[++cur]
      let type
      if (char === '=') {
        str += char
        char = code[++cur]
        type = '双分界符'
      } else {
        type = '单分界符'
      }
      result.push({
        row,
        type,
        str,
      })
    } else if (data.singleCharacterDelimiter.indexOf(char) >= 0) {
      result.push({
        row,
        type: '单分界符',
        str: char,
      })
      char = code[++cur]
    } else if (char === data.wordCategory[5].word) {
      let str = char
      char = code[++cur]
      do {
        str += char
        char = code[++cur]
      } while (code[cur - 1] !== data.wordCategory[6].word)
      result.push({
        row,
        type: '注释',
        str,
      })
    } else if (char === '.') {
      let str = char
      char = code[++cur]
      let type
      if (char === '.') {
        str += char
        char = code[++cur]
        type = '数组下标界限符'
      } else {
        type = '程序结束'
      }
      result.push({
        row,
        type,
        str,
      })
    } else if (char === data.wordCategory[7].word) {
      let str = char
      char = code[++cur]
      do {
        str += char
        char = code[++cur]
      } while (code[cur - 1] !== data.wordCategory[7].word)
      result.push({
        row,
        type: '字符串',
        str,
      })
    } else {
      result.push({
        row,
        type: 'error',
        str: char,
      })
      char = code[++cur]
    }
  }
  return result
}
