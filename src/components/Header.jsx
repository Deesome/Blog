import { Link } from "react-router";  
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

function Header() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log("user", isLoggedIn);

  async function handleLogout(){

    try {
      const response = await fetch("http://localhost:8000/users/logout",{
        method :"POST",
        credentials : "include",
       
  
      })
  
      if(response.ok){
        dispatch(logout())
  
      }
    } catch (error) {
      console.log("Logout Failed",error)
      
    }
  }

  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-lg font-bold">
          <Link to="/">logo</Link>
        </div>

        <div className="flex space-x-4">
          {/* Conditional rendering based on isLoggedIn */}
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Profile</Link>
              <Link to="/create" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Create</Link>
              <Link onClick={handleLogout} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Login</Link>
              <Link to="/register" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
