import { Book } from "../entities/Book";

export interface IBooksRepository {
  create(book: Book): Promise<Book>;
  findByTitleAndAuthor(title: string, author: string): Promise<Book | null>;
  findById(id: string): Promise<Book | null>;
  delete(id: string): Promise<void>;
}
