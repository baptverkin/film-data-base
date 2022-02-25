const movieValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "title", "year", "director"],
      additionalProperties: true,
      properties: {
        _id: { bsonType: "objectId" },
        title: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        year: {
          bsonType: "int",
          description: "must be an int and is required",
        },
        director: {
          bsonType: "ObjectId",
          description: "must be an id and is required",
        },
      },
    },
  },
};

export { movieValidator };
