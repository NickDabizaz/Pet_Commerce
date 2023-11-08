import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { MainLayout } from "../Components";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function CreateStore() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [cookies] = useCookies(["user_id"]);
  const user_id = cookies.user_id;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    data.user_id = user_id;
    try {
      const response = await axios.post(
        "http://localhost:3000/sellers/create-store",
        data
      );
      reset();
      navigate(`/store/${response.data.store_id}`);

      if (response.status === 200) {
        setSuccessMessage("Store created successfully");
        setErrorMessage("");
      } else {
        setErrorMessage("Error creating store");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error creating store:", error);
      setErrorMessage("Error creating store");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <MainLayout />
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Create Store</h1>
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 mb-4 rounded">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 mb-4 rounded">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Store Name:</label>
            <input
              type="text"
              {...register("store_name", { required: true })}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.store_name && (
              <span className="text-red-500">Store Name is required</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Store Description:</label>
            <input
              type="text"
              {...register("store_description", { required: true })}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.store_description && (
              <span className="text-red-500">
                Store Description is required
              </span>
            )}
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Create Store
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateStore;
