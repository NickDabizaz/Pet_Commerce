import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { MainLayout } from "../Components";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import create from "../assets/create.png"
import createpict from "../assets/createpict.jpg"

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
      <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>{/* #61A0AF or #1286CE*/}
        <div className="pt-20 pb-20">
          <div className="container-fluid rounded d-flex shadow" style={{ width: "90%", height: "80vh", backgroundColor: "#6CD4FF", overflow: "hidden" }}>
            <div className="container-fluid rounded" style={{ width: "100%", height: "75vh", position: "relative" }}>
              <img src={createpict} className="rounded" style={{ width: "120vh", height: "38rem", left: -15, top: -5, position: "absolute", zIndex: 1 }} />
            </div>
            <div className="container-fluid rounded" style={{ width: "60%", height: "75vh", marginTop: "2.5vh", backgroundColor: "#FFFFFF" }}>
              <img src={create} style={{ display: "block", margin: "0 auto", width: "22rem", height: "6rem", marginTop: "4%" }} />
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label style={{ marginLeft: "3%", fontWeight: 700, marginBottom: "1%", marginTop: "7%" }}>Store Name:</label>
                  <input className="form-control" style={{ marginLeft: "3%", width: "94%" }}
                    type="text"
                    {...register("store_name", { required: true })}
                  />
                </div>
                <div>
                  <label style={{ marginTop: "7%", marginLeft: "3%", fontWeight: 700, marginBottom: "1%" }}>Store Description:</label>
                  <input className="form-control" style={{ marginLeft: "3%", width: "94%" }}
                    type="text"
                    {...register("store_description", { required: true })}
                  />
                </div>
                <button type="submit"
                  className="btn btn-info"
                  style={{ backgroundColor: "#C46E85", borderColor: "#C46E85", marginTop: "8%", marginLeft: "3%", fontWeight: 700, width: "94%", height: "2.5rem", color: "white" }}>
                  Create Store
                </button>
                {errors.store_name && (
                  <p className="text-center" style={{ marginTop: "5%", color: "red" }}>Store Name is required</p>
                )}
                {errors.store_description && (
                  <p className="text-center" style={{ marginTop: "1%", color: "red" }}>
                    Store Description is required
                  </p>
                )}
                {successMessage && (
                  <p className="text-center" style={{ marginTop: "1%", color: "red" }}>
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-center" style={{ marginTop: "1%", color: "red" }}>
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateStore;
