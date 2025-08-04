import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { blogPosts } from '../data/blogData';
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars






const BlogPostCard = ({ post }) => { // eslint-disable-line no-unused-vars
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <Link to={`/blog/${post.id}`}>
        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
        <div className="flex items-center text-gray-500 text-xs mb-4">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
        <Link to={`/blog/${post.id}`} className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
          Read More
        </Link>
      </div>
    </div>
  );
};

const BlogList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariantsUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <motion.h1 variants={itemVariantsUp} className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">Our Tech Blog</motion.h1>
        <motion.p variants={itemVariantsUp} className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Explore our latest articles on React, Tailwind CSS, JavaScript, and more. Stay updated with the world of web development.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <motion.div key={post.id} variants={itemVariantsUp}>
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogList;
