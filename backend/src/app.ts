import express from "express";

import productRoutes from "./routes/productRoutes.ts";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Snowboard Store API");
});

app.use("/api/products", productRoutes);

export default app;
