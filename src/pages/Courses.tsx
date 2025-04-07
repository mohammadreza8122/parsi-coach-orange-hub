
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CourseList from '@/components/courses/CourseList';

// Sample data for courses
const courses = [
  {
    id: '1',
    title: 'آموزش مدیریت تیم‌های کاری در عصر دیجیتال',
    image: 'https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'دکتر محمد احمدی',
    rating: 4.8,
    reviewCount: 124,
    price: 1290000,
    originalPrice: 1990000,
    duration: '۱۸ ساعت',
    isPremium: true
  },
  {
    id: '2',
    title: 'اصول مربیگری حرفه‌ای در محیط کار',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'مهندس زهرا محمدی',
    rating: 4.6,
    reviewCount: 89,
    price: 990000,
    duration: '۱۲ ساعت',
    isPremium: true
  },
  {
    id: '3',
    title: 'مبانی رهبری مؤثر در سازمان‌های امروزی',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'دکتر علی رضایی',
    rating: 4.9,
    reviewCount: 156,
    price: 0,
    duration: '۸ ساعت',
    isPremium: false
  },
  {
    id: '4',
    title: 'تکنیک‌های پیشرفته مدیریت استرس و زمان',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'دکتر سارا کریمی',
    rating: 4.7,
    reviewCount: 102,
    price: 890000,
    originalPrice: 1490000,
    duration: '۱۰ ساعت',
    isPremium: true
  },
  {
    id: '5',
    title: 'ارتباط مؤثر در محیط کار',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'دکتر رضا توکلی',
    rating: 4.5,
    reviewCount: 78,
    price: 790000,
    duration: '۹ ساعت',
    isPremium: true
  },
  {
    id: '6',
    title: 'مدیریت تعارض و حل مسئله',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'مهندس علی کریمی',
    rating: 4.4,
    reviewCount: 65,
    price: 0,
    duration: '۶ ساعت',
    isPremium: false
  },
  {
    id: '7',
    title: 'هوش هیجانی در رهبری و مدیریت',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'دکتر سارا کریمی',
    rating: 4.9,
    reviewCount: 132,
    price: 1190000,
    originalPrice: 1690000,
    duration: '۱۴ ساعت',
    isPremium: true
  },
  {
    id: '8',
    title: 'استراتژی‌های تیم‌سازی و انگیزش کارکنان',
    image: 'https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'دکتر محمد احمدی',
    rating: 4.7,
    reviewCount: 94,
    price: 1090000,
    duration: '۱۲ ساعت',
    isPremium: true
  }
];

const Courses = () => {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">دوره‌های آموزشی</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            مجموعه‌ای از دوره‌های تخصصی در زمینه مدیریت و مربیگری برای ارتقای مهارت‌های حرفه‌ای شما
          </p>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-16">
        <CourseList 
          courses={courses} 
          title="همه دوره‌ها"
          showFilters={true}
        />
      </section>
      
      <Footer />
    </>
  );
};

export default Courses;
