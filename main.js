const inputNumber = document.querySelectorAll('.input__tip');
const invalidMessage = document.querySelectorAll('.invalid__message');
const tipTotalAmount = document.querySelectorAll('.tip-total__amount');
const radioBtnContainer = document.querySelectorAll('.select-tip__control');
const radioBtn = document.querySelectorAll('.select-tip__radio');

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

radioBtn.forEach((node, i) => {
  node.addEventListener('click', (e) => {
    if (e.target.checked) {
      radioBtnContainer[i].style.backgroundColor = '#ABEEE6';
      radioBtnContainer[i].children[0].style.color = 'hsl(183, 100%, 15%)';
    }
  });
});
