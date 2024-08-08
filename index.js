const form = document.querySelector('.spl__form')



const handleSubmit = (e) => {
  e.preventDefault();

  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  console.log(data);
  
}


form.addEventListener('change', handleSubmit)