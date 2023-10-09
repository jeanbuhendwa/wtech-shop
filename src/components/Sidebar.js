import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { Fitrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div className="w-full bg-[#F2DFD8] top-0 h-full shadow-2xl">Sidebar</div>
  );
};

export default Sidebar;
