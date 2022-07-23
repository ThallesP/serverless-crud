import { Book } from "@books/entities/Book";
import * as request from "supertest";

const TEST_URL = process.env.TEST_URL_HOST;

let book: Book;
describe("FindBookByIdController", () => {
  beforeAll(async () => {
    const { body } = await request(TEST_URL).post("/books").send({
      title: "Test book by id",
      author: "Test author by id",
      price: 13.76,
    });

    book = body;
  });

  it("should be able to find a book by it's id", async () => {
    const { body } = await request(TEST_URL).get(`/books/${book.id}`);

    expect(body).toHaveProperty("id");
  });
});
