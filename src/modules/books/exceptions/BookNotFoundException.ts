import { BaseException } from "@shared/classes/BaseException";

export class BookNotFoundException extends BaseException {
  constructor() {
    super("BookNotFound", "Book not found", 404);
  }
}
