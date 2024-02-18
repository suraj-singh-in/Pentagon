import mongoose, { Connection } from "mongoose";

enum ConnectionStates {
  disconnected = 0,
  connected = 1,
  connecting = 2,
  disconnecting = 3,
  uninitialized = 99,
}

class MongoCollection {
  private static instance: MongoCollection;
  private connection: Connection;

  public readyState: string = "uninitialized";

  // Getter methrod to access the mongoose connection
  public static getInstance(): Connection {
    if (!MongoCollection.instance) {
      new MongoCollection();
    }

    // Return the Monoose connection directly
    return MongoCollection.instance.connection;
  }

  public constructor() {
    // Get database URI
    const databaseURI: string = process.env.MONGODB_URI;

    // if invalid URI found close the process
    if (!databaseURI) {
      console.log("No Database URI found!. Please set environment variables.");
      process.exit(1);
    }

    // make conenction to database
    mongoose
      .connect(databaseURI)
      .then(() => {
        this.readyState = ConnectionStates[mongoose.connection.readyState];
        console.log(">>> Pentagon Database:", this.readyState);
      })
      .catch((error: any) => {
        console.error(">>> Error Connecting to Pentagon Database: ", error);
        this.readyState = "uninitialized";
        process.exit(1);
      });

    // Set the instance to this newly created instance
    MongoCollection.instance = this;
    this.connection = mongoose.connection;
  }
}

const mongoCollectionInstance = new MongoCollection();

export default mongoCollectionInstance;
