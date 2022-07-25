import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, "body"> & {
  body: FromSchema<S>;
};
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<
  ValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;

export type APIEventBodySchema<S> = Omit<APIGatewayProxyEvent, "body"> & {
  body: FromSchema<S>;
};

export const formatJSONResponse = (
  response?: Record<string, unknown>,
  statusCode: number = 400
) => {
  return {
    statusCode,
    body: response ? JSON.stringify(response) : undefined,
  };
};
