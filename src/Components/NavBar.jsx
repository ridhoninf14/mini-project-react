function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Management App</h1>
        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition">
          Logout
        </button>
      </div>
    </nav>
  );
}
  
export default Navbar;


// const Navbar = () => {
//   return (
//     <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">User Management App</h1>
//         <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition">
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
