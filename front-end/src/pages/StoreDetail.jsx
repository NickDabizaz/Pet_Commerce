import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { MainLayout } from "../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import trash from "../assets/trash.png";
import { useCookies } from "react-cookie";

function StoreDetail() {
  const navigate = useNavigate();
  let { store_id } = useParams();
  const [storeData, setStoreData] = useState(null);
  const [storepic, setStorePic] = useState();
  const [loading, setLoading] = useState();
  const [cookie, setCookie] = useCookies("user_id");
  const [products, setProducts] = useState([]);
  const [totalQtyMap, setTotalQtyMap] = useState({}); // Add state for totalQty

  useEffect(() => {
    // Function to fetch totalQty for a product
    const fetchTotalQty = async (productId) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/order/count/${productId}`
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
          `http://localhost:3000/sellers/store/${store_id}`
        );
        setProducts(response.data.products);

        // Fetch totalQty for each product
        response.data.products.forEach((product) => {
          fetchTotalQty(product.product_id);
        });

        axios
          .get(`http://localhost:3000/sellers/store/pic/${store_id}`)
          .then((res) => {
            setStorePic(res.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/sellers/store/${store_id}`)
      .then((response) => {
        setStoreData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [store_id]);

  if (!storeData) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  const handleDeleteItem = async (product_id) => {
    try {
      await axios.delete(
        `http://localhost:3000/sellers/${store_id}/delete-product/${product_id}`,
        {
          data: {
            user_id: cookie.user_id,
          },
        }
      );
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MainLayout />
      <div className="max-w-2xl mx-auto mt-4 p-4 bg-white shadow">
        <div
          className="btn p-0"
          style={{ fontSize: "2rem" }}
          onClick={() => {
            storeData.owner_id == cookie.user_id && navigate("/profile");
            storeData.owner_id != cookie.user_id && navigate(-1);
          }}
        >
          ⬅️
        </div>
        {console.log(storeData.owner_id)}
        {console.log(cookie.user_id)}
        <div className="text-center">
          <img
            src={
              storepic
                ? `http://localhost:3000/sellers/store/pic/${store_id}`
                : "https://static.vecteezy.com/system/resources/previews/002/267/032/non_2x/simple-store-icon-free-vector.jpg"
            }
            alt="pp-store"
            style={{
              width: "8rem",
              height: "8rem",
              objectFit: "cover",
              border: "1px solid black",
              borderRadius: "50%",
            }}
            className="m-auto"
          />
          <h2 className="text-2xl font-bold mb-2">{storeData.store_name}</h2>
          <p className="mb-4">{storeData.store_description}</p>
          <p className="mb-2">Owner: {storeData.owner}</p>
          <button
            onClick={() => navigate(`/store/report/${store_id}`)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Lihat Report
          </button>
        </div>

        <h3 className="text-xl font-bold mb-2">Products:</h3>
        <ul>
          {/* {console.log(storeData)} */}
          {storeData.products.map((product) => (
            <div
              key={product.product_id}
              className="bg-white border border-gray-300 m-4 p-0"
              style={{ display: "flex" }}
            >
              <img
                src={`http://localhost:3000/sellers/product/pic/${product.product_id}`}
                style={{ width: "10rem" }}
              ></img>
              <div className="m-3">
                <h3 className="text-xl mb-2">{product.product_name}</h3>
                <p className="text-danger mt-4" style={{ fontSize: "1.2rem" }}>
                  <span className="me-1" style={{ fontSize: "0.9rem" }}>
                    Rp
                  </span>
                  {product.price.toLocaleString("id-ID", {
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p style={{ display: "flex" }}>
                  <div>
                    <span style={{ fontSize: "0.75rem" }}>
                      {totalQtyMap[product.product_id] || 0} sold
                    </span>
                  </div>
                </p>
              </div>
              <div
                className="text-center mt-auto"
                style={{
                  flex: 1,
                  display: `${
                    storeData.owner_id === cookie.user_id ? "" : "none"
                  }`,
                }}
              >
                <button
                  className="btn btn-danger h-8 w-8 fs-3 p-0"
                  style={{ alignContent: "center" }}
                  onClick={() => handleDeleteItem(product.product_id)}
                >
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{
                      fontSize: "1rem",
                      marginTop: "0.5rem",
                      marginBottom: "1rem",
                      color: "",
                    }}
                  />
                  {/* <img
                    className="w-6 h-6 mx-auto invert"
                    src={trash}
                    alt="delete-item"
                    onClick={() => handleDeleteItem(product.product_id)}
                  /> */}
                </button>
              </div>
            </div>
          ))}
        </ul>
        <div
          className="btn btn-primary"
          onClick={() => navigate(`/store/${store_id}/form-add-product`)}
        >
          Add new Product
        </div>
      </div>
    </>
  );
}

export default StoreDetail;
