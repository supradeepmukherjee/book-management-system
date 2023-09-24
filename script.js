// To do:
// 1. Store all the data to the Local Storage
// 2. Make another column giving an option to the user to delete the book
// 3. Add a scroll  to the view

// Using OOP in this program or else it might have become more cluttered

// constructor
function Book(name_, author, type) {
    this.author = author
    this.name_ = name_
    this.type = type
}

// display constructor
function Display() { }

// add methods to display prototype
Display.prototype.add = function (book) {
    tablebody = document.getElementById('tableBody')
    let uiString = `
    <tr>
        <td>${book.name_}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>
    `
    tablebody.innerHTML += uiString
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform')
    libraryform.reset()
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name_.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true
    }
}

Display.prototype.show = function (type, message) {
    let msg = document.getElementById('msg')
    msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message: </strong>${message}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                     </div>`
    setTimeout(function () {
        msg.innerHTML = ''
        console.log('working')
    }, 5000);
}

// add submit event listener to libraryform
let libraryform = document.getElementById('libraryform')
libraryform.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) {
    let name_ = document.getElementById('bookname').value
    let author = document.getElementById('author').value

    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')
    let type;

    if (fiction.checked) {
        type = fiction.value
    }
    else if (programming.checked) {
        type = programming.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }
    let book = new Book(name_, author, type)
    let display = new Display()
    if (display.validate(book)) {
        display.add(book)
        display.clear()
        display.show('Success', 'Your book has been succesfully added')
    }
    else {
        // Show error to the user
        display.show('Danger', 'Sorry you cannot add this book')
    }
    e.preventDefault()
}