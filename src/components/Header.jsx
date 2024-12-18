import { Link } from "react-router"

function Header() {
  return (
    <>
    <header className="bg-gray-800 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
  
    <div className="text-lg font-bold">
      <Link to="/">logo</Link>
    </div>

   
    <div className="flex space-x-4">
      <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Login</Link>
      <Link to="/register" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Register</Link>
    </div>
  </div>
</header>
    </>
  )
}

export default Header