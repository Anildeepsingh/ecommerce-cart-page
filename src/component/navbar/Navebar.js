import React from "react";
import "./Navebar.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";

const Navebar = () => {
  return (
    <div className="main_div">
      <div className="wrapper_div">
        <div className="left_div">
          <CgShoppingBag />
          <p> E-Shop</p>
        </div>
        <div className="center_div">
          <Link className="headings" to="/mens">
            Mens
          </Link>
          <Link className="headings" to="/womens">
            Womens
          </Link>
          <Link className="headings" to="/kids">
            Kids
          </Link>
        </div>
        <div className="right_div">
          <AiOutlineSearch className="icons" />
          <AiOutlineShoppingCart className="icons" />
          <BiUserCircle className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Navebar;

// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [color, setColor] = useState("black");
//   const [changeColor, setChangeColor] = useState("aqua");

//   const colorChange = () => {
//     setColor(color === "aqua" ? "black" : "aqua");
//     return;
//   };

//   const handleColorChange = () => {
//     setChangeColor(changeColor === "black" ? "aqua" : "black");
//   };

//   return (
//     <>
//       <div className="main_div">
//         <div
//           className="divs"
//           style={{ backgroundColor: changeColor, color: "white" }}
//         >
//           1
//         </div>
//         <div
//           className="divs"
//           style={{ backgroundColor: color, color: "white" }}
//         >
//           2
//         </div>
//         <div
//           className="divs"
//           style={{ backgroundColor: changeColor, color: "white" }}
//         >
//           3
//         </div>
//         <div
//           className="divs"
//           style={{ backgroundColor: color, color: "white" }}
//         >
//           4
//         </div>
//         <div
//           className="divs"
//           style={{ backgroundColor: changeColor, color: "white" }}
//         >
//           5
//         </div>
//         <div
//           className="divs"
//           style={{ backgroundColor: color, color: "white" }}
//         >
//           6
//         </div>
//         <div
//           className="divs"
//           style={{ backgroundColor: changeColor, color: "white" }}
//         >
//           7
//         </div>
//         <div
//           className="divs"
//           style={{ backgroundColor: color, color: "white" }}
//         >
//           8
//         </div>
//       </div>
//       <button onClick={colorChange}>Change color to aqua </button>
//       <button onClick={handleColorChange}>Change color to black </button>
//     </>
//   );
// }
