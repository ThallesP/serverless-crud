import { formatJSONResponse } from "@utils/ApiGateway";
import { BaseException } from "@shared/classes/BaseException";

export function exceptionHandler({ error }: { error: Error | null }) {
  if (error instanceof BaseException) {
    return formatJSONResponse(
      {
        error: error.name,
        message: error.message,
      },
      error.statusCode
    );
  }

  return formatJSONResponse(
    {
      error: `InternalServerError - ${error}`,
      message: "Internal Server Error",
    },
    500
  );
}
