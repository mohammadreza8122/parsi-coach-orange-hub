
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search } from 'lucide-react';

// Sample FAQ data
const faqItems = [
  {
    category: 'دوره‌های آموزشی',
    items: [
      {
        question: 'دوره‌های شما چگونه ارائه می‌شوند؟',
        answer: 'دوره‌های ما به صورت آنلاین و به شکل ویدیویی ارائه می‌شوند. پس از ثبت‌نام، شما به تمام محتوای دوره دسترسی خواهید داشت و می‌توانید در هر زمان و هر مکان به یادگیری بپردازید. بعضی از دوره‌ها همچنین شامل منابع دانلودی، تمرین‌ها و ارزیابی‌هایی هستند که به تثبیت یادگیری شما کمک می‌کنند.'
      },
      {
        question: 'آیا پس از خرید دوره، به آن دسترسی دائمی دارم؟',
        answer: 'بله، پس از خرید یک دوره، شما دسترسی مادام‌العمر به محتوای آن خواهید داشت. می‌توانید هر زمان که بخواهید به دوره مراجعه کنید، ویدیوها را مجدداً مشاهده کنید و از منابع آن استفاده کنید. این به شما امکان می‌دهد با سرعت دلخواه خود یاد بگیرید و در صورت نیاز، مطالب را مرور کنید.'
      },
      {
        question: 'آیا در پایان دوره، گواهی پایان دوره دریافت می‌کنم؟',
        answer: 'بله، پس از تکمیل موفقیت‌آمیز یک دوره، شما یک گواهی پایان دوره دریافت خواهید کرد. این گواهی تأیید می‌کند که شما دوره را با موفقیت به پایان رسانده‌اید و می‌توانید آن را در رزومه خود ذکر کنید یا به کارفرمایان نشان دهید.'
      },
      {
        question: 'آیا بخش‌هایی از دوره‌های پولی به صورت رایگان قابل مشاهده است؟',
        answer: 'بله، ما برای هر دوره پولی، بخش‌هایی را به صورت رایگان ارائه می‌دهیم تا شما بتوانید با سبک آموزشی مدرس و محتوای دوره آشنا شوید. این امکان به شما کمک می‌کند قبل از خرید، تصمیم آگاهانه‌تری بگیرید. برای مشاهده بخش‌های رایگان، کافی است به صفحه دوره مورد نظر مراجعه کنید.'
      },
      {
        question: 'اگر از دوره راضی نباشم، آیا امکان بازگشت وجه وجود دارد؟',
        answer: 'بله، ما یک دوره ۷ روزه بازگشت وجه بدون قید و شرط ارائه می‌دهیم. اگر به هر دلیلی از دوره راضی نباشید، می‌توانید در عرض ۷ روز از زمان خرید، درخواست بازگشت وجه دهید و ما بدون هیچ سؤالی، وجه شما را به طور کامل بازمی‌گردانیم.'
      }
    ]
  },
  {
    category: 'حساب کاربری و پرداخت',
    items: [
      {
        question: 'چگونه می‌توانم در سایت ثبت‌نام کنم؟',
        answer: 'برای ثبت‌نام در سایت، بر روی گزینه "ثبت‌نام" در بالای صفحه کلیک کنید. سپس اطلاعات لازم را وارد کنید و یک حساب کاربری ایجاد نمایید. پس از تأیید ایمیل، می‌توانید با نام کاربری و رمز عبور خود وارد سایت شوید و از امکانات آن استفاده کنید.'
      },
      {
        question: 'چه روش‌های پرداختی را پشتیبانی می‌کنید؟',
        answer: 'ما انواع روش‌های پرداخت از جمله درگاه‌های بانکی، کارت به کارت و پرداخت از طریق کیف پول را پشتیبانی می‌کنیم. همچنین امکان پرداخت اقساطی برای برخی از دوره‌ها وجود دارد. جزئیات بیشتر در صفحه پرداخت هر دوره قابل مشاهده است.'
      },
      {
        question: 'کیف پول چیست و چگونه از آن استفاده کنم؟',
        answer: 'کیف پول یک ویژگی در حساب کاربری شماست که به شما امکان می‌دهد موجودی خود را شارژ کنید و از آن برای خرید دوره‌ها استفاده نمایید. برای استفاده از کیف پول، ابتدا باید آن را از طریق پنل کاربری خود شارژ کنید. سپس می‌توانید هنگام خرید دوره، گزینه "پرداخت از کیف پول" را انتخاب کنید.'
      },
      {
        question: 'آیا امکان استفاده از کدهای تخفیف وجود دارد؟',
        answer: 'بله، ما به مناسبت‌های مختلف، کدهای تخفیف ارائه می‌دهیم. می‌توانید این کدها را هنگام پرداخت در قسمت "کد تخفیف" وارد کنید تا تخفیف اعمال شود. همچنین با عضویت در خبرنامه ما، می‌توانید از آخرین کدهای تخفیف و پیشنهادات ویژه مطلع شوید.'
      },
      {
        question: 'آیا می‌توانم اطلاعات پروفایل خود را ویرایش کنم؟',
        answer: 'بله، پس از ورود به حساب کاربری، می‌توانید به بخش "پروفایل" مراجعه کنید و اطلاعات شخصی خود را ویرایش نمایید. این شامل نام، ایمیل، شماره تماس و تصویر پروفایل می‌شود. همچنین می‌توانید رمز عبور خود را تغییر دهید.'
      }
    ]
  },
  {
    category: 'پشتیبانی و خدمات',
    items: [
      {
        question: 'چگونه می‌توانم با پشتیبانی تماس بگیرم؟',
        answer: 'شما می‌توانید از طریق فرم تماس در بخش "تماس با ما"، ایمیل support@example.com یا شماره تماس ۰۲۱-۱۲۳۴۵۶۷۸ با پشتیبانی ما ارتباط برقرار کنید. تیم پشتیبانی ما در روزهای کاری از ساعت ۹ صبح تا ۶ عصر آماده پاسخگویی به سؤالات شما هستند.'
      },
      {
        question: 'آیا امکان ارتباط با مدرسان دوره‌ها وجود دارد؟',
        answer: 'بله، در هر دوره، بخشی برای طرح سؤال و دریافت پاسخ وجود دارد که می‌توانید سؤالات خود را مطرح کنید و مدرس دوره به آن‌ها پاسخ خواهد داد. همچنین در برخی از دوره‌ها، جلسات پرسش و پاسخ آنلاین نیز برگزار می‌شود.'
      },
      {
        question: 'اگر در حین دوره با مشکل فنی مواجه شوم، چه کنم؟',
        answer: 'در صورت بروز هرگونه مشکل فنی، می‌توانید با پشتیبانی فنی ما تماس بگیرید. ما به سرعت مشکل شما را بررسی و رفع خواهیم کرد. همچنین می‌توانید به بخش "سؤالات متداول فنی" در سایت مراجعه کنید که راه‌حل‌های رایج برای مشکلات فنی در آن ارائه شده است.'
      },
      {
        question: 'آیا می‌توانم دوره‌ها را آفلاین تماشا کنم؟',
        answer: 'در حال حاضر، امکان دانلود ویدیوها برای تماشای آفلاین وجود ندارد و دوره‌ها فقط به صورت آنلاین قابل مشاهده هستند. این به دلیل حفظ حقوق مالکیت معنوی و جلوگیری از توزیع غیرمجاز محتوا است. با این حال، می‌توانید منابع همراه دوره را دانلود و آفلاین استفاده کنید.'
      },
      {
        question: 'آیا امکان درخواست دوره‌های جدید وجود دارد؟',
        answer: 'بله، ما همیشه از پیشنهادات کاربران خود استقبال می‌کنیم. می‌توانید موضوعات مورد علاقه خود را از طریق فرم "پیشنهاد دوره" در بخش تماس با ما ارسال کنید. تیم محتوایی ما پیشنهادات را بررسی و در صورت امکان، دوره‌های جدیدی بر اساس آن‌ها تولید خواهد کرد.'
      }
    ]
  },
  {
    category: 'بلاگ و محتوای آموزشی',
    items: [
      {
        question: 'آیا می‌توانم مقالات بلاگ را به اشتراک بگذارم؟',
        answer: 'بله، شما می‌توانید مقالات بلاگ ما را در شبکه‌های اجتماعی یا از طریق ایمیل با دوستان خود به اشتراک بگذارید. در پایین هر مقاله، دکمه‌های اشتراک‌گذاری قرار دارد که این کار را آسان می‌کند. ما از اشتراک‌گذاری مقالات استقبال می‌کنیم، اما لطفاً همیشه منبع را ذکر کنید.'
      },
      {
        question: 'چگونه می‌توانم از انتشار مقالات جدید مطلع شوم؟',
        answer: 'با عضویت در خبرنامه ما، می‌توانید از انتشار مقالات جدید در بلاگ مطلع شوید. همچنین می‌توانید ما را در شبکه‌های اجتماعی دنبال کنید تا آخرین مطالب را مشاهده کنید. در بخش "اشتراک در خبرنامه" در فوتر سایت، ایمیل خود را وارد کنید تا در لیست خبرنامه قرار بگیرید.'
      },
      {
        question: 'آیا می‌توانم در نوشتن مقالات بلاگ مشارکت کنم؟',
        answer: 'بله، ما از مشارکت متخصصان در نوشتن مقالات استقبال می‌کنیم. اگر تمایل به نوشتن مقاله در حوزه تخصصی خود دارید، می‌توانید با ایمیل blog@example.com با ما تماس بگیرید و موضوع پیشنهادی خود را همراه با رزومه ارسال کنید. تیم محتوایی ما پیشنهاد شما را بررسی و با شما تماس خواهد گرفت.'
      }
    ]
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(faqItems);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === '') {
      setFilteredItems(faqItems);
    } else {
      const results = faqItems.map(category => {
        const filteredQuestions = category.items.filter(item => 
          item.question.toLowerCase().includes(value.toLowerCase()) || 
          item.answer.toLowerCase().includes(value.toLowerCase())
        );
        return {
          ...category,
          items: filteredQuestions
        };
      }).filter(category => category.items.length > 0);
      
      setFilteredItems(results);
    }
  };
  
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">سوالات متداول</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            پاسخ سوالات رایج شما درباره دوره‌های آموزشی، نحوه خرید، دسترسی و پشتیبانی
          </p>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="جستجو در سوالات متداول..."
                className="pl-10 py-3"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg mb-4">نتیجه‌ای برای جستجوی شما یافت نشد.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setFilteredItems(faqItems);
                }}
              >
                نمایش همه سوالات
              </Button>
            </div>
          ) : (
            <>
              {/* FAQ Categories */}
              {searchTerm === '' && (
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {faqItems.map((category, index) => (
                    <a
                      key={index}
                      href={`#${category.category}`}
                      className="px-4 py-2 bg-white rounded-md shadow-sm hover:bg-orange-100 hover:text-orange-700 transition-colors"
                    >
                      {category.category}
                    </a>
                  ))}
                </div>
              )}
              
              {/* FAQ Items */}
              <div className="space-y-12">
                {filteredItems.map((category, categoryIndex) => (
                  <div key={categoryIndex} id={category.category}>
                    <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <AccordionItem 
                          key={itemIndex} 
                          value={`item-${categoryIndex}-${itemIndex}`}
                          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">{item.question}</AccordionTrigger>
                          <AccordionContent className="px-6 py-4 text-gray-700">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">هنوز سوال دیگری دارید؟</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            اگر پاسخ سوال خود را در بالا پیدا نکردید، می‌توانید با تیم پشتیبانی ما تماس بگیرید. ما آماده پاسخگویی به شما هستیم.
          </p>
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={() => window.location.href = '/contact'}
          >
            تماس با ما
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default FAQ;
