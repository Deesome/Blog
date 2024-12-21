import {useSelector} from "react-redux"



function Profile() {
  const userData = useSelector((state)=>state.userDetails)
  const {userName,email,fullName,avatar} = userData

return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col items-center p-6">
        {/* Avatar */}
        <img
          className="w-32 h-32 rounded-full shadow-md"
          src={avatar}
          alt={`${userName}'s avatar`}
        />

        {/* User Information */}
        <h2 className="mt-4 text-xl font-semibold text-gray-800">username : {userName}</h2>
        <p className="text-gray-600">fullname : {fullName}</p>
        <p className="text-gray-500 mt-2">email : {email}</p>
      </div>

      {/* Footer or Actions */}
      <div className="bg-gray-50 border-t border-gray-200 p-4">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
          Edit Profile
        </button>
      </div>
    </div>
  </div>
);
}

export default Profile