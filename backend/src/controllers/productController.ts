import type { Request, Response } from "express";
import pool from "../db.ts";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await pool.query(`SELECT * FROM products`);

    console.log("allProducts:", allProducts.rows);
    res.status(200).json(allProducts.rows);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default getAllProducts;
