import { Router } from "express";
import { listPosition } from "../../controllers/position/index.js";

const router = Router();

router.get("/", listPosition);

export default router;
