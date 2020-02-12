const el = document.querySelector('form')
const checkError = input => {
  if(input !== null && input.includes('@')){
    alert('제출이 완료 되었습니다.')
  } else {
    alert('올바른 이메일 양식이 아닙니다. 다시 입력해 주세요.')
  }
}

el.addEventListener('submit', e => {
  e.preventDefault()
  const email = e.target.elements.email.value
  return checkError(email)
})
