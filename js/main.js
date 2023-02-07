let btnSubmit = document.querySelector('.btn');
let inputsForms = document.querySelectorAll('.inputs-form');

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  inputsForms.forEach(el => {

    if(el.value === '') {
      el.classList.add('active')
    }

    else {
      el.classList.remove('active')
    }
  })
})

inputsForms.forEach(el => {
  el.addEventListener('keyup', (event)=>{
    if(el.value === '') {
      el.classList.add('active')
    }

    else {
      el.classList.remove('active')
    }
  })
})