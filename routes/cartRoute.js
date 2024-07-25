import express from "express";
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js";
import authMiddileware from "../middleware/auth.js";
const cartRouter=express.Router();
cartRouter.post("/add",authMiddileware,addToCart);
cartRouter.post("/remove",authMiddileware,removeFromCart);
cartRouter.post("/get",authMiddileware,getCart);
export default cartRouter;
