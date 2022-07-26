import { APIEventBodySchema, formatJSONResponse } from "@utils/ApiGateway";
import { middyfy } from "@utils/Lambda";
import { dicontainer } from "@shared/container";
import UpdateBookSchema from "./UpdateBookSchema";
import { UpdateBookUseCase } from "./UpdateBookUseCase";

class UpdateBookController {
  async handle(event: APIEventBodySchema<typeof UpdateBookSchema>) {
    const id = event.pathParameters?.["id"] as string;
    const { price, title } = event.body;

    const updateBookUseCase = dicontainer.resolve(UpdateBookUseCase);

    const updatedBook = await updateBookUseCase.execute({
      id,
      price,
      title,
    });

    return formatJSONResponse({ ...updatedBook }, 200);
  }
}

export const main = middyfy(new UpdateBookController().handle);
