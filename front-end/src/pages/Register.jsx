import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import regist from "../assets/regist.png";
import registerpict from "../assets/registerpict.jpg";
import { useCookies } from "react-cookie";

const Register = () => {
  const [cookie, setCookie] = useCookies("user_id");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        data
      );
      const responseData = response.data;
      console.log(responseData);

      const user = await axios.get("http://localhost:3000/users");

      setCookie("user_id");
      navigate("/homepage"); // Navigasi ke halaman muka setelah registrasi berhasil
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

  return (
    <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>
      <div className="pt-20 pb-20">
        <div
          className="container-fluid rounded d-flex shadow"
          style={{
            width: "90%",
            height: "135vh",
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
              src={registerpict}
              className="rounded"
              style={{
                width: "120vh",
                height: "980px",
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
              width: "70%",
              height: "130vh",
              marginTop: "2.5vh",
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src={regist}
              style={{
                display: "block",
                margin: "0 auto",
                width: "14rem",
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
                  Name:
                </label>
                <input
                  className="form-control"
                  style={{ marginLeft: "3%", width: "94%" }}
                  type="text"
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              <div>
                <label
                  style={{
                    marginTop: "3%",
                    marginLeft: "3%",
                    fontWeight: 700,
                    marginBottom: "1%",
                  }}
                >
                  Email:
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
                    marginTop: "3%",
                    marginLeft: "3%",
                    fontWeight: 700,
                    marginBottom: "1%",
                  }}
                >
                  Password:
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
              <div>
                <label
                  style={{
                    marginTop: "3%",
                    marginLeft: "3%",
                    fontWeight: 700,
                    marginBottom: "1%",
                  }}
                >
                  Address:
                </label>
                <input
                  className="form-control"
                  style={{ marginLeft: "3%", width: "94%" }}
                  type="text"
                  {...register("address", { required: "Address is required" })}
                />
              </div>
              <div>
                <label
                  style={{
                    marginTop: "3%",
                    marginLeft: "3%",
                    fontWeight: 700,
                    marginBottom: "1%",
                  }}
                >
                  Phone Number:
                </label>
                <input
                  className="form-control"
                  style={{ marginLeft: "3%", width: "94%" }}
                  type="text"
                  {...register("phone_number", {
                    required: "Phone Number is required",
                  })}
                />
              </div>
              <div>
                <label
                  style={{
                    marginTop: "3%",
                    marginLeft: "3%",
                    fontWeight: 700,
                    marginBottom: "1%",
                  }}
                >
                  Role:
                </label>
                <div style={{ marginLeft: "3%" }}>
                  <input
                    className="form-check-input"
                    type="radio"
                    {...register("role", { required: "Role is required" })}
                    value="seller"
                  />
                  <label style={{ marginLeft: "1.5%" }}>Seller</label>
                  <input
                    className="form-check-input"
                    style={{ marginLeft: "8%" }}
                    type="radio"
                    {...register("role", { required: "Role is required" })}
                    value="customer"
                  />
                  <label style={{ marginLeft: "1.5%" }}>Customer</label>
                </div>
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
                Register
              </button>
            </form>
            <p className="text-center" style={{ marginTop: "8%" }}>
              Already Have Account?{" "}
              <Link to="/login">
                <b style={{ color: "#D39C39" }}>Login Here</b>
              </Link>
            </p>
            {errors.name && (
              <p
                className="text-center"
                style={{ marginTop: "1%", color: "red" }}
              >
                {errors.name.message}
              </p>
            )}
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
            {errors.address && (
              <p
                className="text-center"
                style={{ marginTop: "1%", color: "red" }}
              >
                {errors.address.message}
              </p>
            )}
            {errors.phone_number && (
              <p
                className="text-center"
                style={{ marginTop: "1%", color: "red" }}
              >
                {errors.phone_number.message}
              </p>
            )}
            {errors.role && (
              <p
                className="text-center"
                style={{ marginTop: "1%", color: "red" }}
              >
                {errors.role.message}
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

export default Register;
