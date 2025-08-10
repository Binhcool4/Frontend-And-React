class Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getInfo(): string {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }

    updateInfo(title: string, author: string): void {
        this.title = title;
        this.author = author;
    }
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    viewBooks(): void {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }

    updateBookById(id: number, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(`Đã cập nhật sách có ID ${id}`);
        } else {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }

    searchBooksByTitle(keyword: string): void {
        const foundBooks = this.books.filter(b =>
            b.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );

        if (foundBooks.length > 0) {
            console.log(`Kết quả tìm kiếm với từ khóa "${keyword}":`);
            foundBooks.forEach(book => console.log(book.getInfo()));
        } else {
            console.log(`Không tìm thấy sách nào với từ khóa "${keyword}"`);
        }
    }
}
const book1 = new Book(1, "Sách g", "Tác giả g");
const book2 = new Book(2, "Sách h", "Tác giả h");
const book3 = new Book(3, "Sách i", "Tác giả i");
const book4 = new Book(4, "Sách j", "Tác giả j");
const book5 = new Book(5, "Sách k", "Tác giả k");
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
myLibrary.searchBooksByTitle("g");
myLibrary.searchBooksByTitle("k");