
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogList from '@/components/blog/BlogList';

// Sample data for blog posts
const blogPosts = [
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
  },
  {
    id: '4',
    title: 'هوش هیجانی و نقش آن در رهبری موفق',
    excerpt: 'هوش هیجانی یکی از مهم‌ترین عوامل موفقیت در نقش‌های رهبری است. در این مقاله اهمیت و روش‌های تقویت هوش هیجانی را بررسی می‌کنیم.',
    image: 'https://images.unsplash.com/photo-1525770041010-2a1233dd8152?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'دکتر مهدی حسینی',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    date: '۱۵ تیر ۱۴۰۴',
    commentCount: 15,
    category: 'رهبری'
  },
  {
    id: '5',
    title: 'تکنیک‌های موثر مدیریت زمان برای مدیران شلوغ',
    excerpt: 'مدیریت زمان یکی از چالش‌های اصلی مدیران امروزی است. در این مقاله تکنیک‌های عملی برای بهینه‌سازی استفاده از زمان را معرفی می‌کنیم.',
    image: 'https://images.unsplash.com/photo-1583195763986-0231839b7f51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'مهندس نیما کریمی',
      avatar: 'https://randomuser.me/api/portraits/men/64.jpg'
    },
    date: '۲ تیر ۱۴۰۴',
    commentCount: 7,
    category: 'مدیریت'
  },
  {
    id: '6',
    title: 'اصول ارتباط موثر در محیط کار',
    excerpt: 'ارتباط موثر یکی از مهارت‌های کلیدی برای موفقیت در محیط کاری است. این مقاله تکنیک‌های بهبود ارتباطات سازمانی را بررسی می‌کند.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'دکتر لیلا رضایی',
      avatar: 'https://randomuser.me/api/portraits/women/54.jpg'
    },
    date: '۲۵ خرداد ۱۴۰۴',
    commentCount: 10,
    category: 'ارتباطات'
  },
  {
    id: '7',
    title: 'نقش فرهنگ سازمانی در موفقیت شرکت‌ها',
    excerpt: 'فرهنگ سازمانی تاثیر مستقیمی بر عملکرد و موفقیت شرکت‌ها دارد. در این مقاله به بررسی اهمیت و نحوه شکل‌گیری فرهنگ سازمانی می‌پردازیم.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'دکتر سعید محمدی',
      avatar: 'https://randomuser.me/api/portraits/men/79.jpg'
    },
    date: '۱۸ خرداد ۱۴۰۴',
    commentCount: 9,
    category: 'فرهنگ سازمانی'
  },
  {
    id: '8',
    title: 'استراتژی‌های موثر برای مدیریت استرس در محیط کار',
    excerpt: 'استرس می‌تواند تاثیر منفی بر عملکرد و سلامت داشته باشد. در این مقاله راهکارهای عملی برای مدیریت استرس را معرفی می‌کنیم.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'دکتر سارا کریمی',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    date: '۱۰ خرداد ۱۴۰۴',
    commentCount: 14,
    category: 'سلامت روان'
  }
];

const Blog = () => {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">وبلاگ</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            آخرین مقالات و نوشته‌های ما در زمینه مدیریت، مربیگری و توسعه مهارت‌های رهبری
          </p>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16">
        <BlogList posts={blogPosts} />
      </section>
      
      <Footer />
    </>
  );
};

export default Blog;
