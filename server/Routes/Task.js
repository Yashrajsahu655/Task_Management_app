import express from "express";
import {
    GetAllTask,
    deleteTask,
    newTask,
    updateTask,
} from "../Controllers/Task.js";
import { verifyToken } from "../Auth/jwt.js";

const router = express.Router();

router.post("/addTask", verifyToken, newTask);
router.get("/getTask", verifyToken, GetAllTask);
router.patch("/updateTask/:id",verifyToken, updateTask)
router.delete("/deleteTask/:id",verifyToken, deleteTask)

export default router;