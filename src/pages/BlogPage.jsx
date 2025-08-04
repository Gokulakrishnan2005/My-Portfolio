import React from 'react'; // eslint-disable-line no-unused-vars
import { blogPosts } from '../data/blogData';

const BlogPostCard = ({ post }) => { // eslint-disable-line no-unused-vars
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-4">By {post.author} on {post.date}</p>
        <p className="text-gray-700 text-base">{post.description}</p>
        <a href="#" className="inline-block mt-4 text-blue-600 hover:underline">Read More &rarr;</a>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
