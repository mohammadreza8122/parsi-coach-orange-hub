
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, MessageCircle } from 'lucide-react';

export interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  commentCount: number;
  category: string;
}

const BlogCard = ({ 
  id, 
  title, 
  excerpt, 
  image, 
  author, 
  date, 
  commentCount, 
  category 
}: BlogPostProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <Link to={`/blog/${id}`}>
        <div className="relative h-48">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-md text-sm">
            {category}
          </div>
        </div>
      </Link>
      
      <div className="p-5">
        <Link to={`/blog/${id}`}>
          <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-orange-500 transition-colors line-clamp-2">{title}</h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="border-t border-gray-100 pt-4 mt-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src={author.avatar} 
                alt={author.name} 
                className="w-8 h-8 rounded-full ml-2" 
              />
              <span className="text-gray-800 text-sm">{author.name}</span>
            </div>
            
            <div className="flex items-center space-x-reverse space-x-4 text-gray-500 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 ml-1" />
                <span>{date}</span>
              </div>
              
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 ml-1" />
                <span>{commentCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
