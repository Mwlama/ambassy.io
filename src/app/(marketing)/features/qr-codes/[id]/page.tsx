import { notFound } from 'next/navigation';
import Image from 'next/image';
import blogData from '@/data/blogData.json';

interface BlogPost {
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

export async function generateStaticParams() {
  const posts = blogData as BlogPost[];
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const posts = blogData as BlogPost[];
  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={1200}
          height={800}
          className="rounded-lg w-full h-96 object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
        <span>{post.category}</span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      {post.author && (
        <div className="flex items-center mb-8">
          <Image
            src={post.author.avatarUrl}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="text-gray-800 font-medium">{post.author.name}</p>
            <p className="text-gray-500 text-sm">{post.author.role}</p>
          </div>
        </div>
      )}
      <p className="text-lg text-gray-700">{post.excerpt}</p>
    </div>
  );
}
