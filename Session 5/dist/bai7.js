"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }
    updateInfo(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(`Đã cập nhật sách có ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }
}
const book1 = new Book(1, "Sách a", "Tác giả a");
const book2 = new Book(2, "Sách b", "Tác giả b");
const book3 = new Book(3, "Sách c", "Tác giả c");
const book4 = new Book(4, "Sách d", "Tác giả d");
const book5 = new Book(5, "Sách e", "Tác giả e");
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
myLibrary.updateBookById(3, "Sách f", "Tác giả f");
myLibrary.viewBooks();
