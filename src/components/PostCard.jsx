

const PostCard = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 mb-5">
      {/* Image Section */}
      <div className="h-56">
        <img
          src="https://zomatoblog.com/wp-content/uploads/2024/12/Banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Author and Date */}
        <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
          <p className="font-medium">Deepak</p>
          <time>18/12/24</time>
        </div>

        {/* Title and Description */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            The Big Brand Theory | From Trekking Himalayan Slopes to Raising Rs.
            0.75 Crores at Shark Tank: The Story of Amore Gelato
          </p>
          <p className="text-gray-600">
            Discover how the founders of Amore Gelato are bringing the true
            taste of Italian gelato to India!
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
