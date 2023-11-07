import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/users/register', data);
      const responseData = response.data;
      console.log(responseData);
      navigate("/login"); // Navigasi ke halaman login setelah registrasi berhasil
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
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            {...register('address', { required: 'Address is required' })}
          />
          {errors.address && <p>{errors.address.message}</p>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            {...register('phone_number', { required: 'Phone Number is required' })}
          />
          {errors.phone_number && <p>{errors.phone_number.message}</p>}
        </div>
        <div>
          <label>Role:</label>
          <div>
            <input
              type="radio"
              {...register('role', { required: 'Role is required' })}
              value="seller"
            />
            <label>Seller</label>
          </div>
          <div>
            <input
              type="radio"
              {...register('role', { required: 'Role is required' })}
              value="customer"
            />
            <label>Customer</label>
          </div>
          {errors.role && <p>{errors.role.message}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Sudah punya akun? <Link to="/login">Login sekarang</Link></p>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Register;
