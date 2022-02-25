import "dotenv/config";
import mongo from "mongodb";
import { MongoClient } from "mongodb";
import { movieValidator } from "./movieValidator";

const databaseUrl = `${process.env.MONGODB_DATABASE_URL}`;

// type Directors = {
//   firstName: string;
//   lasName: string;
//   _id: ObjectId;
// };

function movieCreator(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("directors", movieValidator);
}

const client = new MongoClient(databaseUrl);

client.connect().then((client) => {
  const db = client.db();
  return db
    .collection("directors")
    .findOne({ firstName: "Martin", lastName: "Scorsese" })
    .then((director) =>
      db.collection("movies").insertMany([
        {
          title: "Shutter Island",
          year: 2010,
          director: director?._id,
        },
        {
          title: "The Wolf of Wall Street",
          year: 2013,
          director: director?._id,
        },
        {
          title: "The departed",
          year: 2006,
          director: director?._id,
        },
      ]),
    )
    .then(() => client.close());
});

export { movieCreator };
