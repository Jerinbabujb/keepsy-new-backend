import { recieveItem, recieverCollection, sendCollection, sendItem } from "../controllers/itemsController.js";
import { protectRoute } from "../middleware/auth.js";
import e from "express";


const itemRoute=e.Router();

itemRoute.post("/send",protectRoute,sendItem);
itemRoute.post("/recieve",protectRoute,recieveItem);
itemRoute.post("/send-form",protectRoute,sendCollection);
itemRoute.post("/reciever-form",protectRoute,recieverCollection);

export default itemRoute;