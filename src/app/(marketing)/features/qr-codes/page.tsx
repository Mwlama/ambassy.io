'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogData from '@/data/blogData.json';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  author?: {
    name: string;
    role: string;
    avatarUrl: string;
  };
}

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const posts = blogData as BlogPost[];
  const heroPost = posts[0];
  const featuredPosts = posts.slice(1, 4);
  const allArticles = posts.slice(4);

  const filteredArticles =
    activeCategory === 'All'
      ? allArticles
      : allArticles.filter(
          (article) =>
            article.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="overflow-x-hidden scrollbar-hide w-full">
      {/* Hero Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-lg bg-white">
            <div className="lg:w-7/12 w-full h-96 lg:h-auto relative">
              <Image
                src={heroPost.imageUrl}
                alt={heroPost.title}
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-5/12 w-full p-6 lg:p-8">
              <div className="flex items-center space-x-2">
                <span className="text-indigo-500 font-medium text-sm">{heroPost.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400 text-sm">{heroPost.readTime}</span>
              </div>
              <Link href={`/features/qr-codes/${heroPost.id}`}>
                <h1 className="text-4xl font-bold text-gray-800 mt-4 hover:underline">
                  {heroPost.title}
                </h1>
              </Link>
              {heroPost.author && (
                <div className="flex items-center mt-6">
                  <Image
                    src={heroPost.author.avatarUrl}
                    alt={heroPost.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-gray-500 font-medium">{heroPost.author.name}</p>
                    <p className="text-gray-300 text-sm">{heroPost.author.role}</p>
                  </div>
                </div>
              )}
              <p className="text-gray-500 mt-4">{heroPost.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPosts.map((post) => (
              <Link href={`/features/qr-codes/${post.id}`} key={post.id}>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer bg-white">
                  <div className="h-48 relative">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-indigo-600 font-medium text-sm">{post.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All Articles</h2>
            <div className="flex space-x-6">
              {['All', 'Technology', 'News', 'Guide'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-1 py-1 transition-colors duration-150 ${
                    activeCategory === category
                      ? 'text-gray-900 border-b-2 border-gray-900 font-medium'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {filteredArticles.map((article) => (
              <Link href={`/features/qr-codes/${article.id}`} key={article.id}>
                <div className="group cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-2/5 h-56 md:h-40 rounded-lg overflow-hidden">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-indigo-600 font-medium text-sm">{article.category}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400 text-sm">{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{article.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
