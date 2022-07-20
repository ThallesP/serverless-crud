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

  async create(book: Book): Promise<Book> {
    const bookCreated = await this.bookModel.create(book);

    return new Book(bookCreated);
  }
}
