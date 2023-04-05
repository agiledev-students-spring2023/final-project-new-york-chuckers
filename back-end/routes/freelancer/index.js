import { Router } from "express";
import { listFreelancer } from "../../controllers/freelancer/index.js";

const router = Router();

router.get("/freelancer", listFreelancer);

export default router;
