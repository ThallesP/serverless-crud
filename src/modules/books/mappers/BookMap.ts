import { Book } from "../entities/Book";

export interface IBookResponseDTO {
  id: string;
  title: string;
  author: string;
  price: number;
}

export class BookMap {
  static toDTO({ author, id, price, title }: Book): IBookResponseDTO {
    return { id, title, author, price };
  }
}
