import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://reqres.in/api/users?page=1")
        if (!res.ok) throw new Error("Gagal ambil data user")
        const data = await res.json()
        setUsers(data.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUsers()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Daftar Pengguna</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="bg-white p-4 rounded shadow text-center">
            <img src={user.avatar} alt={user.first_name} className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="font-bold">{user.first_name} {user.last_name}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
