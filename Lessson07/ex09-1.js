const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const list = document.getElementById('list')


addButton.addEventListener('click', () => {
  const newList = document.createElement('li')
  const index = list.childElementCount + 1
  newList.textContent = "アイテム" + index
  list.appendChild(newList)

})

removeButton.addEventListener('click', () => {
  const index = list.childElementCount
  if(index >= 1){
    list.removeChild(list.lastChild)
  } else {
    return
  }
})
