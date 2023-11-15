import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import addpict from "../assets/add.png";

export default function FormAddProduct() {
  const [cookies] = useCookies(["user_id"]);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { store_id } = useParams()

  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("http://localhost:3000/categories");
      setCategories(response.data);
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const onSubmit = async ({ product_name, price, quantity, rating, category_id }) => {
    try {
      setLoading(true);

      const { user_id } = cookies;
      rating = 0;

      const response = await axios.post("http://localhost:3000/sellers/add-product", {
        user_id,
        product_name,
        price,
        quantity,
        rating,
        category_id,
        store_id
      });
      console.log({ response });

      setLoading(false);
      navigate(`/store/${store_id}`);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-fluid" style={{ backgroundColor: "#1286CE" }}>
      <div className="pt-20 pb-20">
        <div
          className="container-fluid rounded d-flex shadow"
          style={{
            width: "70%",
            height: "105vh",
            backgroundColor: "#6CD4FF",
            overflow: "hidden",
          }}
        >
          <div
            className="container-fluid rounded"
            style={{
              width: "100%",
              height: "100vh",
              marginTop: "2.5vh",
              backgroundColor: "#FFFFFF",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <img
                src={addpict}
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "26rem",
                  height: "5rem",
                  marginTop: "1%"
                }}
              />
              <div>
                <label
                  style={{
                    marginLeft: "2%",
                    fontWeight: 700,
                    marginBottom: "1%",
                    marginTop: "1%",
                  }}
                >
                  Product Name
                </label>
                <input
                  className="form-control"
                  style={{ marginLeft: "2%", width: "96%" }}
                  type="text"
                  placeholder="Product name"
                  {...register("product_name", { required: "Product name is required" })}
                />
              </div>
              <div>
                <label
                  style={{
                    marginLeft: "2%",
                    fontWeight: 700,
                    marginBottom: "1%",
                    marginTop: "3%",
                  }}
                >
                  Price
                </label>
                <input
                  className="form-control"
                  style={{ marginLeft: "2%", width: "96%" }}
                  type="number"
                  placeholder="Price"
                  {...register("price", { required: "Price is required" })}
                />
              </div>
              <div>
                <label
                  style={{
                    marginLeft: "2%",
                    fontWeight: 700,
                    marginBottom: "1%",
                    marginTop: "3%",
                  }}
                >
                  Quantity
                </label>
                <input
                  className="form-control"
                  style={{ marginLeft: "2%", width: "96%" }}
                  type="number"
                  placeholder="Quantity"
                  {...register("quantity", { required: "Quantity is required" })}
                />
              </div>
              <div>
                <label
                  style={{
                    marginLeft: "2%",
                    fontWeight: 700,
                    marginBottom: "1%",
                    marginTop: "3%",
                  }}
                >
                  Category
                </label>
                <select className="form-select" style={{ marginLeft: "2%", width: "96%" }} {...register("category_id")}>
                  <option value={categories[0].category_id}>{categories[0].category_name}</option>

                  {categories.map(category => (
                    <option key={category.category_id} value={category.category_id}>
                      {category.category_name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-info"
                disabled={loading}
                style={{
                  backgroundColor: "#C46E85",
                  borderColor: "#C46E85",
                  marginTop: "4%",
                  marginLeft: "2%",
                  fontWeight: 700,
                  width: "96%",
                  height: "2.5rem",
                  color: "white",
                }}
              >
                {loading ? "Submitting..." : "Add Product"}
              </button>
            </form>
            <p className="text-center" style={{ marginTop: "2%" }}>
              Change Of Mind?{" "}
              <b className="cursor-pointer" style={{ color: "#D39C39" }} onClick={() => { navigate(`/store/${store_id}`) }}>Back To Store</b>
            </p>
            {errors.product_name && (
              <p
                className="text-center"
                style={{ marginTop: "1%", color: "red" }}
              >
                {errors.product_name.message}
              </p>
            )}
            {errors.price && (
              <p
                className="text-center"
                style={{ marginTop: "1%", color: "red" }}
              >
                {errors.price.message}
              </p>
            )}
            {errors.quantity && (
              <p
                className="text-center"
                style={{ marginTop: "1%", color: "red" }}
              >
                {errors.quantity.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}