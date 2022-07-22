import middy from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";
import { exceptionHandler } from "@shared/utils/ExceptionHandler";

export const middyfy = (handler: (event: any) => any) => {
  return middy(handler).use(middyJsonBodyParser()).onError(exceptionHandler);
};
