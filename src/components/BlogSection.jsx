import React from 'react';

const BlogSection = () => {
  const featuredPost = {
    id: 1,
    title: 'The secret tips & tricks to prepare a perfect burger & pizza for our customers',
    date: 'January 2, 2025',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tincidunt ipsum. Ut interdum non tellus nec egestas. Sed fringilla dolor quis ex faucibus laoreet. Sed et efficitur purus. Vivamus ut ante a nisi pharetra finibus. Vestibulum cursus metus sapien, nec vulputate massa dictum nec.',
    imageUrl:
      'https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246066.jpg?ga=GA1.1.1782891138.1747143947&semt=ais_items_boosted&w=740',
  };

  const posts = [
    {
      id: 2,
      title: 'How to prepare a delicious gluten-free sushi',
      date: 'January 3, 2025',
      imageUrl:
        'https://img.freepik.com/free-photo/maki-roll-with-cucumber-served-with-sauce-sesame-seeds_141793-790.jpg?ga=GA1.1.1782891138.1747143947&semt=ais_items_boosted&w=740',
    },
    {
      id: 3,
      title: 'Exclusive baking lesson from the pastry king',
      date: 'February 13, 2025',
      imageUrl:
        'https://img.freepik.com/free-photo/chocolate-puff-pastry-croissant-chocolate-eclair-sweet-raisin-roll_140725-5637.jpg?ga=GA1.1.1782891138.1747143947&semt=ais_items_boosted&w=740',
    },
    {
      id: 4,
      title: 'How to prepare the perfect fries in an air fryer',
      date: 'March 6, 2025',
      imageUrl:
        'https://img.freepik.com/free-photo/grilled-beef-fries-hearty-lunch-generated-by-ai_188544-37376.jpg?ga=GA1.1.1782891138.1747143947&semt=ais_items_boosted&w=740',
    },
    {
      id: 5,
      title: 'How to prepare delicious chicken tenders',
      date: 'March 24, 2025',
      imageUrl:
        'https://img.freepik.com/free-photo/fried-chicken-french-fries-black-cement-floor_1150-28542.jpg?ga=GA1.1.1782891138.1747143947&semt=ais_items_boosted&w=740',
    },
  ];

  return (
    <section className="bg-white py-16">
      {/* Header */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Our Blog & Articles</h2>
        <div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-orange-600 transition duration-300">
            SEE MENU
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300">
            ORDER NOW
          </button>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured Post */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-lg flex flex-col h-full">
          <img
            src={featuredPost.imageUrl}
            alt={featuredPost.title}
            className="w-full h-96 object-cover rounded-t-lg"
          />
          <div className="px-4 pt-4 pb-5">
            <p className="text-gray-600 text-sm">{featuredPost.date}</p>
            <h3 className="text-xl font-bold mt-1 mb-2">{featuredPost.title}</h3>
            <p className="text-gray-700 text-sm">{featuredPost.description}</p>
          </div>
        </div>

        {/* Other Posts */}
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md flex flex-col">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-28 object-cover rounded-t-lg"
              />
              <div className="px-3 pt-2 pb-3">
                <p className="text-gray-600 text-xs">{post.date}</p>
                <h3 className="text-sm font-bold mt-0.5">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
