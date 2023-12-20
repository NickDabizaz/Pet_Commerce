import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const StoreReport = () => {
  const [cookies] = useCookies(["user_id"]);
  const navigate = useNavigate();
  const { store_id } = useParams();
  const [storeData, setStoreData] = useState(null);
  const [reportData, setReportData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [storeResponse, reportResponse] = await Promise.all([
          axios.get(`http://localhost:3000/sellers/store/${store_id}`),
          axios.get(`http://localhost:3000/order/report/${store_id}`),
        ]);

        setStoreData(storeResponse.data);
        setReportData(reportResponse.data);

        if (
          storeResponse.data.products &&
          storeResponse.data.products.length > 0
        ) {
          const productsWithQuantity = await Promise.all(
            storeResponse.data.products.map(async (product) => {
              const productReportResponse = await axios.get(
                `http://localhost:3000/order/report/product/${product.product_id}`
              );
              return {
                ...product,
                totalQuantity:
                  productReportResponse.data.totalQuantity.total_quantity,
              };
            })
          );

          setStoreData((prevStoreData) => ({
            ...prevStoreData,
            products: productsWithQuantity,
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (store_id) {
      fetchData();
    }
  }, [store_id]);

  console.log({ storeData, reportData });

  return (
    <>
      <div className="container mx-auto p-4">
        {isLoading ? (
          <p className="text-center text-lg font-bold mt-4">Loading...</p>
        ) : (
          <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-md">
            {storeData ? (
              <>
                <div className="flex items-center mb-4">
                  <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                  <h1 className="text-3xl font-bold ml-4">
                    {storeData.store_name}
                  </h1>
                </div>

                {reportData ? (
                  <>
                    <h2 className="text-xl font-bold mb-2">
                      Total Transaction: {reportData.data}
                    </h2>
                    {storeData.products && storeData.products.length > 0 ? (
                      <table className="w-full border-collapse border border-gray-400 mt-4">
                        <thead>
                          <tr className="bg-gray-200">
                            <th className="py-2 px-4 border">Product Name</th>
                            <th className="py-2 px-4 border">Total Penjualan</th>
                          </tr>
                        </thead>
                        <tbody>
                          {storeData.products.map((product) => (
                            <tr key={product.product_id}>
                              <td className="py-2 px-4 border">
                                {product.product_name}
                              </td>
                              <td className="py-2 px-4 border">
                                {product.totalQuantity}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="mt-4">No products available.</p>
                    )}
                  </>
                ) : (
                  <p className="mt-4">No report data available.</p>
                )}
              </>
            ) : (
              <p className="mt-4">No store data available.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};
