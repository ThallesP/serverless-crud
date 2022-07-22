import { BaseException } from "@shared/classes/BaseException";

export class BookAlreadyExistsException extends BaseException {
  constructor() {
    super("BookAlreadyExists", "the book already exist", 400);
  }
}
