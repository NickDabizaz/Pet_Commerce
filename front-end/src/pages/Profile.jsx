import React, { useEffect, useState } from "react";
import { MainLayout } from "../Components";
import dogo from "../assets/dogo.jpg";
import axios from "axios";
import { useCookies } from "react-cookie";

function Profile() {
  const [cookie, setCookie] = useCookies("user_id");
  const [response, setResponse] = useState([]);
  console.log(cookie);

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
  //   console.log(response);

  return (
    <>
      <MainLayout />
      <div className="text-center">
        <h1>Profile</h1>
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
        <div>Nama: {</div>
        <div>Email</div>
        <div>Address</div>
        <div>Phone Number</div>
      </div>
    </>
  );
}

export default Profile;
