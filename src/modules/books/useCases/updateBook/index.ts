import { handlerPath } from "@libs/HandlerResolver";
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
