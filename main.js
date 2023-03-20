const inputNumber = document.querySelectorAll('.input__tip');
const invalidMessage = document.querySelectorAll('.invalid__message');
const tipTotalAmount = document.querySelectorAll('.tip-total__amount');
const radioBtnContainer = document.querySelectorAll('.select-tip__control');
const radioBtn = document.querySelectorAll('.select-tip__radio');

// Number.isFinite - to check the number

inputNumber.forEach((node, i) => {
  node.addEventListener('blur', (e) => {
    if (+e.target.value <= 0) {
      invalidMessage[i].style.display = 'block';
      node.style.border = '2px solid #ff8080';
      tipTotalAmount[i].textContent = '$0.00';
    } else {
      invalidMessage[i].style.display = 'none';
      node.style.border = 'none';
      tipTotalAmount[i].textContent = `$${e.target.value}`;
    }
  });
});

// NEED HELP
radioBtn.forEach((node, i) => {
  node.addEventListener('change', function (e) {
    if (e.target.checked) {
      radioBtnContainer[i].classList.add('selected-tip');
    } else {
      radioBtnContainer[i].classList.remove('selected-tip');
    }
  });
});
