import { handlerPath } from "@libs/HandlerResolver";
import schema from "./CreateBookSchema";

export default {
  handler: `${handlerPath(__dirname)}/CreateBookController.main`,
  events: [
    {
      http: {
        method: "post",
        path: "books",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
