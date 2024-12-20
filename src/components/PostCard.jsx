


const PostCard = ({_id,title,content,createdAt,blogImage,author}) => {
  console.log(author)

  function formatDate(createdAt){
    
    
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

    const finalDate = date.toLocaleString("en-us",options)
    
   
    return finalDate
  }


  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 mb-5">
      {/* Image Section */}
      <div className="h-56">
        <img
          src={blogImage}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        
        <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
          <p className="font-medium">{author}</p>
          <time>{formatDate(createdAt)}</time>
        </div>

        {/* Title and Description */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            {title}
          </p>
          <p className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: content }}>
           
          </p>
        </div>

        {/* Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          See More
        </button>
      </div>
    </div>
  );
};


export default PostCard;
