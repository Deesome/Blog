import { useState } from "react";
import { Navigate} from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
    const [userName,setUserName] = useState("")
    const [password,setPassword] =useState("")
    const [error,setError] = useState("")
    const [redirect,setRedirect] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit =async(e)=>{
      e.preventDefault()
      try {
        const response = await fetch("http://localhost:8000/users/login"
        ,{
          method : "POST",
          body : JSON.stringify({userName,password}),
          headers:{
            "Content-type" : "application/json"
          },
          credentials : "include"
          })
            if(response.ok){
            setRedirect(true)
            const data = await response.json()
            dispatch(login(data.data.user))
          }else{
            setError("Wrong Credentials")
          }
        } catch (error) {
        console.log(error)
        setError(error)
        
      }

}
    if(redirect){
     return <Navigate to={"/"}/>
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <div className="mb-4">
            <input
              type="text"
              value={userName}
              onChange={(e)=>{setUserName(e.target.value)}}
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        {/* Display error message */}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  }
  
  export default Login;
  