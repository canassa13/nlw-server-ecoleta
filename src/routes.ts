import express from "express";
const routes = express.Router();

import PointsController from "./controllers/PointsCotroller";
import ItemsController from "./controllers/ItemsController";

const pointsController = new PointsController();
const itemsController = new ItemsController();

//index, create, update, delete, show

routes.post("/points", pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

routes.get("/items", itemsController.index);


export default routes;
