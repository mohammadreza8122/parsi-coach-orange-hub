
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CourseDetailComponent from '@/components/courses/CourseDetail';

// Sample data for a course
const courseSample = {
  id: '1',
  title: 'آموزش مدیریت تیم‌های کاری در عصر دیجیتال',
  image: 'https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  instructor: {
    id: '1',
    name: 'دکتر محمد احمدی',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'دکتر محمد احمدی دارای بیش از ۱۵ سال تجربه در زمینه مدیریت منابع انسانی و رهبری تیم‌های کاری است. ایشان مدرک دکترای خود را در رشته مدیریت کسب و کار از دانشگاه تهران دریافت کرده و به عنوان مشاور مدیریت با سازمان‌های مختلف همکاری داشته است.',
    expertise: ['مدیریت منابع انسانی', 'رهبری تیم', 'مدیریت تغییر']
  },
  rating: 4.8,
  reviewCount: 124,
  price: 1290000,
  originalPrice: 1990000,
  duration: '۱۸ ساعت',
  isPremium: true,
  description: 'این دوره جامع به شما می‌آموزد چگونه تیم‌های کاری خود را در فضای دیجیتال امروز به صورت موثر مدیریت کنید.',
  longDescription: 'در دنیای به سرعت در حال تغییر امروز، مدیریت تیم‌های کاری نیازمند مهارت‌ها و دانش‌های جدیدی است که با فضای دیجیتال و چالش‌های آن همخوانی داشته باشد. این دوره جامع به شما می‌آموزد چگونه تیم‌های کاری خود را در این فضای نوین به صورت موثر رهبری کنید.\n\nما در این دوره به بررسی اصول و تکنیک‌های پیشرفته مدیریت تیم با تمرکز بر محیط‌های کاری مدرن می‌پردازیم. از مدیریت تیم‌های دورکار و ترکیبی گرفته تا استفاده از ابزارهای دیجیتال برای بهبود همکاری و بهره‌وری، این دوره تمام مهارت‌های لازم برای رهبری موفق در عصر دیجیتال را پوشش می‌دهد.',
  requirements: [
    'آشنایی مقدماتی با اصول مدیریت',
    'تجربه کار در محیط‌های تیمی',
    'علاقه به یادگیری و بهبود مهارت‌های رهبری'
  ],
  targetAudience: [
    'مدیران میانی و ارشد',
    'رهبران تیم',
    'کارشناسان منابع انسانی',
    'افرادی که به دنبال ارتقا به موقعیت‌های مدیریتی هستند'
  ],
  whatYouWillLearn: [
    'اصول رهبری تیم در محیط‌های دیجیتال',
    'مدیریت موثر تیم‌های دورکار و ترکیبی',
    'استراتژی‌های ارتباطی در فضای مجازی',
    'ابزارها و تکنیک‌های مدیریت پروژه دیجیتال',
    'روش‌های ایجاد و حفظ انگیزه در اعضای تیم',
    'مدیریت عملکرد و بازخورد در محیط دیجیتال',
    'حل تعارض و چالش‌ها در تیم‌های مجازی',
    'ایجاد فرهنگ همکاری و نوآوری در تیم'
  ],
  lastUpdated: 'خرداد ۱۴۰۴',
  sections: [
    {
      id: 's1',
      title: 'مقدمات مدیریت تیم در عصر دیجیتال',
      duration: '۳ ساعت',
      lessons: [
        {
          id: 'l1',
          title: 'مقدمه و معرفی دوره',
          duration: '۱۵ دقیقه',
          isFree: true
        },
        {
          id: 'l2',
          title: 'تحول دیجیتال و تاثیر آن بر مدیریت تیم',
          duration: '۴۵ دقیقه',
          isFree: true
        },
        {
          id: 'l3',
          title: 'چالش‌های رهبری در فضای دیجیتال',
          duration: '۱ ساعت',
          isFree: false
        },
        {
          id: 'l4',
          title: 'مهارت‌های اساسی برای مدیریت تیم‌های مدرن',
          duration: '۱ ساعت',
          isFree: false
        }
      ]
    },
    {
      id: 's2',
      title: 'رهبری تیم‌های دورکار و ترکیبی',
      duration: '۴ ساعت',
      lessons: [
        {
          id: 'l5',
          title: 'اصول مدیریت تیم‌های دورکار',
          duration: '۱ ساعت',
          isFree: true
        },
        {
          id: 'l6',
          title: 'ایجاد ساختار و فرآیندهای کاری مناسب',
          duration: '۴۵ دقیقه',
          isFree: false
        },
        {
          id: 'l7',
          title: 'استراتژی‌های ارتباطی در تیم‌های دورکار',
          duration: '۱ ساعت',
          isFree: false
        },
        {
          id: 'l8',
          title: 'مدیریت جلسات آنلاین موثر',
          duration: '۴۵ دقیقه',
          isFree: false
        },
        {
          id: 'l9',
          title: 'چالش‌های تیم‌های ترکیبی و راهکارهای حل آن‌ها',
          duration: '۳۰ دقیقه',
          isFree: false
        }
      ]
    },
    {
      id: 's3',
      title: 'ابزارها و تکنیک‌های دیجیتال برای مدیریت تیم',
      duration: '۳ ساعت',
      lessons: [
        {
          id: 'l10',
          title: 'معرفی ابزارهای ارتباطی و همکاری آنلاین',
          duration: '۴۵ دقیقه',
          isFree: false
        },
        {
          id: 'l11',
          title: 'سیستم‌های مدیریت پروژه دیجیتال',
          duration: '۱ ساعت',
          isFree: false
        },
        {
          id: 'l12',
          title: 'ابزارهای پایش و ارزیابی عملکرد',
          duration: '۴۵ دقیقه',
          isFree: false
        },
        {
          id: 'l13',
          title: 'استراتژی‌های امنیت و حریم خصوصی در فضای دیجیتال',
          duration: '۳۰ دقیقه',
          isFree: false
        }
      ]
    },
    {
      id: 's4',
      title: 'ایجاد انگیزه و فرهنگ‌سازی در تیم',
      duration: '۴ ساعت',
      lessons: [
        {
          id: 'l14',
          title: 'استراتژی‌های انگیزشی در محیط دیجیتال',
          duration: '۱ ساعت',
          isFree: false
        },
        {
          id: 'l15',
          title: 'ایجاد فرهنگ همکاری و اعتماد',
          duration: '۱ ساعت',
          isFree: false
        },
        {
          id: 'l16',
          title: 'مدیریت عملکرد و بازخورد موثر',
          duration: '۱ ساعت',
          isFree: false
        },
        {
          id: 'l17',
          title: 'توسعه و رشد اعضای تیم',
          duration: '۱ ساعت',
          isFree: false
        }
      ]
    },
    {
      id: 's5',
      title: 'حل تعارض و مدیریت چالش‌ها',
      duration: '۲ ساعت',
      lessons: [
        {
          id: 'l18',
          title: 'تشخیص و مدیریت تعارض در محیط مجازی',
          duration: '۴۵ دقیقه',
          isFree: false
        },
        {
          id: 'l19',
          title: 'مهارت‌های گفتگو و مذاکره آنلاین',
          duration: '۴۵ دقیقه',
          isFree: false
        },
        {
          id: 'l20',
          title: 'روش‌های حل مسئله در تیم‌های دیجیتال',
          duration: '۳۰ دقیقه',
          isFree: false
        }
      ]
    },
    {
      id: 's6',
      title: 'جمع‌بندی و اقدامات عملی',
      duration: '۲ ساعت',
      lessons: [
        {
          id: 'l21',
          title: 'توسعه استراتژی رهبری دیجیتال شخصی',
          duration: '۱ ساعت',
          isFree: false
        },
        {
          id: 'l22',
          title: 'برنامه‌ریزی برای پیاده‌سازی مهارت‌های آموخته شده',
          duration: '۴۵ دقیقه',
          isFree: false
        },
        {
          id: 'l23',
          title: 'جمع‌بندی و منابع تکمیلی',
          duration: '۱۵ دقیقه',
          isFree: false
        }
      ]
    }
  ]
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, you would fetch the course details based on the ID
  // For now, we'll just use the sample data
  const course = courseSample;
  
  return (
    <>
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-reverse space-x-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-orange-500">خانه</a>
              </li>
              <li className="text-gray-400">
                <span>/</span>
              </li>
              <li>
                <a href="/courses" className="text-gray-500 hover:text-orange-500">دوره‌ها</a>
              </li>
              <li className="text-gray-400">
                <span>/</span>
              </li>
              <li className="text-orange-500 font-medium truncate">{course.title}</li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* Course Detail */}
      <section className="py-8">
        <CourseDetailComponent {...course} />
      </section>
      
      <Footer />
    </>
  );
};

export default CourseDetail;
