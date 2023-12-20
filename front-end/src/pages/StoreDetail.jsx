import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { MainLayout } from "../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import trash from "../assets/trash.png";
import { useCookies } from "react-cookie";
import { Button, Modal } from "react-bootstrap";

function StoreDetail() {
  const navigate = useNavigate();
  let { store_id } = useParams();
  const [storeData, setStoreData] = useState(null);
  const [storepic, setStorePic] = useState();
  const [loading, setLoading] = useState();
  const [cookie, setCookie] = useCookies("user_id");
  const [products, setProducts] = useState([]);
  const [totalQtyMap, setTotalQtyMap] = useState({}); // Add state for totalQty
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState(-1);
  const [productName, setProductName] = useState(null)
  const [productDescription, setProductDescription] = useState(null)
  const [productQuantity, setProductQuantity] = useState(null)
  const [productPrice, setProductPrice] = useState(null)
  const [productRating, setProductRating] = useState(null)
  const [productCategory, setProductCategory] = useState(null)
  const [categories, setCategories] = useState([]);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = async (product_id) => {
    setProductId(product_id);

    const response = await axios.get(
      `https://petcommerce-backend.onrender.com/sellers/product/${product_id}`
    );

    const response1 = await axios.get("https://petcommerce-backend.onrender.com/categories");
    setCategories(response1.data);

    setProductName(response.data.product_name)
    setProductDescription(response.data.product_description)
    setProductPrice(response.data.price)
    setProductRating(response.data.rating)
    setProductQuantity(response.data.quantity)
    setProductCategory(response.data.category_id)

    setShowModal(true);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value)
    console.log(productName);
  }

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value)
    console.log(encodeURIComponent(productDescription));
  }

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value)
    console.log(productPrice);
  }

  const handleProductQuantityChange = (e) => {
    setProductQuantity(e.target.value)
    console.log(productQuantity);
  }

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value)
    console.log(productCategory);
  }

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
          `https://petcommerce-backend.onrender.com/sellers/store/${store_id}`
        );
        setProducts(response.data.products);

        // Fetch totalQty for each product
        response.data.products.forEach((product) => {
          fetchTotalQty(product.product_id);
        });

        axios
          .get(`https://petcommerce-backend.onrender.com/sellers/store/pic/${store_id}`)
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
      .get(`https://petcommerce-backend.onrender.com/sellers/store/${store_id}`)
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
        `https://petcommerce-backend.onrender.com/sellers/${store_id}/delete-product/${product_id}`,
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
  }

  const handleEditItem = async (product_id) => {
    {console.log(cookie.user_id)}
    try {
      await axios.put(
        `https://petcommerce-backend.onrender.com/sellers/${store_id}/edit-product/${product_id}`,
        {
          data: {
            user_id: cookie.user_id,
            product_name: productName,
            price: productPrice,
            quantity: productQuantity,
            rating: productRating,
            category_id: productCategory
          },
        }
      );
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  }

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
        <div className="text-center">
          <img
            src={
              storepic
                ? `https://petcommerce-backend.onrender.com/sellers/store/pic/${store_id}`
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
                src={`https://petcommerce-backend.onrender.com/sellers/product/pic/${product.product_id}`}
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
                className="text-center ms-auto mt-auto bg-dark"
                style={{
                  flex: 1,
                  maxWidth: "2rem",
                  display: `${storeData.owner_id === cookie.user_id ? "" : "none"
                    }`,
                }}
              >
                <button
                  className="btn btn-success h-8 w-8 fs-3 p-0"
                  style={{ alignContent: "center" }}
                  onClick={() => handleShowModal(product.product_id)}
                >
                  <FontAwesomeIcon
                    icon={faPen}
                    style={{
                      fontSize: "1rem",
                      marginTop: "0.5rem",
                      marginBottom: "1rem",
                      color: "",
                    }} /></button>
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


      <Modal
        show={showModal}
        onHide={handleCloseModal}
        style={{ backgroundColor: "transparent" }}
      >
        <Modal.Header closeButton style={{ color: "#000" }}>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "#000" }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              min="1"
              value={productName}
              onChange={handleProductNameChange}
            />

            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows={3}
              value={decodeURIComponent(productDescription)}
              onChange={handleProductDescriptionChange}
            />

            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="name"
              min="1"
              value={productQuantity}
              onChange={handleProductQuantityChange}
            />

            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="name"
              min="1"
              value={productPrice}
              onChange={handleProductPriceChange}
            />
            
            <label htmlFor="quantity" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              value={productCategory}
              onChange={handleProductCategoryChange}
            >
              {categories.map((category) => (
                <option
                  key={category.category_id}
                  value={category.category_id}
                >
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-danger"
            className="no-hover"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
          <Button
            variant="outline-warning"
            className="no-hover"
            onClick={() => handleEditItem(productId)}
          >
            Save change
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StoreDetail;
