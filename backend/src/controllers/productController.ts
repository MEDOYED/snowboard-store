import type { Request, Response } from "express";

import pool from "../db.ts";
import type Product from "@sharedTypes/product";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await pool.query<Product>(`
      SELECT
        products.id,
        products.name,
        products.slug,
        products.price,
        products.discounted_price,
        products.image_url,
        products.image_alt,
        products.description,
        products.average_rating,
        products.created_at,
        products.updated_at,
        products.targeted_at,
        brands.name AS brand_name
      FROM products
      LEFT JOIN brands ON products.brand_id = brands.id;
      `);

    const products = allProducts.rows.map((product) => {
      const price = Number(product.price);
      const discounted_price = product.discounted_price
        ? Number(product.discounted_price)
        : null;

      const discount: string | null = discounted_price
        ? `-${Math.round(100 - (discounted_price / price) * 100)}%`
        : null;

      return {
        ...product,
        price: price,
        discounted_price: discounted_price,
        discount: discount,
      };
    });

    res.status(200).json(products);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllProducts };
