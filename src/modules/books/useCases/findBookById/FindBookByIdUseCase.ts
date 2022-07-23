import { BookNotFoundException } from "@books/exceptions/BookNotFoundException";
import { BookMap } from "@books/mappers/BookMap";
import { IBooksRepository } from "@books/repositories/IBooksRepository";
import { inject, injectable } from "tsyringe";

interface IFindBookByIdDTO {
  id: string;
}

@injectable()
export class FindBookByIdUseCase {
  constructor(
    @inject("OneTableBooksRepository")
    private booksRepository: IBooksRepository
  ) {}

  async execute({ id }: IFindBookByIdDTO) {
    const book = await this.booksRepository.findById(id);

    if (!book) throw new BookNotFoundException();

    return BookMap.toDTO(book);
  }
}
