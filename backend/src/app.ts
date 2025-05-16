import express from "express";
import cors from "cors";

import productRoutes from "./routes/productRoutes.ts";

const app = express();

app.use(cors({ origin: "http://localhost:7777" }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Snowboard Store API");
});

app.use("/api/products", productRoutes);

export default app;
