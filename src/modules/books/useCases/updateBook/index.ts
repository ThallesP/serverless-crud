import { handlerPath } from "@shared/utils/HandlerResolver";
import schema from "./UpdateBookSchema";

export default {
  handler: `${handlerPath(__dirname)}/UpdateBookController.main`,
  events: [
    {
      http: {
        method: "put",
        path: "books/{id}",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
