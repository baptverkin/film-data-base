import { Db } from "mongodb";
import mongo from "mongodb";
import { directorValidator } from "./directorValidator";
import { MongoClient } from "mongodb";

function directorCreator(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("directors", directorValidator);
}

const directors = [
  {
    firstName: "Christopher",
    lastName: "Nolan",
  },
  {
    firstName: "Steven",
    lastName: "Spielberg",
  },
  {
    firstName: "Quentin",
    lastName: "Tarantino",
  },
  {
    firstName: "Martin",
    lastName: "Scorsese",
  },
];

// const client = new MongoClient(databaseUrl);
// client.connect().then((client) => {
//   const db = client.db();
//   return db
//     .collection("directors")
//     .insertMany(directors)
//     .then(() => client.close());
// });

type Director = {
  firstName: string;
  lastName: string;
};

async function createDirector(db: Db, director: Director): Promise<mongo.Document> {
  const directorExists = await db
    .collection("directors")
    .findOne(director)
    .then((result) => result);

  if (directorExists !== null) {
    console.log("Director already exists in your database");
  }
  return db.collection("directors").insertOne(director);
}

export { directorCreator, createDirector, directors };
