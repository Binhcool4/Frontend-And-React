class Book {
    private id: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getInfo(): string {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}, Năm XB: ${this.year}`;
    }

    updateInfo(title: string, author: string, year: number): void {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    viewBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện đang trống");
            return;
        }
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }

    updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor, newYear);
            console.log(`Đã cập nhật sách có ID ${id}`);
        } else {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }

    deleteBookById(id: number): void {
        const initialLength = this.books.length;
        this.books = this.books.filter(b => b.getId() !== id);

        if (this.books.length < initialLength) {
            console.log(`Đã xóa sách có ID ${id}`);
        } else {
            console.log(`Không tìm thấy sách có ID ${id} để xóa`);
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
const book1 = new Book(1, "Sách l", "Tác giả l", 1941);
const book2 = new Book(2, "Sách n", "Tác giả n", 1943);
const book3 = new Book(3, "Sách m", "Tác giả m", 1939);
const book4 = new Book(4, "Sách o", "Tác giả o", 1983);
const book5 = new Book(5, "Sách p", "Tác giả p", 1988);
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
myLibrary.viewBooks();
myLibrary.updateBookById(3, "Sách q", "Tác giả q", 2024);
myLibrary.deleteBookById(2);
myLibrary.viewBooks();