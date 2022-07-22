import { handlerPath } from "@libs/HandlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/CreateBookController.main`,
  events: [
    {
      http: {
        method: "post",
        path: "books",
        request: {},
      },
    },
  ],
};
