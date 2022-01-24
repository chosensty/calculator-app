let number_1_variable = null
let number_2_variable = null
let clear_boolean = true
let current_operator = ''



//the clear parameter is a indication of whether the value should concatenate or not.
// function displayNumber(output, clear_param) {
//   if (document.getElementById('output').innerHTML === '0') return;
//   return document.getElementById('output').innerHTML = (document.getElementById('output').innerHTML + output).substring(0, 15)
// }

function consoleLog() {
  console.log(`number 1 variable: ${number_1_variable}`)
  console.log(`number 2 variable: ${number_2_variable}`)
  console.log(`current operator variable: ${current_operator}`)
}

function numClicked(number) {
  let content = document.getElementById('output').innerHTML
  if (number === '.' && (content.includes('.'))) return;
  if (clear_boolean || content === '0') {
    document.getElementById('output').innerHTML = number
    return clear_boolean = false
  }
  return document.getElementById('output').innerHTML = content.substring(0, 14) + number
}

function removeNum() {
  let content = document.getElementById('output').innerHTML
  if(content.length < 2) return reset()
  return document.getElementById('output').innerHTML = content.substring(0, content.length-1)
}

function calculator(n1, n2, operator) {
  num1 = parseFloat(n1)
  num2 = parseFloat(n2)
  if (operator === '+') {
    answer = num1 + num2
  } else if (operator === '*') {
    answer =  num1 * num2
  } else if (operator === '/') {
    if(num2 != 0) answer = num1/ num2
  } else if (operator === '-'){
    answer = num1 - num2
  }else {
    answer = num1
  }
  return answer
}



function answerFunction() {
  try {
  if(number_1_variable === null) return;
  if (number_2_variable === null) number_2_variable = document.getElementById('output').innerHTML
  number_1_variable = calculator(number_1_variable, number_2_variable, current_operator)
  document.getElementById('output').innerHTML = number_1_variable
  consoleLog()
  } catch(err) {
  console.error('answer error: '+err)
  }
}

function operation(symbol) {
  if (number_1_variable !== null) {
    number_1_variable = calculator(number_1_variable, document.getElementById('output').innerHTML, current_operator)
    document.getElementById('output').innerHTML = number_1_variable
  }
  number_1_variable = document.getElementById('output').innerHTML
  current_operator = symbol
  clear_boolean = true
  consoleLog()
}

function reset() {
  number_1_variable = null
  current_operator = ''
  document.getElementById('output').innerHTML = '0'
  consoleLog()
}
