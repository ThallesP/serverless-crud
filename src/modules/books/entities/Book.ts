import { v4 as uuidV4 } from "uuid";

interface IBookProps {
  id?: string;
  title: string;
  author: string;
  price: number;
}

export class Book {
  constructor({ author, price, title, id }: IBookProps) {
    const idGen = id || uuidV4();

    Object.assign(this, {
      id: idGen,
      author,
      price,
      title,
      pk: `book:${idGen}`,
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
