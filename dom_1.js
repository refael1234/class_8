function createNameDiv(firstName, lastName) {
  const nameDiv = document.createElement('div')

  // פיסקה ראשונה
  const firstNamePara = document.createElement('p')
  firstNamePara.textContent = firstName
  firstNamePara.style.color = 'red'
  firstNamePara.style.textDecoration = 'underline'

  // פיסקה שניה
  const lastNamePara = document.createElement('p')
  lastNamePara.textContent = lastName
  lastNamePara.style.fontSize = '50px'
  lastNamePara.style.border = '1px solid black'

  // הוספת הפסקה לDIV
  nameDiv.appendChild(firstNamePara)
  nameDiv.appendChild(lastNamePara)

  // הוספת הDIV לBODY
  document.body.appendChild(nameDiv)
}
createNameDiv('Refael', 'Harel')



