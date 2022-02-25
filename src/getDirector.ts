import "dotenv/config";
import { Db, MongoClient, ObjectId } from "mongodb";
import { databaseUrl } from "./index";

type Director = {
  firstName: string;
  lastName: string;
};

type Movie = {
  title: string;
  year: number;
  director: ObjectId;
};

async function getDirector(db: Db, title: string): Promise<void> {
  const directorID = await db
    .collection<Movie>("movies")
    .findOne({ title: title })
    .then((movie) => movie?.director);
  const directorName = await db
    .collection<Director>("directors")
    .findOne({ _id: directorID })
    .then((director) => console.log(`The director of ${title} is ${director?.firstName} ${director?.lastName}`));

  return directorName;
}

export { getDirector };
