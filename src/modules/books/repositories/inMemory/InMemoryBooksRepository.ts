import { Book } from "../../entities/Book";
import { IBooksRepository } from "../IBooksRepository";

export class InMemoryBooksRepository implements IBooksRepository {
  private books = [];

  async create(book: Book): Promise<Book> {
    this.books.push(book);

    return book;
  }
}
