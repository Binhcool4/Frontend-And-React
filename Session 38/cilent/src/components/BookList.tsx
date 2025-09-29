import type { Book } from './types';
import BookItem from './BookItem';

interface Props {
  books: Book[];
  onEdit: (b: Book) => void;
  onDelete: (id: number) => void;
}

function BookList({ books, onEdit, onDelete }: Props) {
  if (books.length === 0) {
    return <div className="text-center text-gray-500 py-8">No books found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map((b) => (
        <BookItem key={b.id} book={b} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;
