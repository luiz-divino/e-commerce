import { useState, useEffect } from "react";
import { IProduct } from "../../interfaces/contract";
import api from "../../api/api";

export const Card = () => {
  const [product, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api();
        setProduct(response.products);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, []);

  return (
    <section className="w-full">
      <img src="#" alt="#" />
      <p>product name</p>
      <div>
        <strong>product price</strong>
        <button>add to cart</button>
      </div>
    </section>
  );
};
