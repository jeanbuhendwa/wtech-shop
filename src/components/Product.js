import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, title, price } = item;
  return (
    <section>
      <div className="border border-[#D9C7C1] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-3 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(item, id)}>
            <div className="flex items-center justify-center w-10 h-10 text-[#F2DFD8] bg-[#8C4D3F]">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-10 h-10 bg-[#F2DFD8] flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold text-[#8C4D3F]">{price}</div>
      </div>
    </section>
  );
};

export default Product;
