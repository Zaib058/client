import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { baseApiURL } from "../baseUrl";
import logo from '../pages/asset/logo.jpg'
const Login = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Student");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.loginid !== "" && data.password !== "") {
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(`${baseApiURL()}/${selected.toLowerCase()}/auth/login`, data, {
          headers: headers,
        })
        .then((response) => {
          navigate(`/${selected.toLowerCase()}`, {
            state: { type: selected, loginid: response.data.loginid },
          });
        })
        .catch((error) => {
          toast.dismiss();
          console.error(error);
          toast.error(error.response.data.message);
        });
    } else {
    }
  };
 return (
  <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
    
    {/* Logo Section */}
    <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
      <img
        src={logo}
        alt="logo"
        className="w-[70%] md:w-[80%] lg:w-[60%] object-contain p-6"
      />
    </div>

    {/* Login Section */}
    <div className="w-full md:w-1/2 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[90%] sm:w-[70%] md:w-[80%] lg:w-[60%]">
        
        {/* Role Tabs */}
        <div className="flex justify-end mb-4">
          {["Student", "Faculty", "Admin"].map((role) => (
            <button
              key={role}
              className={`ml-4 font-semibold ${
                selected === role
                  ? "border-b-2 border-green-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setSelected(role)}
            >
              {role}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-b-2 border-green-500 pb-2 mb-6">
          {selected} Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label className="mb-1">{selected} Login ID</label>
          <input
            type="text"
            required
            className="border-2 border-gray-300 rounded-md px-4 py-2 mb-4 focus:border-blue-500 outline-none"
            {...register("loginid")}
          />

          <label className="mb-1">Password</label>
          <input
            type="password"
            required
            className="border-2 border-gray-300 rounded-md px-4 py-2 mb-4 focus:border-blue-500 outline-none"
            {...register("password")}
          />

          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md flex justify-center items-center mt-2 transition">
            Login
            <span className="ml-2">
              <FiLogIn />
            </span>
          </button>
        </form>
      </div>
    </div>

    <Toaster position="bottom-center" />
  </div>
);
};

export default Login;
