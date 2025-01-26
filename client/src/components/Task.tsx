import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const Task = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    try {
      async function getTask() {
        const token = localStorage.getItem("jwtToken");
        const response = await axios.get("http://localhost:3000/task/getTask", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);

        setTask(response.data.tasks);
      }
      getTask();
    } catch (error) {
      console.log("Error while fetching task", error);
    }
  }, []);

  return (
    <>
      <Navbar />
     
      <div className="mt-4 ml-4">
        <button className="px-2 py-1 text-sm text-white bg-cyan-600 rounded-md hover:bg-blue-700">
          Add Task
        </button>
      </div>
      {/* Card list */}
      <ul className="mt-4 space-y-4">
        {task.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default Task;
