import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";


interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  user: string;
  startTime: string;
  endTime: string;
  priority: number;
  
}

const TaskComponent: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); 

  useEffect(() => {
    const getTask = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await axios.get("https://task-management-app-6wg6.onrender.com/task/getTask", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);

        setTasks(response.data.tasks); 
      } catch (error) {
        console.error("Error while fetching tasks", error);
      }
    };

    getTask();
  }, []);

  return (
    <>
      <Navbar />

      
      <div className="mt-4 ml-4">
        <button className="px-2 py-1 text-sm text-white bg-cyan-600 rounded-md hover:bg-blue-700">
          Add Task
        </button>
      </div>

      
      <ul className="mt-4 space-y-4">
        {tasks.map((item) => (
          <Card key={item._id} item={item} /> 
        ))}
      </ul>
    </>
  );
};

export default TaskComponent;
