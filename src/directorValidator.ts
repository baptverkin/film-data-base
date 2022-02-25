const directorValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "firstName", "lastName"],
      additionalProperties: false,
      properties: {
        _id: { bsonType: "objectId" },
        firstName: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        lastName: {
          bsonType: "string",
          description: "must be a string and is required",
        },
      },
    },
  },
};

export { directorValidator };
