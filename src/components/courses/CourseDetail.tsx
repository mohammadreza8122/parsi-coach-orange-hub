
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Clock, 
  User, 
  Calendar, 
  Star, 
  FileText, 
  MessageCircle, 
  PlayCircle,
  CheckCircle,
  Lock,
  Plus,
  Minus,
  Heart
} from 'lucide-react';
import { CourseProps } from './CourseCard';

interface InstructorType {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  expertise: string[];
}

interface SectionType {
  id: string;
  title: string;
  duration: string;
  lessons: {
    id: string;
    title: string;
    duration: string;
    isFree: boolean;
  }[];
}

interface CourseDetailProps extends CourseProps {
  description: string;
  longDescription: string;
  requirements: string[];
  targetAudience: string[];
  whatYouWillLearn: string[];
  lastUpdated: string;
  instructor: InstructorType;
  sections: SectionType[];
}

const CourseDetail = ({ 
  title,
  image,
  instructor,
  rating,
  reviewCount,
  price,
  originalPrice,
  duration,
  isPremium,
  description,
  longDescription,
  requirements,
  targetAudience,
  whatYouWillLearn,
  lastUpdated,
  sections
}: CourseDetailProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [liked, setLiked] = useState(false);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const totalLessons = sections.reduce((acc, section) => acc + section.lessons.length, 0);
  const freeLessons = sections.reduce((acc, section) => acc + section.lessons.filter(lesson => lesson.isFree).length, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Course Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{title}</h1>
          
          {/* Course Image (Mobile Only) */}
          <div className="lg:hidden mb-6">
            <img src={image} alt={title} className="w-full rounded-lg" />
          </div>
          
          {/* Course Info */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-700 mb-6">{description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center">
                <User className="h-5 w-5 text-orange-500 ml-2" />
                <div>
                  <p className="text-sm text-gray-500">مدرس</p>
                  <p className="text-gray-800">{instructor.name}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-orange-500 ml-2" />
                <div>
                  <p className="text-sm text-gray-500">مدت دوره</p>
                  <p className="text-gray-800">{duration}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-orange-500 ml-2" />
                <div>
                  <p className="text-sm text-gray-500">تعداد درس‌ها</p>
                  <p className="text-gray-800">{totalLessons} درس</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-orange-500 ml-2" />
                <div>
                  <p className="text-sm text-gray-500">آخرین به‌روزرسانی</p>
                  <p className="text-gray-800">{lastUpdated}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center ml-4">
                  <Star className="h-5 w-5 text-yellow-400 ml-1" />
                  <span className="text-gray-800">{rating}</span>
                  <span className="text-gray-500 text-sm mr-1">({reviewCount} نظر)</span>
                </div>
                
                <button onClick={toggleLike} className="flex items-center text-gray-500 hover:text-red-500 transition-colors">
                  <Heart className={`h-5 w-5 ml-1 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
                  <span>پسندیدن</span>
                </button>
              </div>
              
              <div className="hidden lg:block">
                {isPremium ? (
                  <div className="flex items-center">
                    <span className="text-orange-500 font-bold text-xl">{price.toLocaleString()} تومان</span>
                    {originalPrice && (
                      <span className="text-gray-400 text-sm line-through mr-2">
                        {originalPrice.toLocaleString()} تومان
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-green-500 font-bold text-xl">رایگان</span>
                )}
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="overview" className="bg-white rounded-lg shadow-md">
            <TabsList className="grid grid-cols-4 p-0 rounded-t-lg">
              <TabsTrigger value="overview" className="py-3 rounded-none rounded-tr-lg">محتوا</TabsTrigger>
              <TabsTrigger value="curriculum" className="py-3 rounded-none">سرفصل‌ها</TabsTrigger>
              <TabsTrigger value="instructor" className="py-3 rounded-none">مدرس</TabsTrigger>
              <TabsTrigger value="reviews" className="py-3 rounded-none rounded-tl-lg">نظرات</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="p-6">
              <h3 className="text-xl font-bold mb-4">معرفی دوره</h3>
              <div className="text-gray-700 space-y-4">
                <p>{longDescription}</p>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">آنچه خواهید آموخت</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                {whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 ml-2 mt-0.5" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">پیش‌نیازها</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                {requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold mt-8 mb-4">مخاطبان هدف</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                {targetAudience.map((audience, index) => (
                  <li key={index}>{audience}</li>
                ))}
              </ul>
            </TabsContent>
            
            <TabsContent value="curriculum" className="p-6">
              <h3 className="text-xl font-bold mb-4">سرفصل‌های دوره</h3>
              <div className="text-gray-700 mb-4">
                <p>این دوره شامل {totalLessons} درس ({duration} ساعت آموزش) است</p>
              </div>
              
              <div className="space-y-4">
                {sections.map((section) => (
                  <div key={section.id} className="border border-gray-200 rounded-md overflow-hidden">
                    <div 
                      className="flex justify-between items-center bg-gray-50 p-4 cursor-pointer"
                      onClick={() => toggleSection(section.id)}
                    >
                      <div className="flex items-center">
                        {expandedSections[section.id] ? (
                          <Minus className="h-5 w-5 text-orange-500 ml-2" />
                        ) : (
                          <Plus className="h-5 w-5 text-orange-500 ml-2" />
                        )}
                        <h4 className="font-bold text-gray-800">{section.title}</h4>
                      </div>
                      <div className="text-gray-500 text-sm">
                        {section.lessons.length} درس • {section.duration}
                      </div>
                    </div>
                    
                    {expandedSections[section.id] && (
                      <div className="divide-y divide-gray-100">
                        {section.lessons.map((lesson) => (
                          <div key={lesson.id} className="p-4 flex justify-between items-center">
                            <div className="flex items-center">
                              {lesson.isFree ? (
                                <PlayCircle className="h-5 w-5 text-green-500 ml-2" />
                              ) : (
                                <Lock className="h-5 w-5 text-gray-400 ml-2" />
                              )}
                              <span className="text-gray-800">{lesson.title}</span>
                              {lesson.isFree && (
                                <span className="mr-2 text-xs bg-green-100 text-green-600 py-0.5 px-2 rounded-full">
                                  رایگان
                                </span>
                              )}
                            </div>
                            <span className="text-gray-500 text-sm">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="instructor" className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <img src={instructor.avatar} alt={instructor.name} className="w-32 h-32 rounded-full mx-auto" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                  <p className="text-gray-500 mb-4">{instructor.expertise.join(' • ')}</p>
                  <p className="text-gray-700">{instructor.bio}</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="p-6">
              <h3 className="text-xl font-bold mb-4">نظرات دانشجویان</h3>
              <div className="flex flex-col items-center mb-8">
                <div className="flex items-center mb-2">
                  <span className="text-3xl font-bold text-gray-800 ml-2">{rating}</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`h-6 w-6 ${star <= Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-500">بر اساس {reviewCount} نظر</p>
              </div>
              
              <div className="space-y-6">
                {/* Placeholder for reviews */}
                <p className="text-center text-gray-500">نظری برای این دوره ثبت نشده است. اولین نفری باشید که نظر می‌دهد!</p>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-bold mb-4">نظر خود را ثبت کنید</h4>
                <div className="flex items-center mb-4">
                  <span className="ml-2">امتیاز شما:</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-gray-300 cursor-pointer hover:text-yellow-400" />
                    ))}
                  </div>
                </div>
                <textarea 
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-4" 
                  rows={4} 
                  placeholder="نظر خود را بنویسید..."
                ></textarea>
                <Button>ثبت نظر</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Course Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            {/* Course Preview Image */}
            <div className="hidden lg:block mb-6">
              <img src={image} alt={title} className="w-full rounded-lg" />
            </div>
            
            {/* Course Enrollment Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                {isPremium ? (
                  <div className="flex items-center mb-2">
                    <span className="text-orange-500 font-bold text-2xl">{price.toLocaleString()} تومان</span>
                    {originalPrice && (
                      <span className="text-gray-400 text-sm line-through mr-2">
                        {originalPrice.toLocaleString()} تومان
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-green-500 font-bold text-2xl">رایگان</span>
                )}
              </div>
              
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-4">
                ثبت‌نام در دوره
              </Button>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">تعداد درس‌ها:</span>
                  <span className="font-medium">{totalLessons} درس</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">دروس رایگان:</span>
                  <span className="font-medium">{freeLessons} درس</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">مدت زمان:</span>
                  <span className="font-medium">{duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">سطح دوره:</span>
                  <span className="font-medium">پیشرفته</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">دسترسی:</span>
                  <span className="font-medium">مادام‌العمر</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">کد تخفیف دارید؟</span>
                  <button className="text-orange-500 hover:text-orange-600 transition-colors">
                    اعمال کد
                  </button>
                </div>
                
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="کد تخفیف" 
                    className="flex-grow border border-gray-300 rounded-r-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                  />
                  <Button variant="outline" className="rounded-l-md rounded-r-none border-r-0">
                    اعمال
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
