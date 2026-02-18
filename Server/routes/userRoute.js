import express from "express"

import { create, getAllUser, getUserById } from "../controller/userController.js"

const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUser);
route.get("/user/:id", getUserById);

export default route;