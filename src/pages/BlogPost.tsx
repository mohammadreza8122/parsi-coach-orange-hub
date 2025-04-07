
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, User, MessageCircle, Tag, ChevronLeft, Heart } from 'lucide-react';

// Sample blog post data
const blogPostSample = {
  id: '1',
  title: '۵ اصل مهم برای موفقیت در مربیگری تیم‌های کاری',
  image: 'https://images.unsplash.com/photo-1565398255801-6c0b6aaece95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  author: {
    name: 'دکتر علی رضایی',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'متخصص در زمینه مربیگری و توسعه تیم‌های کاری با بیش از ۱۰ سال تجربه'
  },
  date: '۱۲ مرداد ۱۴۰۴',
  readTime: '۸ دقیقه',
  content: `<p>مربیگری تیم‌های کاری یکی از مهم‌ترین مهارت‌هایی است که مدیران و رهبران امروزی باید به آن مسلط باشند. یک مربی خوب می‌تواند پتانسیل افراد را شکوفا کند و عملکرد تیم را به سطح بالاتری ارتقا دهد. در این مقاله، ۵ اصل اساسی برای موفقیت در مربیگری تیم‌های کاری را بررسی می‌کنیم.</p>

  <h2>۱. ایجاد فضای اعتماد</h2>
  <p>اعتماد، اساس هر رابطه مربیگری موفق است. افراد باید احساس امنیت کنند تا بتوانند آسیب‌پذیری نشان دهند، ریسک کنند و درباره چالش‌های خود صحبت کنند. به عنوان یک مربی، باید:</p>
  <ul>
    <li>به تعهدات خود پایبند باشید</li>
    <li>اطلاعات محرمانه را حفظ کنید</li>
    <li>صادقانه و شفاف ارتباط برقرار کنید</li>
    <li>قضاوت‌های پیش‌داورانه را کنار بگذارید</li>
    <li>به حرف‌های افراد با دقت گوش دهید</li>
  </ul>

  <h2>۲. تسلط بر گوش دادن فعال</h2>
  <p>مربیان موفق می‌دانند که گوش دادن مهم‌تر از صحبت کردن است. گوش دادن فعال به این معناست که با تمام وجود به فرد مقابل توجه کنید، نه اینکه فقط منتظر باشید تا نوبت صحبت شما برسد. این مهارت شامل:</p>
  <ul>
    <li>تمرکز کامل بر فرد مقابل</li>
    <li>پرهیز از قطع کردن صحبت دیگران</li>
    <li>توجه به زبان بدن و لحن صدا</li>
    <li>پرسیدن سوالات روشنگر برای درک بهتر</li>
    <li>بازتاب دادن آنچه شنیده‌اید برای اطمینان از درک صحیح</li>
  </ul>

  <h2>۳. پرسیدن سوالات قدرتمند</h2>
  <p>سوالات قدرتمند می‌توانند افراد را به تفکر عمیق‌تر و کشف راه‌حل‌های خلاقانه هدایت کنند. این سوالات باز هستند (با بله یا خیر قابل پاسخ نیستند) و افراد را به تفکر انتقادی تشویق می‌کنند. مثال‌هایی از سوالات قدرتمند:</p>
  <ul>
    <li>"چه چیزی برای شما مهم‌ترین است؟"</li>
    <li>"چه موانعی سر راه شما قرار دارند؟"</li>
    <li>"اگر هیچ محدودیتی نداشتید، چه کاری انجام می‌دادید؟"</li>
    <li>"چه درس‌هایی از این تجربه گرفته‌اید؟"</li>
    <li>"چه گزینه‌های دیگری می‌توانید در نظر بگیرید؟"</li>
  </ul>

  <h2>۴. ارائه بازخورد سازنده</h2>
  <p>بازخورد موثر می‌تواند به رشد و پیشرفت افراد کمک کند، اما باید به شیوه‌ای سازنده ارائه شود. یک بازخورد سازنده:</p>
  <ul>
    <li>به موقع است - مدت زیادی از رویداد نگذشته باشد</li>
    <li>خاص است - به جای کلی‌گویی، به موارد مشخص اشاره می‌کند</li>
    <li>متمرکز بر رفتار است، نه شخصیت فرد</li>
    <li>شامل تاثیر آن رفتار است</li>
    <li>با پیشنهاداتی برای بهبود همراه است</li>
  </ul>

  <h2>۵. تشویق یادگیری مستمر</h2>
  <p>مربیان موفق فرهنگ یادگیری مستمر را ترویج می‌دهند. آنها اعضای تیم را تشویق می‌کنند تا:</p>
  <ul>
    <li>از تجربیات خود درس بگیرند</li>
    <li>ریسک‌های حساب شده انجام دهند</li>
    <li>به دنبال چالش‌های جدید باشند</li>
    <li>اشتباهات را فرصتی برای یادگیری بدانند</li>
    <li>دانش و مهارت‌های خود را به طور مداوم به‌روز کنند</li>
  </ul>

  <h2>نتیجه‌گیری</h2>
  <p>مربیگری موثر تیم‌های کاری یک مهارت ارزشمند است که می‌تواند تاثیر شگرفی بر عملکرد افراد و موفقیت سازمان داشته باشد. با تمرکز بر این پنج اصل - ایجاد اعتماد، گوش دادن فعال، پرسیدن سوالات قدرتمند، ارائه بازخورد سازنده و تشویق یادگیری مستمر - می‌توانید مربی تاثیرگذاری برای تیم خود باشید.</p>

  <p>به یاد داشته باشید که مربیگری یک سفر است، نه یک مقصد. با تمرین و تعهد، می‌توانید مهارت‌های مربیگری خود را به طور مداوم بهبود بخشید و به اعضای تیم‌تان کمک کنید تا به پتانسیل کامل خود دست یابند.</p>`,
  tags: ['مربیگری', 'مدیریت تیم', 'توسعه مهارت', 'رهبری'],
  commentCount: 8,
  comments: [
    {
      id: 'c1',
      author: 'مهندس احمد توکلی',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
      date: '۱۵ مرداد ۱۴۰۴',
      content: 'مقاله بسیار مفیدی بود. من به تازگی به عنوان سرپرست تیم منصوب شده‌ام و این اصول به من کمک زیادی خواهد کرد. به خصوص در مورد ارائه بازخورد سازنده که همیشه برایم چالش‌برانگیز بوده است.'
    },
    {
      id: 'c2',
      author: 'دکتر سارا محمدی',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      date: '۱۴ مرداد ۱۴۰۴',
      content: 'من چند سالی است در زمینه مربیگری فعالیت می‌کنم و باید بگویم که این ۵ اصل واقعاً جوهره مربیگری موفق هستند. به نظرم اصل ایجاد اعتماد از همه مهم‌تر است و پایه همه اصول دیگر محسوب می‌شود.'
    }
  ],
  relatedPosts: [
    {
      id: '2',
      title: 'چگونه یک مدیر الهام‌بخش برای تیم خود باشیم؟',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '۵ مرداد ۱۴۰۴'
    },
    {
      id: '3',
      title: 'استراتژی‌های مقابله با تعارض در محیط کار',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '۲۸ تیر ۱۴۰۴'
    },
    {
      id: '4',
      title: 'هوش هیجانی و نقش آن در رهبری موفق',
      image: 'https://images.unsplash.com/photo-1525770041010-2a1233dd8152?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '۱۵ تیر ۱۴۰۴'
    }
  ]
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, you would fetch the blog post based on the ID
  // For now, we'll just use the sample data
  const post = blogPostSample;
  
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
                <a href="/blog" className="text-gray-500 hover:text-orange-500">وبلاگ</a>
              </li>
              <li className="text-gray-400">
                <span>/</span>
              </li>
              <li className="text-orange-500 font-medium truncate">{post.title}</li>
            </ol>
          </nav>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article>
              {/* Post Header */}
              <header className="mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{post.title}</h1>
                
                <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6 space-x-reverse space-x-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 ml-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Clock className="h-4 w-4 ml-1" />
                    <span>زمان مطالعه: {post.readTime}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <MessageCircle className="h-4 w-4 ml-1" />
                    <span>{post.commentCount} نظر</span>
                  </div>
                </div>
                
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full rounded-lg"
                />
              </header>
              
              {/* Post Content */}
              <div 
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
              
              {/* Post Tags */}
              <div className="flex flex-wrap items-center mb-8">
                <Tag className="h-5 w-5 ml-2 text-gray-500" />
                {post.tags.map((tag, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-orange-100 hover:text-orange-700 transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
              
              {/* Author Bio */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full mb-4 md:mb-0 md:ml-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{post.author.name}</h3>
                    <p className="text-gray-600">{post.author.bio}</p>
                  </div>
                </div>
              </div>
              
              {/* Comments Section */}
              <section className="mb-8">
                <h3 className="text-xl font-bold mb-6">نظرات ({post.comments.length})</h3>
                
                <div className="space-y-6 mb-8">
                  {post.comments.map(comment => (
                    <div key={comment.id} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start mb-4">
                        <img
                          src={comment.avatar}
                          alt={comment.author}
                          className="w-10 h-10 rounded-full ml-3"
                        />
                        <div>
                          <h4 className="font-bold">{comment.author}</h4>
                          <p className="text-gray-500 text-sm">{comment.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  ))}
                </div>
                
                {/* Comment Form */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-bold mb-4">ارسال نظر</h3>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">نام</label>
                        <Input id="name" type="text" placeholder="نام خود را وارد کنید" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">ایمیل</label>
                        <Input id="email" type="email" placeholder="ایمیل خود را وارد کنید" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="comment" className="block text-gray-700 mb-2">نظر</label>
                      <textarea
                        id="comment"
                        rows={5}
                        placeholder="نظر خود را بنویسید..."
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      ارسال نظر
                    </Button>
                  </form>
                </div>
              </section>
            </article>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Author Widget */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full ml-3"
                  />
                  <div>
                    <h3 className="font-bold">{post.author.name}</h3>
                    <p className="text-gray-500 text-sm">نویسنده</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  مشاهده همه مقالات
                </Button>
              </div>
              
              {/* Related Posts */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="font-bold text-lg mb-4">مقالات مرتبط</h3>
                <div className="space-y-4">
                  {post.relatedPosts.map(related => (
                    <Link key={related.id} to={`/blog/${related.id}`}>
                      <div className="flex items-start hover:bg-gray-50 p-2 rounded-md transition-colors">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-16 h-16 object-cover rounded-md ml-3"
                        />
                        <div>
                          <h4 className="font-medium text-gray-800 line-clamp-2">{related.title}</h4>
                          <p className="text-gray-500 text-sm">{related.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Tags */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="font-bold text-lg mb-4">برچسب‌ها</h3>
                <div className="flex flex-wrap">
                  {post.tags.map((tag, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2 mb-2 hover:bg-orange-100 hover:text-orange-700 transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-orange-500 text-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">عضویت در خبرنامه</h3>
                <p className="mb-4 text-sm opacity-90">برای دریافت آخرین مقالات و اخبار در خبرنامه ما عضو شوید</p>
                <div className="mb-3">
                  <Input
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    className="bg-white text-gray-800 w-full"
                  />
                </div>
                <Button className="w-full bg-white text-orange-500 hover:bg-gray-100">
                  عضویت
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default BlogPost;
