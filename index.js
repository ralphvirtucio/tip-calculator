const form = document.querySelector('form');
const formControl = document.querySelectorAll('.form__control')
const customInput = document.querySelector('#custom__input')
const customLabel = document.querySelector('.custom-input__container')
const customRadioBtn = document.querySelector('.custom-radio') 
const amount = document.querySelector('#amount')
const total = document.querySelector('#total')




const renderError = (name) => {
  const formControl = document.querySelector('.' + name)
  const errorMessage = formControl.querySelector('#error');
  const inputContainer = formControl.querySelector('.input__control')

  errorMessage.style.display = 'block';
  inputContainer.classList.add('invalid')
}

const clearError = (name) => {
  const formControl = document.querySelector('.' + name)
  const errorMessage = formControl.querySelector('#error');
  const inputContainer = formControl.querySelector('.input__control')

  errorMessage.style.display = 'none';
  inputContainer.classList.remove('invalid')
}

const checkInputValidity = (name, value) => {
  if(value === '0' || value === '') {
    renderError(name)
  } else {
    clearError(name)
  }
}

const handleInputBlur = (e) => {
  const {value, name} = e.target

  if(name === 'bill') {
    checkInputValidity(name, value)
  } else if (name === 'quantity') {
    checkInputValidity(name, value)
  }
}

const handleInputChange = (e) => {
  const {value, name} = e.target

  if(name === 'bill') {
    checkInputValidity(name, value)
  } else if (name === 'quantity') {
    checkInputValidity(name, value)
  }
}

const handleFormChange = (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form))

  console.log(data)
  
}

const handleCustomClick = () => {
  customRadioBtn.checked = true 
}


formControl.forEach(node => {
  const input = node.querySelector('input')

  input.addEventListener('blur', handleInputBlur)
})


customLabel.addEventListener('click', handleCustomClick)
form.addEventListener('change', handleFormChange)