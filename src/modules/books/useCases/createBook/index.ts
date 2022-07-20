import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/CreateBookHandler.main`,
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
