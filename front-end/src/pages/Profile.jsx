import React, { useEffect, useState } from "react";
import { MainLayout } from "../Components";
import dogo from "../assets/dogo.jpg";
import axios from "axios";
import { useCookies } from "react-cookie";

function Profile() {
  const [cookie, setCookie] = useCookies("user_id");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${cookie.user_id}`)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(response);

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
                src={dogo}
                style={{
                  height: "10rem",
                  width: "10rem",
                  objectFit: "cover",
                  borderRadius: "50%  ",
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
      <div>List Toko:</div>
    </>
  );
}

export default Profile;
