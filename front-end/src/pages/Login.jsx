/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import login from "../assets/login.png";
import loginpict from "../assets/loginpict.png";
import { useCookies } from "react-cookie";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user_id"]);

  const onSubmit = async (data) => {
    if (data.email == "admin@admin.com" && data.password == "admin") {
      navigate("/admin");
      setCookie("user_id", -1);
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        data
      );
      const responseData = response.data;
      setCookie("user_id", responseData.user_id, { path: "/" }); // Set cookie dengan user_id dari responseData
      navigate(-1); // Navigasi ke halaman utama setelah login berhasil
    } catch (error) {
      if (error.response) {
        // Request berhasil dikirim tetapi server merespons dengan status yang tidak dalam kisaran 2xx
        setErrorMessage(error.response.data);
      } else {
        // Request tidak berhasil dikirim
        setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
      }
    }
  };

  useEffect(() => {
    if (cookies.user_id) navigate("/");
  }, []);

  return (
    <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>
      <div className="pt-20 pb-20">
        <div
          className="container-fluid rounded d-flex shadow"
          style={{
            width: "90%",
            height: "80vh",
            backgroundColor: "#6CD4FF",
            overflow: "hidden",
          }}
        >
          <div
            className="container-fluid rounded"
            style={{ width: "100%", height: "75vh", position: "relative" }}
          >
            <Link to="/">
              <img
                src={logo}
                style={{
                  width: "30vh",
                  height: "30vh",
                  left: -10,
                  position: "absolute",
                  zIndex: 2,
                }}
              />
            </Link>
            <img
              src={loginpict}
              className="rounded"
              style={{
                width: "120vh",
                height: "38rem",
                left: -15,
                top: -5,
                position: "absolute",
                zIndex: 1,
              }}
            />
          </div>
          <div
            className="container-fluid rounded"
            style={{
              width: "60%",
              height: "75vh",
              marginTop: "2.5vh",
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src={login}
              style={{
                display: "block",
                margin: "0 auto",
                width: "12rem",
                height: "6rem",
                marginTop: "4%",
              }}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  style={{
                    marginLeft: "3%",
                    fontWeight: 700,
                    marginBottom: "1%",
                    marginTop: "3%",
                  }}
                >
                  Email
                </label>
                <input
                  className="form-control"
                  style={{ marginLeft: "3%", width: "94%" }}
                  type="email"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              <div>
                <label
                  style={{
                    marginTop: "7%",
                    marginLeft: "3%",
                    fontWeight: 700,
                    marginBottom: "1%",
                  }}
                >
                  Password
                </label>
                <input
                  className="form-control"
                  style={{ marginLeft: "3%", width: "94%" }}
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>
              <button
                type="submit"
                className="btn btn-info"
                style={{
                  backgroundColor: "#C46E85",
                  borderColor: "#C46E85",
                  marginTop: "8%",
                  marginLeft: "3%",
                  fontWeight: 700,
                  width: "94%",
                  height: "2.5rem",
                  color: "white",
                }}
              >
                Login
              </button>
            </form>
            <p className="text-center" style={{ marginTop: "8%" }}>
              Don&#39;t Have Any Account?{" "}
              <Link to="/register">
                <b style={{ color: "#D39C39" }}>Register Here</b>
              </Link>
            </p>
            {errors.email && (
              <p
                className="text-center"
                style={{ marginTop: "1%", color: "red" }}
              >
                {errors.email.message}
              </p>
            )}
            {errors.password && (
              <p
                className="text-center"
                style={{ marginTop: "1%", color: "red" }}
              >
                {errors.password.message}
              </p>
            )}
            {errorMessage && (
              <p
                className="text-center"
                style={{ marginTop: "5%", color: "red" }}
              >
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
