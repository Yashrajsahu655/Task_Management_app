import {BrowserRouter,Route, Routes} from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";
import Task from "./components/Task";

const Home = () => {
  return <>
    <BrowserRouter>
      <Routes>
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<SignUp/>} />
         <Route path="/" element={<DashBoard/>} />
         <Route path="/task" element={<Task/>} />
         
      </Routes>
    </BrowserRouter>
  </>
};

export default Home;
