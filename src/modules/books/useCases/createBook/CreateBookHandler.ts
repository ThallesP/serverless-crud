import { APIEventBodySchema, formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { container } from "tsyringe";
import createBookSchema from "./CreateBookSchema";
import { CreateBookUseCase } from "./CreateBookUseCase";

const handler = async (event: APIEventBodySchema<typeof createBookSchema>) => {
  const { author, price, title } = event.body;
  const createBookUseCase = container.resolve(CreateBookUseCase);

  const book = await createBookUseCase.execute({ author, price, title });

  return formatJSONResponse({ statusCode: 200, body: book });
};

export const main = middyfy(handler);
