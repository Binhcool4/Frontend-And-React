class Book1 {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    getInfo(): string {
        return `Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }
}

class Library1 {
    private books: Book1[] = [];

    addBook(book: Book1): void {
        this.books.push(book);
    }

    viewBooks(): void {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
}
const book1 = new Book1("Sách 1", "Tác giả 1");
const book2 = new Book1("Sách 2", "Tác giả 2");
const book3 = new Book1("Sách 3", "Tác giả 3");
const book4 = new Book1("Sách 4", "Tác giả 4");
const book5 = new Book1("Sách 5", "Tác giả 5");

const myLibrary1 = new Library1();
myLibrary1.addBook(book1);
myLibrary1.addBook(book2);
myLibrary1.addBook(book3);
myLibrary1.addBook(book4);
myLibrary1.addBook(book5);
myLibrary1.viewBooks();