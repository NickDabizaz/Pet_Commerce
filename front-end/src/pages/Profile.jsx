import React, { useEffect, useState } from "react";
import { MainLayout } from "../Components";
import dogo from "../assets/dogo.jpg";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

function Profile() {
  const [cookie, setCookie, removeCookie] = useCookies("user_id");
  const [response, setResponse] = useState([]);
  const [toko, setToko] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${cookie.user_id}`)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get(`http://localhost:3000/users/store/${cookie.user_id}`)
      .then((res) => {
        setToko(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  //   console.log(response);
  console.log(toko);

  return (
    <>
      <MainLayout />
      <div className="m-5">
        <h1 style={{ fontSize: "2rem" }}>My Profile</h1>
        <h1 style={{ fontSize: "1.5rem" }}>Manage your account</h1>
        <div className="mt-5" style={{ display: "flex" }}>
          <div className="mx-auto" style={{ width: "50rem" }}>
            <form>
              <table className="table text-start">
                <tr>
                  <td className="text-end" style={{ width: "10rem" }}>
                    Nama:
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={response.name}
                    ></input>
                  </td>
                </tr>
                <tr style={{ height: "1rem" }}></tr>
                <tr>
                  <td className="text-end">Email:</td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={response.email}
                    ></input>
                  </td>
                </tr>
                <tr style={{ height: "1rem" }}></tr>
                <tr>
                  <td className="text-end">Address:</td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={response.address}
                    ></input>
                  </td>
                </tr>
                <tr style={{ height: "1rem" }}></tr>
                <tr>
                  <td className="text-end">Phone Number:</td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={response.phone_number}
                    ></input>
                  </td>
                </tr>
              </table>
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  Save
                </button>
              </div>
            </form>
          </div>

          {/* ---------Garis Abu---------------- */}

          <div
            className="mx-auto"
            style={{
              width: "20rem",
              height: "20rem",
              objectFit: "cover",
              display: "flex",
            }}
          >
            <div
              className="bg-black bg-opacity-25 me-4"
              style={{
                height: "20rem",
                width: "0.1rem",
              }}
            ></div>
            <div
              className=" text-center"
              style={{ display: "block", width: "15rem" }}
            >
              <img
                className="mx-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlETyc4RCQOt5YVtW2mbRuR3wdxFVDD8R6BA&usqp=CAU"
                style={{
                  height: "10rem",
                  width: "10rem",
                  objectFit: "cover",
                  borderRadius: "50%  ",
                  border: "1px solid black",
                }}
              />
              <div className="mx-auto mt-3">
                <button className="mx-auto btn btn-secondary">
                  Select Image
                </button>
              </div>
              <br />
              <div className="mx-auto">
                File size: maximum 1 MB <br />
                File extension: .JPEG, .PNG
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5">
        <button
          className="btn btn-danger mx-4"
          onClick={() => {
            removeCookie("user_id");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
      <div className="m-5">
        <div
          className="btn btn-success"
          onClick={() => navigate("/create-store")}
        >
          Add New Store
        </div>
        <h1 style={{ fontSize: "2rem" }} className="mb-2">
          List Toko:
        </h1>
        {toko.map((toko) => (
          <>
            <div
              className="border border-dark rounded-1 mb-4"
              onClick={() => navigate(`/store/${toko.store_id}`)}
            >
              <div className="m-4 row">
                <div className="col-1">
                  <img
                    src="https://icon-library.com/images/guest-icon-png/guest-icon-png-29.jpg"
                    alt="icon-toko"
                    style={{
                      objectFit: "cover",
                      border: "1px solid black",
                      borderRadius: "50%",
                      height: "5rem",
                    }}
                  />
                </div>
                <div className="col-1">
                  <div style={{ fontSize: "1.2rem" }}>{toko.store_name}</div>
                  <div>{toko.store_description}</div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Profile;
