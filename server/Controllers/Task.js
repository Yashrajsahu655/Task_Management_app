import { Task } from "../Models/Task.js";
import mongoose from "mongoose";

export const newTask = async (req, res, next) => {
  try {
    const { title, description,priority,startTime,endTime} = req.body;
    console.log(title, description,priority);

    if (!title || !description  || !priority || !startTime || !endTime) {
      return res.status(400).send("All fields are required");
    } else {
        
     const userId = req.user?.id; 
     if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(404).send("Invalid user ID");
    }

    const parsedStartTime = new Date(startTime);
    const parsedEndTime = new Date(endTime);

    if (isNaN(parsedStartTime.getTime()) || isNaN(parsedEndTime.getTime())) {
        return res.status(400).send("Invalid date format");
      }

      if (parsedEndTime <= parsedStartTime) {
        return res.status(400).send("End time must be after start time");
      }

        const New_Task = new Task(
            { title,
            description,
            user: new mongoose.Types.ObjectId(userId),
            priority,
            startTime: startTime,
            endTime: endTime,
        }
        );

        await New_Task.save();



      res.status(201).json({
        success: true,
        message: "Task added successfully",
        Task:New_Task
      });
    }
  } catch (error) {
    return res.status(404).json({error:error.message});
  }
};

export const GetAllTask = async (req, res, next) => {
  try {
    console.log(req.user);
    
    const userid = req.user.id;
    if (!userid) {
      return res.status(404).send("User not found ");
    } else {
      const tasks = await Task.find({ user: userid });

      res.status(200).json({
        success: true,
        tasks,
      });
    }
  } catch (error) {
    return res.status(404).json({error:error.message});
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const taskId = req.params.id; 
    const data = req.body;

    const task = await Task.findByIdAndUpdate(taskId, data, {
        new: true,  
      });

    if (!task) {
        return res.status(404).send("task not found ");
    }
    

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task:task
    });
  } catch (error) {
    return res.status(404).json({error:error.message});
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
        return res.status(404).send("task not found ");
    }
    await task.deleteOne();
    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.status(404).json({error:error.message});
  }
};

