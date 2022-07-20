import { Book } from "../../entities/Book";
import { IBooksRepository } from "../IBooksRepository";

export class OneTableBooksRepository implements IBooksRepository {
  async create(book: Book): Promise<Book> {
    throw new Error("Method not implemented.");
  }
}
