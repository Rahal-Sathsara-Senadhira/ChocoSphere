import { create } from "domain";
import express from "express";
import { createUrl, deleteUrl, getAll, getUrl } from "../controllers/shortUrl";

const router = express.Router();

router.post("/shortUrl", createUrl);
router.get("/shortUrl", getAll);
router.get("/shortUrl/:id", getUrl);
router.delete("/shortUrl/:id", deleteUrl);

export default router;
