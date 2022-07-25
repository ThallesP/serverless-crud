import { Book } from "@books/entities/Book";
import { BookNotFoundException } from "@books/exceptions/BookNotFoundException";
import { randomUUID } from "crypto";
import * as request from "supertest";

const TEST_URL = process.env.TEST_URL_HOST;

let book: Book;
describe("DeleteBookController", () => {
  beforeAll(async () => {
    const { body } = await request(TEST_URL).post("/books").send({
      title: "Test book delete",
      author: "Test author delete",
      price: 13.76,
    });

    book = body;
  });

  it("should be able to delete a book", async () => {
    const { statusCode, body } = await request(TEST_URL).delete(
      `/books/${book.id}`
    );

    console.log(body);

    expect(statusCode).toEqual(204);
  });

  it("should not be able to delete a book that doesn't exists", async () => {
    const { body } = await request(TEST_URL).delete(`/books/${randomUUID()}`);

    expect(body.error).toEqual(new BookNotFoundException().name);
  });
});
