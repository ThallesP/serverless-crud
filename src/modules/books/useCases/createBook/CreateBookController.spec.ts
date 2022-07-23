import { BookAlreadyExistsException } from "@books/exceptions/BookAlreadyExistsException";
import * as request from "supertest";

const TEST_URL = process.env.TEST_URL_HOST;

describe("CreateBookController", () => {
  it("should be able to create a book", async () => {
    const { body } = await request(TEST_URL)
      .post("/books")
      .send({ title: "Test book", author: "Test author", price: 13.76 });

    expect(body).toHaveProperty("id");
    expect(body.title).toEqual("Test book");
  });

  it("should not be able to create a book that already exists", async () => {
    await request(TEST_URL).post("/books").send({
      title: "Test book exists",
      author: "Test author exists",
      price: 13.76,
    });

    const { body } = await request(TEST_URL).post("/books").send({
      title: "Test book exists",
      author: "Test author exists",
      price: 13.76,
    });

    expect(body.error).toEqual(new BookAlreadyExistsException().name);
  });
});
