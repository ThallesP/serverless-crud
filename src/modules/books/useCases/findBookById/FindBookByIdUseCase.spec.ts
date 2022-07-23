import { Book } from "@books/entities/Book";
import { BookNotFoundException } from "@books/exceptions/BookNotFoundException";
import { IBooksRepository } from "@books/repositories/IBooksRepository";
import { InMemoryBooksRepository } from "@books/repositories/inMemory/InMemoryBooksRepository";
import { FindBookByIdUseCase } from "./FindBookByIdUseCase";

let inMemoryBooksRepository: IBooksRepository;
let findBookByIdUseCase: FindBookByIdUseCase;
describe("FindBookByIdUseCase", () => {
  beforeEach(() => {
    inMemoryBooksRepository = new InMemoryBooksRepository();
    findBookByIdUseCase = new FindBookByIdUseCase(inMemoryBooksRepository);
  });

  it("should be able to find a book by it's id", async () => {
    const book = new Book({
      author: "Test author",
      price: 13.95,
      title: "Test title",
    });

    const { id } = await inMemoryBooksRepository.create(book);

    const sut = await findBookByIdUseCase.execute({ id });

    expect(sut.id).toEqual(id);
    expect(sut.title).toEqual(book.title);
  });

  it("should not be able to find a book that doesn't exists", async () => {
    const book = new Book({
      author: "Test author doesn't exists",
      price: 13.95,
      title: "Test title doesn't exists",
    });

    await expect(async () => {
      await findBookByIdUseCase.execute({ id: book.id });
    }).rejects.toBeInstanceOf(BookNotFoundException);
  });
});
