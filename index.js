// the two number variables.
let number_1_variable = null
let number_2_variable = null
// whether the calculator should clear when the next input is given
let clear_boolean = true

// next operation to be perfomed
let current_operator = ''

let decimalPlaces = 5

//
function toDisplay(value, concatenate) {
  content = document.getElementById('output').innerHTML
  if(content.includes('.')) {
    content = content.substring(0, content.indexOf('.')+decimalPlaces)
  }
  if (concatenate) {
    return document.getElementById('output').innerHTML = content.substring(0, 14) + value
  }
  val = String(value)
  return document.getElementById('output').innerHTML = val.substring(0, 15)
}


function numClicked(number) {
  let content = document.getElementById('output').innerHTML
  // making sure there aren't multiple decimal places.
  if (number === '.' && (content.includes('.'))) return;
  // if the calculator must be cleared, or if the value on it is 0 this happens.
  if (clear_boolean || content === '0') {
    document.getElementById('output').innerHTML = number
    return clear_boolean = false
  }
  // concatenating if it must..
  return toDisplay(number, true)
}

function removeNum() {
  // when the 'del' button is pressed.
  let content = document.getElementById('output').innerHTML
  if(content.length < 2) return reset()
  return document.getElementById('output').innerHTML = content.substring(0, content.length-1)
}

function calculator(n1, n2, operator) {
  // a function which calculates the answer to an arithmetical operation.
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
  }
  return answer
}



function answerFunction() {
  try {
  if(number_1_variable !== null && current_operator !== '') {
    if (number_2_variable === null) number_2_variable = document.getElementById('output').innerHTML
    // if something is stored in the number 1 variable, the condition fires.
    number_1_variable = calculator (number_1_variable, number_2_variable,current_operator)
    toDisplay(number_1_variable, false)
  }
  clear_boolean = true
  } catch(err) {
  console.error('answer error: '+err)
  }
}

function operation(symbol) {
  // in some cases, someone may press a symbol two times in a row, two prevent this this line of code was made.
  try {
  if(clear_boolean) {
    number_1_variable = document.getElementById('output').innerHTML
    number_2_variable = null
    current_operator = symbol
    return clear_boolean = true
  }

  // if there was a previous input, then the answer is calculated and put on the calculator
  if (number_1_variable !== null && current_operator !== '') {
    number_1_variable = calculator(number_1_variable, document.getElementById('output').innerHTML, current_operator)
    toDisplay(number_1_variable, false)
  }

  // giving each variable their values.
  number_1_variable = document.getElementById('output').innerHTML
  number_2_variable = null
  current_operator = symbol
  clear_boolean = true
} catch(err) {
  console.error('operation error: '+err)
}
}

function reset() {
  // when the reset button is clicked.
  number_1_variable = null
  number_2_variable = null
  current_operator = ''
  clear_boolean = false
  toDisplay('0', false)
}
