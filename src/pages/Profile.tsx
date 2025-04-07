
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UserProfile from '@/components/user/UserProfile';

// Sample user data
const user = {
  name: 'علی محمدی',
  email: 'ali@example.com',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  balance: 500000,
  bio: 'مدیر منابع انسانی با بیش از ۵ سال تجربه در زمینه توسعه کارکنان و مدیریت تیم‌های کاری.',
  phone: '09123456789'
};

// Sample data for enrolled courses and saved courses
const enrolledCourses = [];
const savedCourses = [];

const Profile = () => {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gray-50 py-8">
        <UserProfile 
          user={user} 
          enrolledCourses={enrolledCourses} 
          savedCourses={savedCourses} 
        />
      </div>
      
      <Footer />
    </>
  );
};

export default Profile;
