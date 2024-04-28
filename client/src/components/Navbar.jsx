import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo-black.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="navbar bg-base-100">
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" style={{ borderRadius: '50%' }} />
      </div>
      {/* <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Tutorials" ].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-black animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Tutorials"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div> */}
      <div className="flex-none">
    <ul className="menu menu-horizontal px-5 justify-between text-lg text-white">
      <li><a href="https://coinmarketcap.com/currencies/ethereum/">Market</a></li>
      <li className="ml-5"><a href="https://www.youtube.com/watch?v=N920p250fmU&list=PLAAsdVgd9DsLLTBsIHEoE8VJzCdVBXYBE">Tutorials</a></li> 
    </ul>
  </div>
    </nav>
    </div>
  );
};

export default Navbar;
