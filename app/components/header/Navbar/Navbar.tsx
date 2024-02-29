'use client';

import Button from "../../Button";
import Logo from "./Logo";
import NavItems from "./navItems";


// export default function Navbar() {
//   return (
//     <nav className=" border-b-tgreen border-b-4 flex justify-between items-center min-h-[80px]">
//       <Logo />
//     <NavItems />
//       <Button text="Se Connecter"
//       />
//     </nav>
//   );
// }
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b-tgreen border-b-4 flex justify-between items-center min-h-[80px]">
      <Logo />
      <div className="md:hidden">
        {isOpen ? (
          <FaTimes className="text-2xl" onClick={toggleSidebar} />
        ) : (
          <FaBars className="text-2xl" onClick={toggleSidebar} />
        )}
      </div>
      <div className={`md:flex ${isOpen ? "flex flex-col" : "hidden"}`}>
        <NavItems />
        <Button  text="Se Connecter" />
      </div>
    </nav>
  );
}