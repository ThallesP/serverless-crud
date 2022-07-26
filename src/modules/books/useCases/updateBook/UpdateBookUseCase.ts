import { Book } from "@books/entities/Book";
import { BookNotFoundException } from "@books/exceptions/BookNotFoundException";
import { BookMap } from "@books/mappers/BookMap";
import { IBooksRepository } from "@books/repositories/IBooksRepository";
import { MergeTwoObjectsAndExcludeUndefined } from "@shared/utils/MergeTwoObjectsAndExcludeUndefined";
import { inject, injectable } from "tsyringe";

interface IUpdateBookRequest {
  id: string;

  title?: string;

  price?: number;
}

@injectable()
export class UpdateBookUseCase {
  constructor(
    @inject("OneTableBooksRepository")
    private booksRepository: IBooksRepository
  ) {}

  async execute({ id, price, title }: IUpdateBookRequest) {
    const book = await this.booksRepository.findById(id);

    if (!book) throw new BookNotFoundException();

    const bookUpdated = await this.booksRepository.update(
      new Book(MergeTwoObjectsAndExcludeUndefined(book, { price, title }))
    );

    return BookMap.toDTO(bookUpdated);
  }
}
