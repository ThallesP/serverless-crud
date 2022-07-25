import { handlerPath } from "@libs/HandlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/DeleteBookController.main`,
  events: [
    {
      http: {
        method: "delete",
        path: "books/{id}",
      },
    },
  ],
};
