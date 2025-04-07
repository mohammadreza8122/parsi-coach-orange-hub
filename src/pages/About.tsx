
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Users, Target, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">درباره ما</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            آشنایی با مرکز آموزش، ماموریت، چشم‌انداز و ارزش‌های ما
          </p>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">داستان ما</h2>
              <p className="text-gray-700 mb-4">
                مرکز آموزش در سال ۱۳۹۵ با هدف ارائه آموزش‌های کاربردی و باکیفیت در زمینه مدیریت و مربیگری تاسیس شد. ما از ابتدا با این باور شروع کردیم که آموزش می‌تواند زندگی افراد و سازمان‌ها را متحول کند.
              </p>
              <p className="text-gray-700 mb-4">
                در طول این سال‌ها، تیم متخصص ما به طور مداوم بر توسعه محتوای آموزشی با کیفیت و به‌روز متمرکز بوده و تلاش کرده‌ایم تا بهترین تجربه یادگیری را برای دانشجویان خود فراهم کنیم.
              </p>
              <p className="text-gray-700 mb-6">
                امروز، مرکز آموزش به یک مرجع معتبر در زمینه آموزش مدیریت و مربیگری تبدیل شده و هزاران نفر از دوره‌های ما برای ارتقای مهارت‌های خود استفاده کرده‌اند.
              </p>
              <div className="flex gap-4">
                <Link to="/courses">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    مشاهده دوره‌ها
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">
                    تماس با ما
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ماموریت و چشم‌انداز ما</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              ما با هدف ایجاد تحول در آموزش مدیریت و مربیگری و توانمندسازی افراد برای موفقیت در محیط کار رقابتی امروز فعالیت می‌کنیم.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">ماموریت ما</h3>
              <p className="text-gray-700">
                ماموریت ما ارائه آموزش‌های کاربردی و با کیفیت در زمینه مدیریت و مربیگری است که به افراد کمک می‌کند مهارت‌های خود را توسعه دهند و در محیط کار موفق شوند. ما متعهد هستیم دسترسی به آموزش‌های معتبر و به‌روز را برای همه افراد، فارغ از موقعیت جغرافیایی یا زمینه کاری آنها، فراهم کنیم.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">چشم‌انداز ما</h3>
              <p className="text-gray-700">
                چشم‌انداز ما تبدیل شدن به برترین مرکز آموزش آنلاین در زمینه مدیریت و مربیگری در ایران و خاورمیانه است. ما می‌خواهیم با ارائه محتوای آموزشی با کیفیت و کاربردی، استانداردهای جدیدی در زمینه آموزش آنلاین تعیین کنیم و به افراد کمک کنیم تا به پتانسیل کامل خود دست یابند.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ارزش‌های ما</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              ارزش‌های ما هدایت‌کننده تمام فعالیت‌های ما هستند و در تصمیم‌گیری‌ها و نحوه تعامل با دانشجویان، مدرسان و همکاران ما نمایان می‌شوند.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-6">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">کیفیت</h3>
              <p className="text-gray-700">
                ما متعهد به ارائه آموزش‌های با کیفیت و محتوای آموزشی به‌روز هستیم. ما به طور مداوم در حال ارزیابی و بهبود دوره‌های خود هستیم تا اطمینان حاصل کنیم که دانشجویان ما بهترین تجربه یادگیری را دارند.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">دانشجو محوری</h3>
              <p className="text-gray-700">
                دانشجویان در مرکز توجه ما قرار دارند. ما به نیازها و بازخوردهای آنها گوش می‌دهیم و تلاش می‌کنیم تجربه یادگیری را متناسب با نیازهای آنها شخصی‌سازی کنیم. موفقیت دانشجویان، موفقیت ماست.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">یادگیری مادام‌العمر</h3>
              <p className="text-gray-700">
                ما معتقدیم که یادگیری هرگز متوقف نمی‌شود. ما فرهنگ یادگیری مستمر را ترویج می‌دهیم و تلاش می‌کنیم تا منابع و ابزارهایی را فراهم کنیم که به افراد کمک کند در طول زندگی حرفه‌ای خود به رشد و یادگیری ادامه دهند.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">تیم ما</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              تیم ما متشکل از متخصصان با تجربه در زمینه مدیریت، مربیگری و آموزش است که متعهد به ارائه بهترین تجربه یادگیری برای دانشجویان ما هستند.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">دکتر محمد احمدی</h3>
                <p className="text-gray-500 mb-4">بنیانگذار و مدیرعامل</p>
                <p className="text-gray-700">
                  دکترای مدیریت کسب و کار با بیش از ۱۵ سال تجربه در زمینه آموزش و مشاوره مدیریتی.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">دکتر زهرا محمدی</h3>
                <p className="text-gray-500 mb-4">مدیر آموزش</p>
                <p className="text-gray-700">
                  متخصص در زمینه طراحی آموزشی با بیش از ۱۲ سال سابقه در تدوین دوره‌های آموزشی مدیریتی.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/men/64.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">مهندس علی رضایی</h3>
                <p className="text-gray-500 mb-4">مدیر فنی</p>
                <p className="text-gray-700">
                  کارشناس ارشد فناوری اطلاعات با تخصص در زمینه پلتفرم‌های آموزش آنلاین و تجربه کاربری.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/women/68.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">دکتر سارا کریمی</h3>
                <p className="text-gray-500 mb-4">مدیر محتوا</p>
                <p className="text-gray-700">
                  دکترای روانشناسی سازمانی با تخصص در زمینه توسعه رهبری و مهارت‌های ارتباطی در محیط کار.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">به خانواده ما بپیوندید</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            امروز اولین قدم را برای ارتقای مهارت‌های مدیریتی و رهبری خود بردارید و به جمع هزاران دانشجوی موفق ما بپیوندید.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/courses">
              <Button className="text-orange-600 bg-white hover:bg-gray-100 border-white">
                مشاهده دوره‌ها
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                ثبت‌نام کنید
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
