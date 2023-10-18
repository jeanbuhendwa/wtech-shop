import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);

  const maleItems = products.filter((item) => {
    return item.category === "men's clothing";
  });
  const womenItems = products.filter((item) => {
    return item.category === "women's clothing";
  });

  const electroItems = products.filter((item) => {
    return item.category === "electronics";
  });

  const jewelryItems = products.filter((item) => {
    return item.category === "jewelery";
  });
  return (
    <>
      <Hero />
      <section className="pb-20">
        <div className="container mx-auto pt-20">
          <h2 className="text-3xl font-semibold text-primary mb-[20px]">
            Men Clothing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {maleItems.map((item) => {
              return <Product item={item} key={item.id} />;
            })}
          </div>
        </div>
        <div className="container mx-auto pt-20">
          <h2 className="text-3xl font-semibold text-primary mb-[20px]">
            Female Clothing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {womenItems.map((item) => {
              return <Product item={item} key={item.id} />;
            })}
          </div>
        </div>
        <div className="container mx-auto pt-20">
          <h2 className="text-3xl font-semibold text-primary mb-[20px]">
            Electronics Gadgets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {electroItems.map((item) => {
              return <Product item={item} key={item.id} />;
            })}
          </div>
        </div>
        <div className="container mx-auto pt-20">
          <h2 className="text-3xl font-semibold text-primary mb-[20px]">
            Jewelery Items
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {jewelryItems.map((item) => {
              return <Product item={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
