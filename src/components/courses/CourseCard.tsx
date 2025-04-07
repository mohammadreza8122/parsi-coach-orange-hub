
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CourseProps {
  id: string;
  title: string;
  image: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  duration: string;
  isPremium: boolean;
  className?: string;
}

const CourseCard = ({ 
  id, 
  title, 
  image, 
  instructor, 
  rating, 
  reviewCount, 
  price, 
  originalPrice,
  duration, 
  isPremium,
  className 
}: CourseProps) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden card-hover", className)}>
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={isPremium ? "badge-premium" : "badge-free"}>
            {isPremium ? "ویژه" : "رایگان"}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <Link to={`/courses/${id}`}>
          <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-orange-500 transition-colors line-clamp-2">{title}</h3>
        </Link>
        
        <div className="flex items-center text-gray-500 mb-3">
          <User className="h-4 w-4 ml-1" />
          <span className="text-sm">{instructor}</span>
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 ml-1" />
            <span className="text-sm text-gray-700">{rating}</span>
            <span className="text-gray-400 text-sm mr-1">({reviewCount})</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 ml-1" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-3 mt-3">
          <div className="flex justify-between items-center">
            <div>
              {isPremium ? (
                <div className="flex items-center">
                  <span className="text-orange-500 font-bold">{price.toLocaleString()} تومان</span>
                  {originalPrice && (
                    <span className="text-gray-400 text-sm line-through mr-2">
                      {originalPrice.toLocaleString()} تومان
                    </span>
                  )}
                </div>
              ) : (
                <span className="text-green-500 font-bold">رایگان</span>
              )}
            </div>
            
            <Link 
              to={`/courses/${id}`} 
              className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded-md text-sm transition-colors"
            >
              مشاهده دوره
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
