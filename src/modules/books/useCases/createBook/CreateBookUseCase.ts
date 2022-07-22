import { BookAlreadyExistsException } from "@books/exceptions/BookAlreadyExistsException";
import { inject, injectable } from "tsyringe";
import { Book } from "../../entities/Book";
import { BookMap, IBookResponseDTO } from "../../mappers/BookMap";
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

  async execute(
    createBookRequest: ICreateBookRequest
  ): Promise<IBookResponseDTO> {
    const book = new Book(createBookRequest);

    const bookExists = await this.booksRepository.findByTitleAndAuthor(
      book.title,
      book.author
    );

    if (bookExists) throw new BookAlreadyExistsException();

    await this.booksRepository.create(book);

    return BookMap.toDTO(book);
  }
}
