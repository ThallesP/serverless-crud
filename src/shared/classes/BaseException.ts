export class BaseException extends Error {
  constructor(
    public name: string = "BaseException",
    public message: string = "The base exception",
    public statusCode: number = 400
  ) {
    super();
  }

  toString(): string {
    return `[${this.name}] - ${this.message}.`;
  }
}
