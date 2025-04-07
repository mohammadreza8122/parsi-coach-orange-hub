
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, BookOpen, Award, Clock, User } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CourseList from '@/components/courses/CourseList';
import BlogCard from '@/components/blog/BlogCard';

// Sample data for courses
const featuredCourses = [
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
  }
];

// Sample data for blog posts
const latestPosts = [
  {
    id: '1',
    title: '۵ اصل مهم برای موفقیت در مربیگری تیم‌های کاری',
    excerpt: 'در این مقاله به بررسی اصول اساسی مربیگری موفق در محیط کار می‌پردازیم و راهکارهای عملی برای بهبود عملکرد تیم ارائه می‌دهیم.',
    image: 'https://images.unsplash.com/photo-1565398255801-6c0b6aaece95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'دکتر علی رضایی',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    date: '۱۲ مرداد ۱۴۰۴',
    commentCount: 8,
    category: 'مربیگری'
  },
  {
    id: '2',
    title: 'چگونه یک مدیر الهام‌بخش برای تیم خود باشیم؟',
    excerpt: 'مدیریت موثر فراتر از دستور دادن است. در این مقاله نکات کلیدی برای تبدیل شدن به یک مدیر الهام‌بخش را بررسی می‌کنیم.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'مهندس زهرا محمدی',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    date: '۵ مرداد ۱۴۰۴',
    commentCount: 12,
    category: 'مدیریت'
  },
  {
    id: '3',
    title: 'استراتژی‌های مقابله با تعارض در محیط کار',
    excerpt: 'تعارض بخشی اجتناب‌ناپذیر از محیط‌های کاری است. در این مقاله روش‌های سازنده برای مدیریت تعارض را بررسی می‌کنیم.',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'دکتر سارا کریمی',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    date: '۲۸ تیر ۱۴۰۴',
    commentCount: 5,
    category: 'روانشناسی'
  }
];

const Index = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="E-learning Platform" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">مرکز آموزش مدیریت و مربیگری حرفه‌ای</h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                با دوره‌های تخصصی ما، مهارت‌های مدیریتی و مربیگری خود را به سطح بالاتری ارتقا دهید و در مسیر موفقیت حرفه‌ای گام بردارید.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/courses">
                  <Button className="text-orange-600 bg-white hover:bg-gray-100 border-white">
                    مشاهده دوره‌ها
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">
                    درباره ما
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">چرا ما را انتخاب کنید؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">محتوای با کیفیت</h3>
              <p className="text-gray-600">
                دوره‌های ما توسط متخصصان برتر حوزه مدیریت و مربیگری تهیه شده و شامل جدیدترین متدولوژی‌ها و تکنیک‌های روز دنیا هستند.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-6">
                <User className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">اساتید مجرب</h3>
              <p className="text-gray-600">
                مدرسان ما دارای سال‌ها تجربه عملی و آکادمیک در زمینه‌های تخصصی خود هستند و دانش کاربردی را به شما منتقل می‌کنند.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">گواهینامه معتبر</h3>
              <p className="text-gray-600">
                پس از اتمام موفقیت‌آمیز دوره‌ها، گواهینامه معتبر دریافت خواهید کرد که می‌تواند نقطه قوتی در رزومه حرفه‌ای شما باشد.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-16">
        <CourseList 
          courses={featuredCourses} 
          title="دوره‌های ویژه" 
        />
        
        <div className="text-center mt-8">
          <Link to="/courses">
            <Button variant="outline" className="flex items-center">
              <span>مشاهده همه دوره‌ها</span>
              <ChevronLeft className="h-4 w-4 mr-1" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">نظرات دانشجویان ما</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/54.jpg" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full ml-4" 
                />
                <div>
                  <h4 className="font-bold">مهندس امیر حسینی</h4>
                  <p className="text-gray-500 text-sm">مدیر منابع انسانی</p>
                </div>
              </div>
              <p className="text-gray-600">
                "دوره مدیریت تیم‌های کاری به من کمک کرد تا مهارت‌های رهبری خود را ارتقا دهم و با تیمم ارتباط بهتری برقرار کنم. محتوای دوره بسیار کاربردی و مناسب نیازهای امروز مدیران بود."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/54.jpg" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full ml-4" 
                />
                <div>
                  <h4 className="font-bold">دکتر نیلوفر رستمی</h4>
                  <p className="text-gray-500 text-sm">مشاور سازمانی</p>
                </div>
              </div>
              <p className="text-gray-600">
                "کیفیت آموزش در دوره اصول مربیگری بسیار عالی بود. مدرس دوره با تسلط بالا و ارائه مثال‌های کاربردی، مفاهیم پیچیده را به شکلی ساده و قابل فهم توضیح داد. قطعاً دوره‌های دیگر را هم شرکت خواهم کرد."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/76.jpg" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full ml-4" 
                />
                <div>
                  <h4 className="font-bold">مهندس سعید محمدی</h4>
                  <p className="text-gray-500 text-sm">مدیر پروژه</p>
                </div>
              </div>
              <p className="text-gray-600">
                "پس از گذراندن دوره مبانی رهبری، توانستم تیم خود را با روش‌های بهتری هدایت کنم و نتایج کاری‌مان به طور چشمگیری بهبود یافت. تمرین‌های عملی دوره بسیار مفید بودند و در محیط واقعی کار قابل استفاده هستند."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">آخرین مقالات وبلاگ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map(post => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/blog">
              <Button variant="outline" className="flex items-center">
                <span>مشاهده همه مقالات</span>
                <ChevronLeft className="h-4 w-4 mr-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">آماده ارتقای مهارت‌های خود هستید؟</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            همین امروز به جمع هزاران دانشجوی ما بپیوندید و مسیر موفقیت حرفه‌ای خود را هموار کنید.
          </p>
          <Link to="/register">
            <Button className="text-orange-600 bg-white hover:bg-gray-100 border-white">
              شروع کنید
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
