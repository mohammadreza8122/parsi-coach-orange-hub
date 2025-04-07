
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthForm from '@/components/auth/AuthForm';

const Register = () => {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <AuthForm mode="register" />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Register;
