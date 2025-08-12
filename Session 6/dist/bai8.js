"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book1 {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member1 {
    id;
    name;
    contact;
    lendedBooks;
    status;
    constructor(id, name, contact, lendedBooks, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = lendedBooks;
        this.status = status;
    }
}
class LendedBook1 {
    memberId;
    bookId;
    dueDate;
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library1 {
    books;
    members;
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title}`);
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        if (this.books.length === 0) {
            console.log("Không có sách nào.");
            return;
        }
        this.books.forEach(b => {
            console.log(`ID: ${b.id} - Tiêu đề: ${b.title} - Tác giả: ${b.author} - SL: ${b.stock} - Trạng thái: ${b.status}`);
        });
    }
}
const library1 = new Library1();
const book1 = new Book1(1, "Sách a", "Tác giả a", 5, "Available");
const book2 = new Book1(2, "Sách b", "tác giả b", 3, "Available");
const book3 = new Book1(3, "Sách c", "tác giả c", 2, "Borrowed");
library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);
library1.showBooks();
