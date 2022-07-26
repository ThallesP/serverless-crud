import { APIEventBodySchema, formatJSONResponse } from "@utils/ApiGateway";
import { middyfy } from "@utils/Lambda";
import { dicontainer } from "@shared/container";
import { FindBookByIdUseCase } from "./FindBookByIdUseCase";

class FindBookByIdController {
  async handle(event: APIEventBodySchema<any>) {
    const id = event.pathParameters?.["id"];

    if (!id) return;

    const findBookByIdUseCase = dicontainer.resolve(FindBookByIdUseCase);

    const book = await findBookByIdUseCase.execute({ id: id.toString() });

    return formatJSONResponse({ ...book }, 200);
  }
}

export const main = middyfy(new FindBookByIdController().handle);
