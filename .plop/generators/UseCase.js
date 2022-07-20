"use strict";
exports.__esModule = true;
function default_1(plop) {
    plop.setGenerator("UseCase", {
        description: "create application logic",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "The name of the UseCase"
            },
            {
                type: "input",
                name: "module",
                message: "The module name"
            },
        ],
        actions: [
            {
                type: "add",
                path: "",
                templateFile: "../templates/UseCaseTemplte.ts.hbs"
            },
        ]
    });
}
exports["default"] = default_1;
