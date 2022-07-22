import { BookAlreadyExistsException } from "../../exceptions/BookAlreadyExistsException";
import { InMemoryBooksRepository } from "../../repositories/inMemory/InMemoryBooksRepository";
import { CreateBookUseCase } from "./CreateBookUseCase";

let createBookUseCase: CreateBookUseCase;
let inMemoryBooksRepository: InMemoryBooksRepository;
describe("CreateBookUseCase", () => {
  beforeEach(() => {
    inMemoryBooksRepository = new InMemoryBooksRepository();
    createBookUseCase = new CreateBookUseCase(inMemoryBooksRepository);
  });

  it("should be able to create a new book", async () => {
    const book = {
      title: "Test book",
      author: "Test author",
      price: 12.95,
    };

    const sut = await createBookUseCase.execute(book);

    expect(sut).toHaveProperty("id");
    expect(sut.title).toEqual(book.title);
  });

  it("should not be able to create a book that already exists", async () => {
    const book = {
      title: "Test book exists",
      author: "Test author exists",
      price: 13.45,
    };

    await createBookUseCase.execute(book);

    await expect(async () => {
      await createBookUseCase.execute(book);
    }).rejects.toBeInstanceOf(BookAlreadyExistsException);
  });
});
