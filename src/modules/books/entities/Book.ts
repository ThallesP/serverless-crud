import { v4 as uuidV4 } from "uuid";

interface IBookProps {
  id?: string;
  title: string;
  author: string;
  price: number;
}

export class Book {
  constructor({ author, price, title, id }: IBookProps) {
    Object.assign(this, {
      id: id || uuidV4(),
      author,
      price,
      title,
      pk: `book:${id}`,
      sk: `book:${author}`,
    });
  }

  pk: string;

  sk: string;

  id: string;

  title: string;

  author: string;

  price: number;
}
