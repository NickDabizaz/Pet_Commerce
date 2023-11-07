import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", data);
      const responseData = response.data;
      console.log(responseData);
      navigate("/"); // Navigasi ke halaman utama setelah login berhasil
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
      <div className="pt-12 pb-12">
        <div className="container-fluid rounded d-flex" style={{ width: "95%", height: "80vh", backgroundColor: "#FFFFFF" }}>
          <div className="container-fluid" style={{ width: "100%", height: "80vh", backgroundColor: ""}}>
            
          </div>
          <div className="container-fluid" style={{ width: "100%", height: "80vh", backgroundColor: "FFFFFF"}}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <button type="submit">Login</button>
            </form>
            <p>
              Belum punya akun? <Link to="/register">Daftar di sini</Link>
            </p>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
