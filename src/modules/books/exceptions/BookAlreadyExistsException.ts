import { BaseException } from "@shared/classes/BaseException";

export class BookAlreadyExistsException extends BaseException {
  constructor() {
    super("BookAlreadyExists", "The book already exists", 400);
  }
}
