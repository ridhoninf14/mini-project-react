// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function Login() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const navigate = useNavigate()

//   const handleLogin = async () => {
//         try {
//         const response = await axios.post('https://reqres.in/api/login', {
//         email,
//         password
//         });

//         localStorage.setItem('token', response.data.token);
//         navigate('/');
//     } catch (error) {
//         console.error('Login failed:', error);
//         alert('Login gagal');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
//         <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-3 p-2 border rounded"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-3 p-2 border rounded"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />
//         <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [email, setEmail] = useState("eve.holt@reqres.in"); // bisa diubah jadi "" setelah test
  const [password, setPassword] = useState("cityslicka");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      console.log("Email:", email, "Password:", password);
      const response = await axios.post('https://reqres.in/api/login', {
        email: email,
        password: password
      });

      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Login gagal: ' + (error.response?.data?.error || "Terjadi kesalahan"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
}
