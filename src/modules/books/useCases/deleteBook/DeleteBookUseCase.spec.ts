import { Book } from "@books/entities/Book";
import { BookNotFoundException } from "@books/exceptions/BookNotFoundException";
import { InMemoryBooksRepository } from "@books/repositories/inMemory/InMemoryBooksRepository";
import { randomUUID } from "crypto";
import { DeleteBookUseCase } from "./DeleteBookUseCase";

let inMemoryBooksRepository: InMemoryBooksRepository;
let deleteBookUseCase: DeleteBookUseCase;
describe("DeleteBookUseCase", () => {
  beforeEach(() => {
    inMemoryBooksRepository = new InMemoryBooksRepository();
    deleteBookUseCase = new DeleteBookUseCase(inMemoryBooksRepository);
  });

  it("should be able to delete a book", async () => {
    const book = new Book({
      author: "Test author delete",
      price: 13.95,
      title: "Test book delete",
    });

    const { id } = await inMemoryBooksRepository.create(book);

    await deleteBookUseCase.execute({ id });

    const bookExists = await inMemoryBooksRepository.findById(id);

    expect(bookExists).toBeNull();
  });

  it("should not be able to delete a book that doesn't exists", async () => {
    await expect(async () => {
      await deleteBookUseCase.execute({ id: randomUUID() });
    }).rejects.toBeInstanceOf(BookNotFoundException);
  });
});
