import React, { useEffect, useState } from "react";
import { MainLayout } from "../Components";
import dogo from "../assets/dogo.jpg";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [cookie, setCookie] = useCookies("user_id");
  const [response, setResponse] = useState([]);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${cookie.user_id}`)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

      const fetchStores = async () => {
        const user_id = cookie.user_id;
        
        const response = await fetch(`http://localhost:3000/users/store/${user_id}`);
        const data = await response.json();
        
        setStores(data);
      }

      fetchStores()
  }, [cookie]);
  console.log(response);

const navigate = useNavigate()

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
      <div className="btn btn-success" onClick={()=>navigate("/create-store")}>Add New Store</div>
      <div>
        {stores.map(store => (
          <div key={store.store_id} className="mb-4 p-4 border border-gray-300 rounded">
            <h3 className="text-xl mb-2">{store.store_name}</h3>
            <div className="btn btn-primary" onClick={() => navigate(`/store/${store.store_id}`)}>See Detail Store</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Profile;
