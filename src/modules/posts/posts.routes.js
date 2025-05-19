import { Router } from 'express';
import * as pc from "../posts/posts.controller.js"
const router = Router();

router.get("/", pc.getPost);
router.post("/", pc.addPost);
router.put("/", pc.updatePost);
router.delete("/", pc.deletPost);



export default router;