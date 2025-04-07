
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  CreditCard, 
  BookOpen, 
  Heart, 
  LogOut, 
  Edit, 
  Save, 
  Wallet,
  Plus,
  CheckCircle
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { CourseProps } from '../courses/CourseCard';

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    avatar: string;
    balance: number;
    bio: string;
    phone: string;
  };
  enrolledCourses: CourseProps[];
  savedCourses: CourseProps[];
}

const UserProfile = ({ user, enrolledCourses, savedCourses }: UserProfileProps) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
    phone: user.phone,
    avatar: user.avatar
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate profile update
    setTimeout(() => {
      setEditing(false);
      toast({
        title: "پروفایل به‌روزرسانی شد",
        description: "تغییرات شما با موفقیت ذخیره شد.",
      });
    }, 1000);
  };

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const handleLogout = () => {
    // Simulate logout
    toast({
      title: "خروج از حساب کاربری",
      description: "شما با موفقیت از حساب کاربری خود خارج شدید.",
    });
    // Redirect to home
    window.location.href = '/';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <div className="flex flex-col items-center mb-6">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">{user.name}</h3>
              <p className="text-gray-500">{user.email}</p>
            </div>
            
            <Separator className="mb-6" />
            
            <div className="space-y-2">
              <a 
                href="#profile" 
                className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <User className="h-5 w-5 ml-3 text-gray-600" />
                <span>پروفایل</span>
              </a>
              <a 
                href="#wallet" 
                className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Wallet className="h-5 w-5 ml-3 text-gray-600" />
                <span>کیف پول</span>
              </a>
              <a 
                href="#courses" 
                className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <BookOpen className="h-5 w-5 ml-3 text-gray-600" />
                <span>دوره‌های من</span>
              </a>
              <a 
                href="#saved" 
                className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Heart className="h-5 w-5 ml-3 text-gray-600" />
                <span>علاقه‌مندی‌ها</span>
              </a>
              <a 
                href="#payment" 
                className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <CreditCard className="h-5 w-5 ml-3 text-gray-600" />
                <span>تاریخچه پرداخت</span>
              </a>
              <button 
                onClick={handleLogout}
                className="flex items-center w-full p-2 rounded-md hover:bg-gray-100 transition-colors text-red-500"
              >
                <LogOut className="h-5 w-5 ml-3" />
                <span>خروج</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="profile">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="profile">پروفایل</TabsTrigger>
              <TabsTrigger value="wallet">کیف پول</TabsTrigger>
              <TabsTrigger value="courses">دوره‌های من</TabsTrigger>
              <TabsTrigger value="saved">علاقه‌مندی‌ها</TabsTrigger>
              <TabsTrigger value="payment">تاریخچه پرداخت</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">اطلاعات کاربری</h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={toggleEdit}
                  className="flex items-center"
                >
                  {editing ? (
                    <>
                      <Save className="h-4 w-4 ml-2" />
                      <span>ذخیره</span>
                    </>
                  ) : (
                    <>
                      <Edit className="h-4 w-4 ml-2" />
                      <span>ویرایش</span>
                    </>
                  )}
                </Button>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">نام و نام خانوادگی</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={!editing}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">آدرس ایمیل</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!editing}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">شماره تماس</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={!editing}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="bio">درباره من</Label>
                    <textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      disabled={!editing}
                      rows={4}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  {editing && (
                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        ذخیره تغییرات
                      </Button>
                    </div>
                  )}
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="wallet" className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">کیف پول</h3>
              
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white mb-8">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg opacity-80">موجودی فعلی</p>
                    <p className="text-3xl font-bold mt-2">{user.balance.toLocaleString()} تومان</p>
                  </div>
                  <Wallet className="h-16 w-16 opacity-50" />
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4">افزایش موجودی</h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[100000, 200000, 500000, 1000000].map((amount) => (
                    <button
                      key={amount}
                      className="border border-gray-200 rounded-md p-3 text-center hover:border-orange-500 hover:bg-orange-50 transition-colors"
                    >
                      {amount.toLocaleString()} تومان
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center space-x-reverse space-x-4">
                  <Input
                    type="number"
                    placeholder="مبلغ دلخواه (تومان)"
                    className="flex-grow"
                  />
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    افزایش موجودی
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">تراکنش‌های اخیر</h4>
                
                <div className="border border-gray-200 rounded-md">
                  <div className="grid grid-cols-4 p-3 bg-gray-50 border-b font-medium">
                    <div>تاریخ</div>
                    <div>شرح</div>
                    <div>مبلغ</div>
                    <div>وضعیت</div>
                  </div>
                  
                  <div className="p-6 text-center text-gray-500">
                    <p>هیچ تراکنشی یافت نشد.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="courses" className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">دوره‌های من</h3>
              
              {enrolledCourses.length === 0 ? (
                <div className="text-center py-8">
                  <BookOpen className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 mb-4">شما هنوز در هیچ دوره‌ای ثبت‌نام نکرده‌اید.</p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    مشاهده دوره‌ها
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Enrolled courses would be listed here */}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="saved" className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">علاقه‌مندی‌ها</h3>
              
              {savedCourses.length === 0 ? (
                <div className="text-center py-8">
                  <Heart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 mb-4">شما هنوز دوره‌ای را به علاقه‌مندی‌ها اضافه نکرده‌اید.</p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    مشاهده دوره‌ها
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Saved courses would be listed here */}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="payment" className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">تاریخچه پرداخت</h3>
              
              <div className="border border-gray-200 rounded-md">
                <div className="grid grid-cols-5 p-3 bg-gray-50 border-b font-medium">
                  <div>تاریخ</div>
                  <div>شماره فاکتور</div>
                  <div>شرح</div>
                  <div>مبلغ</div>
                  <div>وضعیت</div>
                </div>
                
                <div className="p-6 text-center text-gray-500">
                  <p>تاریخچه پرداختی یافت نشد.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
