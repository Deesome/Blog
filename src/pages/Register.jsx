import { useState } from "react"


function Register() {
  const [userName, setUserName] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [avatar, setAvatar] = useState(null)



  const handleSubmit =  async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.set("userName", userName)
    formData.set("fullName", fullName)
    formData.set("email", email)
    formData.set("password", password)
    formData.set("avatar", avatar)

    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        body: formData,
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // }
      })
      const data = await response.json()

      console.log(data)
    } catch (error) {
      console.log("error", error)

    }
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    setAvatar(file)
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
          onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

          {/* Username Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Full Name Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Avatar Input */}
          <div className="mb-4">
            <input
              type="file"
              name="avatar"
              onChange={handleAvatarChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Register