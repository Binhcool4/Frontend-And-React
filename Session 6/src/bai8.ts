class Book1 {
    id: number;
    title: string;
    author: string;
    stock: number;
    status: string;

    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member1 {
    id: number;
    name: string;
    contact: string;
    lendedBooks: LendedBook1[];
    status: string;

    constructor(id: number, name: string, contact: string, lendedBooks: LendedBook1[], status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = lendedBooks;
        this.status = status;
    }
}
class LendedBook1 {
    memberId: number;
    bookId: number;
    dueDate: Date;

    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Library1 {
    books: Book1[];
    members: Member1[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book: Book1): void {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title}`);
    }

    showBooks(): void {
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