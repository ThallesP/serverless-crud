import * as request from "supertest";

describe("CreateBookController", () => {
  it("should be able to create a book", async () => {
    const response = await request("http://localhost:3000/dev")
      .post("/books")
      .send({ title: "Test book", author: "Test author", price: 13.76 });

    console.log(response.body);
  });
});
