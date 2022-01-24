// keeping a list of all the operations and numbers
let current_operation = ''
let number_variable = 0

// if this is variable is true, the last number will be operated on by the operation.
let operation_bool = false


//current index of numbers
let currentIndex = 0

function displayNumber(output) {
  document.getElementById('output').innerHTML = output.substring(0, 15)
}

function numClicked(number) {
  contents = document.getElementById('output').innerHTML
  if (contents === '0') {
    content = number
  } else {
    content += number
  }
return displayNumber(content)
}

function removeNum() {
  let contents = document.getElementById('output').innerHTML
  if (contents.length > 1) {
    contents = content.substring(0, contents.length-1)
  } else {
    contents = '0'
  }
  displayNumber(contents)
}

function calculator(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2
  } else if (operator === '*') {
    return num1 * num2
  } else if (operator === '/') {
    return num1/ num2
  } else if (operator === '-') {
    return num1 - num2
  }
}

function operation(symbol) {
  if (current_operation !== '' && operation_bool === true) {
    contents = document.getElementById('output').innerHTML
    number_variable  = calculator(number_variable, parseInt(contents), current_operation)
  }


  current_operation = symbol
  number_variable = document.getElementById('output').innerHTML

}

function reset() {
  numbers = []
  operation = ''
  currentIndex = 0
  displayNumber('0')
}

function answer() {

}
