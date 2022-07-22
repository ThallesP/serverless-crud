import "reflect-metadata";

import { IBooksRepository } from "src/modules/books/repositories/IBooksRepository";
import { OneTableBooksRepository } from "src/modules/books/repositories/onetable/OneTableBooksRepository";
import { container } from "tsyringe";

container.registerSingleton<IBooksRepository>(
  "OneTableBooksRepository",
  OneTableBooksRepository
);

export const dicontainer = container;
