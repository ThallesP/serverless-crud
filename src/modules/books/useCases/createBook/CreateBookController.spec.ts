import * as request from "supertest";

describe("CreateBookController", () => {
  it("should be able to create a book", async () => {
    const { body } = await request("http://localhost:3000/dev")
      .post("/books")
      .send({ title: "Test book", author: "Test author", price: 13.76 });

    expect(body).toHaveProperty("id");
    expect(body.title).toEqual("Test book");
  });

  it("should not be able to create a book that already exists", async () => {
    await request("http://localhost:3000/dev").post("/books").send({
      title: "Test book exists",
      author: "Test author exists",
      price: 13.76,
    });
    const { body } = await request("http://localhost:3000/dev")
      .post("/books")
      .send({
        title: "Test book exists",
        author: "Test author exists",
        price: 13.76,
      });

    console.log(body);
  });
});
