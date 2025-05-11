import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Get all products");
});

export default router;
