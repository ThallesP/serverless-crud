import { Book } from "@books/entities/Book";
import { BookNotFoundException } from "@books/exceptions/BookNotFoundException";
import { randomUUID } from "crypto";
import * as request from "supertest";

const TEST_URL = process.env.TEST_URL_HOST;

let book: Book;
describe("UpdateBookController", () => {
  beforeAll(async () => {
    const { body } = await request(TEST_URL).post("/books").send({
      title: "Test book update",
      author: "Test book update",
      price: 13.76,
    });

    book = body;
  });

  it("should be able to update a book", async () => {
    const { body } = await request(TEST_URL).put(`/books/${book.id}`).send({
      title: "Title updated book",
      price: 5.94,
    });

    expect(body).toMatchObject({
      title: "Title updated book",
      price: 5.94,
    });
  });

  it("should not be able to update a non-existent book", async () => {
    const { body } = await request(TEST_URL)
      .put(`/books/${randomUUID()}`)
      .send({
        title: "Title updated book",
        price: 5.94,
      });

    expect(body.error).toEqual(new BookNotFoundException().name);
  });
});
