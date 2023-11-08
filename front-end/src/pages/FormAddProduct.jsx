import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FormAddProduct() {
  const [cookies] = useCookies(["user_id"]);
  const { 
    register,
    handleSubmit, 
    formState: { errors }
  } = useForm();
  const {store_id} = useParams()

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

  const onSubmit = async ({product_name, price, quantity, rating, category_id}) => {
    try {
      setLoading(true);
      
      const { user_id } = cookies;
      
      const response = await axios.post("http://localhost:3000/sellers/add-product", {
        user_id, 
        product_name,
        price,
        quantity,
        rating,
        category_id,
        store_id
      });
      console.log({response});
      
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-10 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

      <div className="space-y-2">
        <input 
          {...register("product_name", { required: "Product name is required" })}
          className="w-full border p-2" 
          type="text" 
          placeholder="Product name" 
        />
        {errors.product_name && <p className="text-red-500">{errors.product_name.message}</p>}
        
        <input
          {...register("price", { required: "Price is required" })}
          className="w-full border p-2"
          type="number" 
          placeholder="Price" 
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}

        <input
          {...register("quantity", { required: "Quantity is required" })}
          className="w-full border p-2"
          type="number"
          placeholder="Quantity"
        />
        {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}

        <input
          {...register("rating", { required: "Rating is required" })}
          className="w-full border p-2" 
          type="number"
          placeholder="Rating" 
        />
        {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}

        <select {...register("category_id")}>
          <option value={categories[0].category_id}>{categories[0].category_name}</option>
            
          {categories.map(category => (
            <option key={category.category_id} value={category.category_id}>
              {category.category_name}
            </option>
          ))}
        </select>

        <button 
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Product"}
        </button>
      </div>
    </form>
  );
}