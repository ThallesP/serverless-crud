import { Book } from "../entities/Book";

export interface IBooksRepository {
  create(book: Book): Promise<Book>;
}
