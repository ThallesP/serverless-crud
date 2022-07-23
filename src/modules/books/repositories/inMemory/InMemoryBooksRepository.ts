import { Book } from "../../entities/Book";
import { IBooksRepository } from "../IBooksRepository";

export class InMemoryBooksRepository implements IBooksRepository {
  private books: Book[] = [];

  async findById(id: string): Promise<Book | null> {
    const book = this.books.find((book) => book.id === id);

    if (!book) return null;

    return book;
  }

  async findByTitleAndAuthor(
    title: string,
    author: string
  ): Promise<Book | null> {
    const book = this.books.find(
      (book) => book.title === title && book.author === author
    );

    if (!book) return null;

    return book;
  }

  async create(book: Book): Promise<Book> {
    this.books.push(book);

    return book;
  }
}
