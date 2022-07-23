import "reflect-metadata";
import { BaseException } from "./src/shared/classes/BaseException";

if (!process.env.TEST_URL_HOST)
  throw new BaseException(
    "MissingTestUrlHost",
    "You should set the 'TEST_URL_HOST' enviroment variable to a valid running application"
  );
