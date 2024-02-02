const maskedInputs = document.querySelectorAll('[data-mask]')

maskedInputs.forEach((input) => {
  new IMask(input, {mask: input.getAttribute('data-mask')})
})

const maskOptions = {
  mask: '+{7}(000)000-00-00'
}
