import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


interface TaskData {
  total_task: number;
  finished_task: number;
  remaining_task: number;
}

const Hero: React.FC = () => {
  const [task, setTask] = useState<TaskData>({
    total_task: 0,
    finished_task: 0,
    remaining_task: 0,
  });

  useEffect(() => {
    const getTask = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await axios.get<TaskData>(
          "https://task-management-app-6wg6.onrender.com/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setTask(response.data);
      } catch (error) {
        console.error("Error while fetching task:", error);
      }
    };
    getTask();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">TaskEasy</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/task"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
              >
                Tasks
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

     
      <div className="flex-1 p-6">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold">Total Task</h2>
            <p className="text-gray-600">{task.total_task}</p>
          </div>
        
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold">Finished Task</h2>
            <p className="text-gray-600">{task.finished_task}</p>
          </div>
         
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold">Remaining Task</h2>
            <p className="text-gray-600">{task.remaining_task}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
