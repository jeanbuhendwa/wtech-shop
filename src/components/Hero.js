import React from "react";
import BgImg from "../img/ecom_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-[#8C5245] mr-3"></div>Welcome
          </div>
          <h1 className="text-[55px] leading-[1.1] font-light mb-4 uppercase mt-[20px]">
            Shop the latest trends at
            <br />
            <span className="font-semibold">WTech Shop</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img className="w-[700px] h-auto" src={BgImg} alt="BG Hero Img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
