// let ul = document.querySelector('#book-list')

// function fetchBooks() {
//   fetch('https://anapioficeandfire.com/api/books')
//   .then(function(whateverYouWant){
//     return whateverYouWant.json()
//   })
//   .then(function(justAnArgument){
//     console.log(justAnArgument)
//     justAnArgument.forEach(function(item){
//       ul.innerHTML += `<li>${item.name}</li>`
//     })
//   })
// }

function fetchBooks(){
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
