import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../Product";
function Events() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await axios.get("http://localhost:8080/student");
      const datas = response.data;
      console.log(datas);
      setProducts(datas);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="m-10 items-center">
        <div className="text-center mt-52 m-10 items-center gap-10">
          <button className="text-center border-black border-2 rounded-lg p-1">
            Our Features
          </button>
          <h1 className="text-2xl font-bold my-4">Events & Celebrations</h1>
          <p>
            At Little Learners Academy, we celebrate every milestone and create
            cherished memories for our students. Throughout the year, we host a
            variety of events and celebrations that bring the entire school
            community together. Some of our memorable events include
          </p>
        </div>
        <div className="flex gap-5">
          {products.map((item) => (
            <Products key={item.id} {...item} />
          ))}
        </div>
        <div>
          <Products />
        </div>
      </div>
    </>
  );
}
export default Events;
