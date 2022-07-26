import { handlerPath } from "@shared/utils/HandlerResolver";

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
