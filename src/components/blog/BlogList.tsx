
import React, { useState } from 'react';
import BlogCard, { BlogPostProps } from './BlogCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface BlogListProps {
  posts: BlogPostProps[];
  title?: string;
}

const BlogList = ({ posts, title = "آخرین مقالات" }: BlogListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === '') {
      setFilteredPosts(posts);
    } else {
      const results = posts.filter(post => 
        post.title.toLowerCase().includes(value.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(value.toLowerCase()) ||
        post.author.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPosts(results);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">{title}</h2>
      
      <div className="mb-8">
        <div className="max-w-md mx-auto relative">
          <Input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="جستجو در مقالات..."
            className="pl-10 py-2"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>
      
      {filteredPosts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">مقاله‌ای با این مشخصات یافت نشد.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      )}
      
      {filteredPosts.length > 0 && filteredPosts.length < posts.length && (
        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => setFilteredPosts(posts)}
          >
            نمایش همه مقالات
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
