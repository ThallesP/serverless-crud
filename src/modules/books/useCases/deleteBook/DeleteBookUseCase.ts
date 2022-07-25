import { BookNotFoundException } from "@books/exceptions/BookNotFoundException";
import { IBooksRepository } from "@books/repositories/IBooksRepository";
import { inject, injectable } from "tsyringe";

interface IDeleteBookDTO {
  id: string;
}

@injectable()
export class DeleteBookUseCase {
  constructor(
    @inject("OneTableBooksRepository")
    private booksRepository: IBooksRepository
  ) {}

  async execute({ id }: IDeleteBookDTO) {
    const book = await this.booksRepository.findById(id);

    if (!book) throw new BookNotFoundException();

    await this.booksRepository.delete(id);
  }
}
