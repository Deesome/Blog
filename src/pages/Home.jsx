import { useEffect, useState } from "react"
import PostCard from "../components/PostCard"



function Home() {
  const [blogs,setBlogs] = useState([])
  

  const fetchBlogs =async()=>{
     fetch("http://localhost:8000/blogs/blog")
    .then((response)=>{
      console.log(response)
    return response.json()
    }).then((data)=>{
      const allBlogs = data.data
      setBlogs(allBlogs)

    })
  }

  useEffect(()=>{
    fetchBlogs()

  },[])

  console.log(blogs)

  return (
    <>
     {blogs.length > 0 && 
  blogs.map((blog) => (
    <PostCard key={blog._id}
     title = {blog.title}
     content = {blog.content}
     blogImage = {blog.blogImage}
     createdAt={blog.createdAt}
     author = {blog.author.userName}
      />
  ))
}
        
    </>
  )
}

export default Home