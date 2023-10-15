let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let libraryElement = document.querySelector("#library");
  libraryElement.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.setAttribute("class", "book-card");
    bookElement.innerHTML = `

    <div class="card-header">
    <h3 class="title">${book.title}</h3>
    <p class="author">${book.author}</p>
    </div>
    <div class="card-body">
    <p>${book.pages} pages</p>
    <p>${book.read ? "Read" : "Not read"}</p>
    <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
    `;
    libraryElement.appendChild(bookElement);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
  document.querySelector("#new-book-form").reset();
}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });
