import React from 'react'; // eslint-disable-line no-unused-vars
import { useParams, Link } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { blogPosts } from '../data/blogData';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div className="container mx-auto p-4 py-16 text-center text-red-500">Blog post not found!</div>;
  }

  return (
    <div className="container mx-auto p-4 py-16">
      <div className="bg-white rounded-lg shadow-md p-8">
        <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-gray-600 text-sm mb-4 flex items-center">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
        <Link to="/blog" className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors duration-300">
          &larr; Back to Blog List
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPage;
