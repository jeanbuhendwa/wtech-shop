import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";

const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredItems = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredItems.map((item) => {
              return <Product item={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
