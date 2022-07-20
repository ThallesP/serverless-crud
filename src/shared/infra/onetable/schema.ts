export const ONETABLE_SCHEMA = {
  format: "onetable:1.1.0",
  version: "0.0.1",
  indexes: {
    primary: { hash: "pk", sort: "sk" },
  },
  models: {
    Book: {
      pk: { type: String, required: true },
      sk: { type: String, required: true },
      id: { type: String, required: true },
      title: { type: String, required: true },
      author: { type: String, required: true },
      price: { type: Number, required: true },
    },
  } as const,
  params: {
    isoDates: true,
    timestamps: true,
  },
};
