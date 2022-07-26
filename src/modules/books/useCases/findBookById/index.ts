import { handlerPath } from "@shared/utils/HandlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/FindBookByIdController.main`,
  events: [
    {
      http: {
        method: "get",
        path: "books/{id}",
        request: {},
      },
    },
  ],
};
