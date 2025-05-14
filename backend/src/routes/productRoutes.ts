import express from "express";

import getAllProducts from "../controllers/productController.ts";

const router = express.Router();

// /api/products
router.get("/", getAllProducts);

export default router;
