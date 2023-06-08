import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

//localhost:8080/posts

router.get("/", getPosts);
router.get("/", createPost);

export default router;
