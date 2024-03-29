import type { AWS } from "@serverless/typescript";
import createBook from "./src/modules/books/useCases/createBook";
import findBookById from "./src/modules/books/useCases/findBookById";
import deleteBook from "./src/modules/books/useCases/deleteBook";
import updateBook from "./src/modules/books/useCases/updateBook";

const serverlessConfiguration: AWS = {
  service: "serverless-crud",
  frameworkVersion: "3",
  plugins: [
    "serverless-esbuild",
    "serverless-dynamodb-local",
    "serverless-offline",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  functions: { createBook, findBookById, deleteBook, updateBook },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    dynamodb: {
      stages: ["dev"],
      start: {
        port: "8000",
        migrate: true,
      },
    },
    "serverless-offline": {
      host: "127.0.0.1",
    },
  },
  resources: {
    Resources: {
      serverlessCrudBooks: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "serverlessCrudBooks",
          ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5,
          },
          GlobalSecondaryIndexes: [
            {
              IndexName: "sk_index",
              Projection: {
                ProjectionType: "ALL",
              },
              ProvisionedThroughput: {
                ReadCapacityUnits: 5,
                WriteCapacityUnits: 5,
              },
              KeySchema: [
                {
                  AttributeName: "sk",
                  KeyType: "HASH",
                },
              ],
            },
          ],
          AttributeDefinitions: [
            {
              AttributeName: "pk",
              AttributeType: "S",
            },
            {
              AttributeName: "sk",
              AttributeType: "S",
            },
          ],
          KeySchema: [
            {
              AttributeName: "pk",
              KeyType: "HASH",
            },
            {
              AttributeName: "sk",
              KeyType: "RANGE",
            },
          ],
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
