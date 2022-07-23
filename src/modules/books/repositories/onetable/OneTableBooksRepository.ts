import { Entity, Model } from "dynamodb-onetable";
import { ONETABLE } from "src/shared/infra/onetable";
import { ONETABLE_SCHEMA } from "src/shared/infra/onetable/schema";
import { Book } from "../../entities/Book";
import { IBooksRepository } from "../IBooksRepository";

export class OneTableBooksRepository implements IBooksRepository {
  private bookModel: Model<Entity<typeof ONETABLE_SCHEMA.models.Book>>;

  constructor() {
    this.bookModel = ONETABLE.getModel("Book");
  }

  async findById(id: string): Promise<Book | null> {
    const book = await this.bookModel.get({ pk: `book:${id}` });

    if (!book) return null;

    return book;
  }

  async findByTitleAndAuthor(
    title: string,
    author: string
  ): Promise<Book | null> {
    const book = await this.bookModel.get(
      { sk: `book:${author}`, title },
      { index: "sk_index" }
    );

    if (!book) return null;

    return new Book(book);
  }

  async create(book: Book): Promise<Book> {
    const bookCreated = await this.bookModel.create(book);

    return new Book(bookCreated);
  }
}
