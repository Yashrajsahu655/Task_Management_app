import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response  = await axios.post("https://task-management-app-6wg6.onrender.com/user/login", formData);
      console.log(response);

      const { token } = response.data;
      localStorage.setItem('jwtToken', token);
      navigate("/");
    } catch (err: any) {
      alert(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">SignIn to TaskEasy</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="font-black font-semibold mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    onChange={handleChange}
                    id="email"
                    name="email"
                    type="text"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter Email"
                  />
                </div>
              </div>

              <div>
                <label className="font-black font-semibold mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    onChange={handleChange}
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
                >
                  Sign in
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">
                Don't have an account?
                <span onClick={()=>{navigate("/signup")}} className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold cursor-pointer">
                  Sign Up
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
