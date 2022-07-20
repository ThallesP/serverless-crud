import Dynamo from "dynamodb-onetable/Dynamo";
import { Table } from "dynamodb-onetable";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { ONETABLE_SCHEMA } from "./schema";

const params = {
  endpoint: "http://localhost:8000",
  credentials: { accessKeyId: "localhost", secretAccessKey: "localhost" },
};

const client = new Dynamo({
  client: new DynamoDBClient(process.env.IS_OFFLINE ? params : {}),
});

export const ONETABLE = new Table({
  client,
  name: "serverlessCrudBooks",
  schema: ONETABLE_SCHEMA,
});
