import { inject, injectable } from "tsyringe";
import { Book } from "../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

interface ICreateBookRequest {
  title: string;
  author: string;
  price: number;
}

@injectable()
export class CreateBookUseCase {
  constructor(
    @inject("OneTableBooksRepository")
    private booksRepository: IBooksRepository
  ) {}

  async execute(createBookRequest: ICreateBookRequest) {
    const book = new Book(createBookRequest);

    await this.booksRepository.create(book);

    return book;
  }
}
