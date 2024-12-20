import { useState } from "react";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import { Navigate } from "react-router";


function Create() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")
  const [blogImage, setBlogImage] = useState("")
  const [redirect,setRedirect] = useState(false)




  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tags", tags);
    formData.append("blogImage", blogImage);

    const response = await fetch("http://localhost:8000/blogs/addBlog", {
      method: "POST",
      body: formData,
      credentials: "include"

    })
    if(response.ok){
      setRedirect(true)

    }

  }

  if(redirect){
    return <Navigate to="/" />
  }


  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6"

        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Create Post
          </h2>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent} />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              name="tags"
              placeholder="Tags"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="coverImage"
              className="block text-gray-700 font-semibold mb-2"
            >
              Cover Image
            </label>
            <input
              id="coverImage"
              name="blogImage"
              type="file"
              onChange={(e)=>setBlogImage(e.target.files[0])}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Create;
