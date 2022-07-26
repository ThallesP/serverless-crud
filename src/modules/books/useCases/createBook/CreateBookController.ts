import { APIEventBodySchema, formatJSONResponse } from "@utils/ApiGateway";
import { middyfy } from "@utils/Lambda";
import { dicontainer } from "src/shared/container";
import createBookSchema from "./CreateBookSchema";
import { CreateBookUseCase } from "./CreateBookUseCase";

class CreateBookController {
  async handle(event: APIEventBodySchema<typeof createBookSchema>) {
    const { author, price, title } = event.body;
    const createBookUseCase = dicontainer.resolve(CreateBookUseCase);

    const book = await createBookUseCase.execute({ author, price, title });

    return formatJSONResponse({ ...book }, 200);
  }
}

export const main = middyfy(new CreateBookController().handle);
