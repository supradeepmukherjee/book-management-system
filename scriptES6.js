class Book {
    constructor(name_, author, type) {
        this.name_ = name_
        this.author = author
        this.type = type
        this.n = 1
    }
}

class Display {
    add(book) {
        let tablebody = document.getElementById('tableBody')
        let uiString = `
        <tr>
            <td>${book.name_}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
        </tr>
        `
        tablebody.innerHTML += uiString
    }

    clear() {
        let libraryform = document.getElementById('libraryform')
        libraryform.reset()
    }

    validate(book) {
        if (book.name_.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true
        }
    }

    show(type, message) {
        let msg = document.getElementById('msg')
        let boldText;
        if (type == 'Success') {
            boldText = 'Success'
        }
        else {
            boldText = 'Error'
        }
        msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldText} </strong>${message}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                         </div>`
        setTimeout(function () {
            msg.innerHTML = ''
            console.log('working')
        }, 5000);
    }
}

let libraryform = document.getElementById('libraryform')

libraryform.addEventListener('submit', (e) => {
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
})