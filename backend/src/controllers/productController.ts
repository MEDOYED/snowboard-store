import type { Request, Response } from "express";

import pool from "../db.ts";
import type Product from "@sharedTypes/product";
import type { productQuery } from "src/shared/types/product";

const getAllProducts = async (req: Request, res: Response) => {
  let sqlQuery = `
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
        brands.name AS brand_name,
        categories.name AS category_name
      FROM products
      LEFT JOIN brands ON products.brand_id = brands.id
      LEFT JOIN categories ON products.category_id = categories.id
      ORDER BY id DESC
      `;

  const values: unknown[] = [];
  let placeHolderIndex = 1;

  const { limit } = req.query as productQuery;
  const parsedLimit = limit ? parseInt(limit) : undefined;
  console.log("parsedLimit:", parsedLimit);

  if (parsedLimit) {
    sqlQuery += ` LIMIT $${placeHolderIndex}`;
    values.push(parsedLimit);
  }

  try {
    const allProducts = await pool.query<Product>(sqlQuery, values);

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
