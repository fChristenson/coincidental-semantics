import * as express from "express";
import { User } from "./libs/user";
import { userService } from "./libs/services";

export const app = express();

app.use(express.json());

// api endpoints, company grew and now vendors want to integrate

app.post("/api/v1/users", async (req, res) => {
  if (!req.body.name) throw new Error("Name is missing");

  const user = User(req.body.name);
  const savedUser = await userService.saveUser(user);
  res.json(savedUser);
});

/**
 * Vendor tells us that they will use the users name as the id to get
 * the user which means the username is for the api equal to the id
 */
app.get("/api/v1/users/:id", async (req, res) => {
  const user = await userService.getUser(req.params.id);
  res.json(user);
});

app.put("/api/v1/users/:id", async (req, res) => {
  if (!req.body.name || !req.params.id)
    throw new Error("Name or id is missing");

  const user = await userService.updateUser(req.params.id, {
    name: req.body.name
  });

  res.json(user);
});

// user endpoints, made for browser client

app.post("/users", async (req, res) => {
  if (!req.body.name) throw new Error("Name is missing");

  const user = User(req.body.name);
  const savedUser = await userService.saveUser(user);
  res.json(savedUser);
});

app.get("/users/:id", async (req, res) => {
  const user = await userService.getUser(req.params.id);
  res.json(user);
});

app.put("/users/:id", async (req, res) => {
  if (!req.body.name || !req.params.id)
    throw new Error("Name or id is missing");

  const user = await userService.updateUser(req.params.id, {
    name: req.body.name
  });

  res.json(user);
});
