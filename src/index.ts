import "dotenv/config";
import { Db, MongoClient, ObjectId } from "mongodb";
import { directorCreator, directors, createDirector } from "./directorCreator";
import { movieValidator } from "./movieValidator";
import { getDirector } from "./getDirector";

const databaseUrl = `${process.env.MONGODB_DATABASE_URL}`;

const client = new MongoClient(databaseUrl);

// client.connect().then((client) => {
//   const db = client.db();
//   getDirector(db, "Shutter Island").then(() => client.close());
// });

const newDirector = { firstName: "Ridley", lastName: "Scott" };

client.connect().then((client) => {
  const db = client.db();
  return createDirector(db, newDirector).then(() => client.close());
});

export { databaseUrl };
