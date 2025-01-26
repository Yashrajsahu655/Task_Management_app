import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        console.log(formData);
        
      const response = await axios.post(
        "https://task-management-app-6wg6.onrender.com/user/signup",
        formData
      );
      console.log(response);

      const { token } = response.data;
      localStorage.setItem('jwtToken', token);
      navigate("/");
    } catch (err: any) {
      alert(
        err.response?.data?.message ||
          err.message ||
          "An error occurred during signup"
      );
    }
  };

  return (
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">
              SignUp to TaskEasy
            </h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="font-black font-semibold mb-2 block">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  placeholder="Enter Email"
                />
              </div>

              <div>
                <label className="font-black font-semibold mb-2 block">
                  Username
                </label>
                <input
                  name="name" 
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  placeholder="Enter username"
                />
              </div>

              <div>
                <label className="font-black font-semibold mb-2 block">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  placeholder="Enter password"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
              >
                Sign Up
              </button>
              <p className="text-gray-800 text-sm mt-8 text-center">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold cursor-pointer"
                >
                  Sign In
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
