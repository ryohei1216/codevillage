const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const ul = document.getElementById('list')


addButton.addEventListener('click', () => {
  // <li></li>追加
  const newList = document.createElement('li')

  // <img>作成して<li>に追加
  const newImg = document.createElement('img')
  newImg.setAttribute('src', 'http://placehold.it/64x64')
  newList.appendChild(newImg)

  // <span>作成して<li>に追加
  const newSpan = document.createElement('span')
  const index = ul.childElementCount + 1
  newSpan.textContent = "アイテム" + index
  newList.appendChild(newSpan)

  // <li>
  //   <img>
  //   <span></span>
  //  </li>
  // を<ul>に追加
  ul.appendChild(newList)

})

removeButton.addEventListener('click', () => {
  const index = list.childElementCount
  if(index >= 1){
    list.removeChild(list.lastChild)
  } else {
    return
  }
})