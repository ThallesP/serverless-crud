import { Book } from "@books/entities/Book";
import { BookNotFoundException } from "@books/exceptions/BookNotFoundException";
import { InMemoryBooksRepository } from "@books/repositories/inMemory/InMemoryBooksRepository";
import { randomUUID } from "crypto";
import { UpdateBookUseCase } from "./UpdateBookUseCase";

let inMemoryBooksRepository: InMemoryBooksRepository;
let updateBookUseCase: UpdateBookUseCase;
describe("UpdateBookUseCase", () => {
  beforeEach(() => {
    inMemoryBooksRepository = new InMemoryBooksRepository();
    updateBookUseCase = new UpdateBookUseCase(inMemoryBooksRepository);
  });

  it("should be able to update a book", async () => {
    const book = await inMemoryBooksRepository.create(
      new Book({
        author: "Test update book",
        price: 13.85,
        title: "Test update book",
      })
    );

    const bookUpdated = await updateBookUseCase.execute({
      id: book.id,
      title: "Title updated book",
      price: 7.56,
    });

    expect(bookUpdated).toMatchObject({
      id: book.id,
      title: "Title updated book",
      price: 7.56,
    });
  });

  it("should not be able to update non-existent book", async () => {
    await expect(async () => {
      await updateBookUseCase.execute({
        id: randomUUID(),
        title: "Title updated book",
        price: 7.56,
      });
    }).rejects.toBeInstanceOf(BookNotFoundException);
  });
});
