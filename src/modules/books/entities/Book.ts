import { v4 as uuidV4 } from "uuid";

interface IBookProps {
  id?: string;
  title: string;
  author: string;
  price: number;
}

export class Book {
  constructor({ author, price, title, id }: IBookProps) {
    Object.assign(this, { id: id || uuidV4(), author, price, title });
  }

  id: string;

  title: string;

  author: string;

  price: number;
}
