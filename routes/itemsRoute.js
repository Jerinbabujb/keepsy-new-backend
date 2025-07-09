import { recieveItem, sendItem } from "../controllers/itemsController.js";
import { protectRoute } from "../middleware/auth.js";
import e from "express";


const itemRoute=e.Router();

itemRoute.post("/send",protectRoute,sendItem);
itemRoute.post("/recieve",protectRoute,recieveItem);

export default itemRoute;