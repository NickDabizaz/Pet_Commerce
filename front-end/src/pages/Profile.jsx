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
      <div className=" m-5 bg-warning">
        <h1 style={{ fontSize: "2rem" }}>My Profile</h1>
        <h1 style={{ fontSize: "1.5rem" }}>Manage your account</h1>
        <div className="mt-5" style={{ display: "flex" }}>
          <div className="m-auto" style={{ width: "50rem" }}>
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
                      placeholder={response.name}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="text-end">Email:</td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      placeholder={response.email}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="text-end">Address:</td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      placeholder={response.address}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="text-end">Phone Number:</td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      placeholder={response.phone_number}
                    ></input>
                  </td>
                </tr>
              </table>
            </form>
          </div>
          <div></div>
          <div
            className="m-auto"
            style={{
              width: "10rem",
              height: "10rem",
              objectFit: "cover",
            }}
          >
            <img
              src={dogo}
              style={{
                height: "10rem",
                objectFit: "cover",
                borderRadius: "50%  ",
              }}
            />
          </div>
        </div>
      </div>
      <div>List Toko:</div>
    </>
  );
}

export default Profile;
