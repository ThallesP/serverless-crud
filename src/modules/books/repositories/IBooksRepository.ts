import { Book } from "../entities/Book";

export interface IBooksRepository {
  create(book: Book): Promise<Book>;
  findByTitleAndAuthor(title: string, author: string): Promise<Book | null>;
  findById(id: string): Promise<Book | null>;
  delete(book: Book): Promise<void>;
  update(book: Book): Promise<Book>;
}
