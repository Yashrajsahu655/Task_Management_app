import axios from "axios";

const Card = ({ item }) => {
  

  const HandleClick = async () => {
    try {
     const token = localStorage.getItem('jwtToken');
      const response = await axios.delete(`https://task-management-app-6wg6.onrender.com/task/deleteTask/${item._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Task deleted:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

 

  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 m-4">
      <div className="p-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          {item.title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2">{item.description}</p>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          <span className="font-semibold">Status:</span> {item.status}
        </p>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          <span className="font-semibold">Start Time:</span> {item.startTime}
        </p>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          <span className="font-semibold">End Time:</span> {item.endTime}
        </p>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          <span className="font-semibold">Priority:</span> {item.priority}
        </p>

       
        <div className="mt-4 flex justify-between items-center">
         
          <button
            onClick={HandleClick}
            className="px-4 py-2 text-sm sm:text-base bg-red-600 text-white font-medium rounded-md shadow hover:bg-red-700 cursor-pointer"
          >
            Delete
          </button>

         
          <button
           
            className="px-4 py-2 text-sm sm:text-base cursor-pointer bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
