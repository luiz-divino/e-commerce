import { useState, useEffect } from "react";
import { BsCartPlus } from "react-icons/bs";
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
    <>
    {product.map((item)=>(
    <section className="w-full" key={item.id}>

        <img src={item.images} alt={item.title} className="w-full max-h-70 mb-2 rounded-lg" />

      <p>{item.title}</p>

      <div className="flex gap-3 items-center">
        <strong>{item.price.toLocaleString('pt-BR',{
            style:"currency",
            currency: 'BRL'
        })}</strong>
        <button>
            <BsCartPlus size={20}/>
        </button>
      </div>
    </section>

    ))}
    </>
  );
};
