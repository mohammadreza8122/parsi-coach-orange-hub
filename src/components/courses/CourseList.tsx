
import React, { useState } from 'react';
import CourseCard, { CourseProps } from './CourseCard';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

interface CourseListProps {
  courses: CourseProps[];
  title?: string;
  showFilters?: boolean;
}

const CourseList = ({ courses, title = "دوره‌های ما", showFilters = false }: CourseListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === '') {
      setFilteredCourses(courses);
    } else {
      const results = courses.filter(course => 
        course.title.toLowerCase().includes(value.toLowerCase()) ||
        course.instructor.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCourses(results);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">{title}</h2>
      
      {showFilters && (
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="جستجو در دوره‌ها..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center">
                <Filter className="ml-2 h-4 w-4" />
                فیلتر
              </Button>
              
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option value="">همه دسته‌بندی‌ها</option>
                <option value="management">مدیریت</option>
                <option value="coaching">مربیگری</option>
                <option value="leadership">رهبری</option>
                <option value="personal-development">توسعه فردی</option>
                <option value="team-building">تیم سازی</option>
              </select>
            </div>
          </div>
        </div>
      )}
      
      {filteredCourses.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">دوره‌ای با این مشخصات یافت نشد.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;
