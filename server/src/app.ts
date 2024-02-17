// Importing modules and libraries
import express, { Request, Response, NextFunction } from "express";

// Importing controllers
import MasterRouter from "./controller/MasterController";

// Define server
class Server {
  // Create an Express application Instance
  public app = express();

  // set the router for the server
  public router = MasterRouter;
}

// Create a new Server
const server = new Server();

// setting up server configuration
server.app.use(express.urlencoded({ extended: true }));
server.app.use(express.json());
server.app.use(express.raw());
server.app.use("/", server.router);

// Error Middleware in case of an error
server.app.use(
  (error: unknown, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({ error: "Internal Server Error" });
  }
);

// Error Middleware in case no route is found
server.app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("🚀 ~ server.app.use ~ req:", req.path)
  res.status(404);

  if (req.accepts("json")) {
    return res.json({ error: "Resource Not Found!" });
  }

  res.type("text").send("Resource Not Found!");
});

// Event Listner for unhandled promise
process.on("unhandledRejection", (reason, promise) => {
  console.log("🚀 Unhandlerd rejection", reason, promise);
});

// Start the server
server.app.listen(process.env.PORT || 8080, () => {
  console.log(">>> Pentagon Server Up at:", process.env.PORT);
});

/**
 * TODO: Things to do in server
 *
 * 1. Create health router for health check and deep health check
 * 2. setup MongoDB
 * 3. Create a way to install all depdencies from outside server
 */
