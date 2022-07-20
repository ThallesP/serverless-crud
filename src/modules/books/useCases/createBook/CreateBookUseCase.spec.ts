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
      title: "Harry Potter e a pedra filosofal",
      author: "J.K. Rowling",
      price: 12.95,
    };

    const sut = await createBookUseCase.execute(book);

    expect(sut).toHaveProperty("id");
    expect(sut.title).toEqual(book.title);
  });
});
