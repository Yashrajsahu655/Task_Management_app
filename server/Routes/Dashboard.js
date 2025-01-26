import express from "express";
import {Dashboard} from '../Controllers/Dashboard.js'
import { verifyToken } from "../Auth/jwt.js";

const router = express.Router();

router.get("/", verifyToken, Dashboard);

export default router;