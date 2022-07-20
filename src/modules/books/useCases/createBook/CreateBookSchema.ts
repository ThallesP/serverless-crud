export default {
  type: "object",
  properties: {
    title: { type: "string" },
    price: { type: "number" },
    author: { type: "string" },
  },
  required: ["title", "price", "author"],
} as const;
