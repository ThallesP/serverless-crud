import type { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  plop.setGenerator("UseCase", {
    description: "create application logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "The name of the UseCase",
      },
      {
        type: "input",
        name: "module",
        message: "The module name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "",
        templateFile: "../templates/UseCaseTemplte.ts.hbs",
      },
    ],
  });
}
