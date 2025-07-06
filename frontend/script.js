let books = [];
let issuedBooks = [];

function updateDisplay() {
  const availableList = document.getElementById("availableBooks");
  const issuedList = document.getElementById("issuedBooks");

  availableList.innerHTML = '';
  issuedList.innerHTML = '';

  books.forEach(book => {
    let li = document.createElement("li");
    li.textContent = book;
    availableList.appendChild(li);
  });

  issuedBooks.forEach(book => {
    let li = document.createElement("li");
    li.textContent = book;
    issuedList.appendChild(li);
  });
}

function getBookName() {
  const input = document.getElementById("bookInput");
  const name = input.value.trim();
  input.value = "";
  return name;
}

function addBook() {
  const bookName = getBookName();
  if (bookName && !books.includes(bookName)) {
    books.push(bookName);
    updateDisplay();
  } else {
    alert("Book already exists or name is empty!");
  }
}

function issueBook() {
  const bookName = getBookName();
  const index = books.indexOf(bookName);
  if (index !== -1) {
    books.splice(index, 1);
    issuedBooks.push(bookName);
    updateDisplay();
  } else {
    alert("Book not available to issue.");
  }
}

function returnBook() {
  const bookName = getBookName();
  const index = issuedBooks.indexOf(bookName);
  if (index !== -1) {
    issuedBooks.splice(index, 1);
    books.push(bookName);
    updateDisplay();
  } else {
    alert("Book was not issued.");
  }
}
