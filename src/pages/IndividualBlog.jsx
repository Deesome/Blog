import { Link, useParams } from "react-router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


function IndividualBlog() {
  const { id } = useParams()
  const userId = useSelector((state) => state.userDetails._id)


  const [blog, setBlog] = useState({})
  const [error, setError] = useState("")


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:8000/blogs/blog/${id}`);
        if (!response.ok) {
          throw new Error("Response is not OK while fetching blog by ID");
        }
        const data = await response.json();
        setBlog(data.data); // Assuming the response has a `data` field
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBlog();


  }, [id])

  function formatDate(createdAt) {


    const timeStamp = createdAt
    const date = new Date(timeStamp)

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    }

    const finalDate = date.toLocaleString("en-us", options)


    return finalDate
  }



  if (error) return <div>Error : {error}</div>
  return (
    <>


      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
        {/* Image Section */}
        <img
          src={blog.blogImage}
          alt="Blog"
          className="w-full h-60 object-cover"
        />

        {/* Metadata Section */}
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <div>
            <time className="text-sm text-gray-500">{formatDate(blog.createdAt)}</time>
            <p className="text-sm font-medium text-gray-800">{blog?.author?.userName || "Anonymous"}</p>
          </div>

          {userId === blog?.author?._id && (
            <Link
              to={`/blogs/${blog._id}/edit`}
              className="text-blue-500 text-sm font-medium hover:underline"
            >
              Edit
            </Link>
          )}


        </div>

        {/* Content Section */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <p className="text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}>

          </p>
        </div>
      </div>


    </>
  )
}

export default IndividualBlog