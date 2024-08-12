
// Initialize all element needed
const form = document.querySelector('form');
const formControl = document.querySelectorAll('.form__control')
const customInput = document.querySelector('#custom__input')
const customLabel = document.querySelector('.custom-input__container')
const customRadioBtn = document.querySelector('.custom-radio') 
const amount = document.querySelector('#amount')
const total = document.querySelector('#total')
const resetBtn = document.querySelector('[type=reset]')


// Render Error State
const renderError = (name) => {
  const formControl = document.querySelector('.' + name)
  const errorMessage = formControl.querySelector('#error__' + name);
  const inputContainer = formControl.querySelector('.input__control')

  errorMessage.style.display = 'block';
  inputContainer.classList.add('invalid')
}

// Clear Error State
const clearError = (name) => {
  const formControl = document.querySelector('.' + name)
  const errorMessage = formControl.querySelector('#error__' + name);

  const inputContainer = formControl.querySelector('.input__control')

  errorMessage.style.display = 'none';
  inputContainer.classList.remove('invalid')
}

const resetState = () => {

}

// Check Input Validity
const checkInputValidity = (name, value) => {
  if(value === '0' || value === '') {
    renderError(name)
  } else {
    clearError(name)
  }
}

// Handle blur event / Check if the input is empty
const handleInputBlur = (e) => {
  const {value, name} = e.target

  if(name === 'bill') {
    checkInputValidity(name, value)
  } else if (name === 'quantity') {
    checkInputValidity(name, value)
  }
}

// Handle change event / Check if the user type zero
const handleInputChange = (e) => {
  const {value, name} = e.target

  if(name === 'bill') {
    checkInputValidity(name, value)
  } else if (name === 'quantity') {
    checkInputValidity(name, value)
  }
}

// Handle the change in within the form
const handleFormChange = (e) => {
  e.preventDefault();

  const formElement = e.currentTarget;

  const data = Object.fromEntries(new FormData(form))

  // Initialize all input element within the form
  const inputs = formElement.querySelectorAll('input')

  // Destructuring Form Data
  const { bill, percentage, quantity } = data

  // Check if custom input has any data
  let selectedTip = data[percentage] ? Number(data[percentage]) : percentage

  // Check if any of the input fields has data
  const isFormFilledOut = bill || percentage || quantity

  // console.log(isInputHasData)
 
  // Calculation of tip percentage
  const tipPercentage = selectedTip / 100;
  
  // Check if tip percentage is Nan and quantity is not empty
  // TO avoid dividing with zero and empty string
  if(!isNaN(tipPercentage) && quantity !== '') {

    // Calculation of tip amount and tip total
    const tip = Number(bill) * Number(tipPercentage)
    const totalValue = Number(bill) + Number(tip);

    const tipPerPerson = tip / quantity

    const totalPerPerson = totalValue / quantity

    // Render the calculated tip
    amount.textContent = "$" + tipPerPerson.toFixed(2)
    total.textContent = "$" + totalPerPerson.toFixed(2)
  }
  
  // Set disabled attributes if some of the fields has data
  if(isFormFilledOut) {
    resetBtn.removeAttribute('disabled')

    // Reset the form
    resetBtn.addEventListener('click', () => resetForm(inputs))
  } else {
    resetBtn.setAttribute('disabled', true)
  }

}

// Handle the custom click by initializing a click event in the label
const handleCustomClick = () => {
  customRadioBtn.checked = true 
}

// Set form to empty state
const resetForm = (nodes) => {
    nodes.forEach(node => {
      // Check the node/input type, To avoid resetting the value of radio buttons
      if(node.type !== 'radio') {
        node.value = ''
      } else {
        node.checked = ''
      }
    })

  
  resetBtn.setAttribute('disabled', true)
  clearError('bill')
  clearError('quantity')

  amount.textContent = "$0.00";
  total.textContent = "$0.00";
} 

// Add blur and change event listener to input fields
formControl.forEach(node => {
  const input = node.querySelector('input')

  input.addEventListener('blur', handleInputBlur)
  input.addEventListener('change', handleInputChange)
})


// Event Listeners
customLabel.addEventListener('click', handleCustomClick)
form.addEventListener('input', handleFormChange)