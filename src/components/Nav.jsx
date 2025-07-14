import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div className="w-full h-16 bg-gray-800 text-white flex justify-around items-center mb-9">
        <NavLink className={(e)=>e.isActive?"text-red-700":""} to={"/"} >Home</NavLink>
        <NavLink className={(e)=>e.isActive?"text-red-700":""} to={"/about"} >About</NavLink>
        <NavLink className={(e)=>e.isActive?"text-red-700":""} to={"/creat"} >Create Recipe</NavLink>
        <NavLink className={(e)=>e.isActive?"text-red-700":""} to={"/show"} >Show Recipe</NavLink>
    </div>
  )
}

export default Nav

// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// const Nav = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="w-full bg-gray-800 text-white mb-9">
//       {/* Navbar Container */}
//       <div className="flex justify-between items-center h-16 px-4 sm:px-8">
//         <div className="text-lg font-semibold sm:hidden">
//           <button onClick={() => setOpen(!open)}>☰</button>
//         </div>

//         <div className="hidden sm:flex justify-around items-center w-full space-x-6">
//           <NavLink className={(e) => (e.isActive ? "text-red-700" : "")} to={"/"}>Home</NavLink>
//           <NavLink className={(e) => (e.isActive ? "text-red-700" : "")} to={"/about"}>About</NavLink>
//           <NavLink className={(e) => (e.isActive ? "text-red-700" : "")} to={"/creat"}>Create Recipe</NavLink>
//           <NavLink className={(e) => (e.isActive ? "text-red-700" : "")} to={"/show"}>Show Recipe</NavLink>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="flex flex-col items-start px-4 space-y-2 sm:hidden pb-3">
//           <NavLink className={(e) => (e.isActive ? "text-red-700" : "")} to={"/"} onClick={() => setOpen(false)}>Home</NavLink>
//           <NavLink className={(e) => (e.isActive ? "text-red-700" : "")} to={"/about"} onClick={() => setOpen(false)}>About</NavLink>
//           <NavLink className={(e) => (e.isActive ? "text-red-700" : "")} to={"/creat"} onClick={() => setOpen(false)}>Create Recipe</NavLink>
//           <NavLink className={(e) => (e.isActive ? "text-red-700" : "")} to={"/show"} onClick={() => setOpen(false)}>Show Recipe</NavLink>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Nav;
