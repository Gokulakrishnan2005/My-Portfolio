import React from 'react'; // eslint-disable-line no-unused-vars
import { useParams, Link } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { blogPosts } from '../data/blogData';

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div className="container mx-auto p-4 py-16 text-center text-red-500">Blog post not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
          <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
          <div className="prose max-w-none leading-relaxed text-gray-700">
            <p>{post.content}</p>
            <p>This is a placeholder for more detailed content. In a real application, this would be rich text, potentially parsed from Markdown or a CMS.</p>
            <p>The layout is designed to be clean and modern, with ample whitespace for readability.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Responsive Design</h2>
            <p>This page is built with Tailwind CSS, ensuring it looks great on all devices, from mobile phones to large desktops. The grid system adapts, and typography scales fluidly.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Clean Typography</h2>
            <p>We use sans-serif fonts for a modern feel. Headings are bold and prominent, while body text is highly legible.</p>
          </div>
          <Link to="/blog" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-base font-medium">
            &larr; Back to Blog List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;