import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { MainLayout } from "../Components";
import { Link } from "react-router-dom";

function History() {
  const [cookies] = useCookies(["user_id"]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://petcommerce-backend.onrender.com/users/${cookies.user_id}`)
      .then((res) => {
        setUserData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [cookies.user_id]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://petcommerce-backend.onrender.com/order/${cookies.user_id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [cookies.user_id]);

  return (
    <>
      {
        isLoading?"Loading...":
        <div className="bg-gray-100 min-h-screen">
          <MainLayout />
          <p className="text-center mt-4 font-bold text-3xl">Transaction History</p>
          <div className="mx-4 mt-4">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              data.map((item) => (
                <div
                  key={item.order_id}
                  className="max-w-xl mx-auto mb-4 bg-white rounded-md overflow-hidden shadow-md"
                >
                  <div className="p-4">
                    <h5 className="text-xl font-semibold mb-2">
                      Order ID: {item.order_id}
                    </h5>
                    <h6 className="text-gray-600 mb-4">Name: {userData.name}</h6>
                    <p className="text-sm">
                      Order Date: {new Date(item.order_date).toLocaleDateString()}
                      <br />
                      Total Price: Rp{" "}
                      {item.total_price.toLocaleString("id-ID", {
                        maximumFractionDigits: 2,
                      })}
                    </p>
                    <div className="flex justify-end mt-4">
                      <Link
                        to={`${item.order_id}`}
                        className="text-blue-500 underline"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      }
    </>
  );
}

export default History;
