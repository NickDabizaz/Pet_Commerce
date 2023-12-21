import { useState, useEffect } from "react";
import axios from "axios";
import { MainLayout } from "../Components"; // Import Loader component
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import filter from "../assets/filter-icon.png";

function HomePage() {
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [totalQtyMap, setTotalQtyMap] = useState({}); // Add state for totalQty
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch totalQty for a product
    const fetchTotalQty = async (productId) => {
      try {
        const response = await axios.get(
          `https://petcommerce-backend.onrender.com/order/count/${productId}`
        );
        setTotalQtyMap((prevTotalQtyMap) => ({
          ...prevTotalQtyMap,
          [productId]: response.data.totalQty,
        }));
      } catch (error) {
        console.error(
          `Error fetching totalQty for product ${productId}:`,
          error
        );
      }
    };

    // Function to fetch products and their totalQty
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://petcommerce-backend.onrender.com/sellers/get-all-products"
        );
        setProducts(response.data);

        // Fetch totalQty for each product
        response.data.forEach((product) => {
          fetchTotalQty(product.product_id);
        });

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MainLayout />
      <div className="mx-auto max-w-screen-xl mt-4">
        <h1 className="text-2xl font-bold mb-4">List of Products</h1>
        {loading ? (
          <div className="loader-container">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <span>
              <img
                src={filter}
                width={"20rem"}
                style={{ display: "initial" }}
                onClick={() => {
                  navigate("/search/products?q=");
                }}
              />
              <div
                onClick={() => {
                  navigate("/search/products?q=");
                }}
              >
                Filter
              </div>
            </span>
            <div className="grid grid-cols-4 gap-4 mb-4">
              {products.map((product) => (
                <div
                  key={product.product_id}
                  className="bg-white border border-gray-300 prod-card"
                  onClick={() => {
                    navigate(`/products/${product.product_id}`);
                  }}
                >
                  <div className="h-72 max-h-72 border-b-2">
                    <img
                      src={`https://petcommerce-backend.onrender.com/sellers/product/pic/${product.product_id}`}
                      alt={product.product_name}
                      className="h-full m-auto w-full object-contain"
                    ></img>
                  </div>
                  <div className="m-3">
                    <h3 className="text-xl mb-2">{product.product_name}</h3>
                    <p
                      className="text-danger mt-4"
                      style={{ fontSize: "1.2rem" }}
                    >
                      <span className="me-1" style={{ fontSize: "0.9rem" }}>
                        Rp
                      </span>
                      {product.price.toLocaleString("id-ID", {
                        maximumFractionDigits: 2,
                      })}
                    </p>
                    <p style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: "0.75rem" }}>
                          {totalQtyMap[product.product_id] || 0} sold
                        </span>
                      </div>
                      <div className="text-end">{/* Your button code */}</div>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default HomePage;
