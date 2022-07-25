import { APIEventBodySchema, formatJSONResponse } from "@libs/ApiGateway";
import { middyfy } from "@libs/Lambda";
import { dicontainer } from "@shared/container";
import { DeleteBookUseCase } from "./DeleteBookUseCase";

class DeleteBookController {
  async handle(event: APIEventBodySchema<any>) {
    const id = event.pathParameters?.["id"];
    const deleteBookUseCase = dicontainer.resolve(DeleteBookUseCase);

    if (!id) return;

    await deleteBookUseCase.execute({ id });

    return formatJSONResponse(undefined, 204);
  }
}

export const main = middyfy(new DeleteBookController().handle);
