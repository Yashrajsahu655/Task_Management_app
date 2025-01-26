import { Task } from "../Models/Task.js";


const TotalTask = async (tasks) => {
  let cnt = 0; 

  for (let i = 0; i < tasks.length; i++) {
    cnt++;
  }
  return cnt;
};

const FinishedTask = async (tasks,total_task) => {
  let cnt = 0; 

  for (const obj of tasks) {
    if (obj.status === "finished") {
      cnt++;
    }
  }
  return cnt;

};

export const Dashboard = async (req, res, next) => {
  try {
    console.log(req.user);

    const userid = req.user.id;
    if (!userid) {
      return res.status(404).send("User not found");
    } else {
      const tasks = await Task.find({ user: userid }); 
      const total_task = await TotalTask(tasks);
      const finished_task = await FinishedTask(tasks,total_task);
      const remaining_task = total_task - finished_task;

      res.status(200).json({
        success: true,
        total_task,
        finished_task,
        remaining_task,
      });
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};
