import express from "express";
import { getOrdersByUser, placeOrder } from "../application/order.js";

export const orderRouter = express.Router()

orderRouter.route('/').post(placeOrder)
orderRouter.route('/:id').get(getOrdersByUser)