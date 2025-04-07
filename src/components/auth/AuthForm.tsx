
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface AuthFormProps {
  mode: 'login' | 'register';
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      
      if (mode === 'login') {
        // Simulate login
        toast({
          title: "ورود موفقیت‌آمیز",
          description: "به پنل کاربری خود خوش آمدید.",
        });
        navigate('/');
      } else {
        // Simulate registration
        toast({
          title: "ثبت‌نام موفقیت‌آمیز",
          description: "حساب شما با موفقیت ایجاد شد.",
        });
        navigate('/login');
      }
    }, 1500);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {mode === 'login' ? 'ورود به حساب کاربری' : 'ایجاد حساب کاربری'}
      </h2>
      
      <form onSubmit={handleSubmit}>
        {mode === 'register' && (
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">نام و نام خانوادگی</label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="نام و نام خانوادگی خود را وارد کنید"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        )}
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">آدرس ایمیل</label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ایمیل خود را وارد کنید"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">رمز عبور</label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="رمز عبور خود را وارد کنید"
              value={formData.password}
              onChange={handleChange}
            />
            <button 
              type="button"
              className="absolute inset-y-0 left-0 px-3 flex items-center"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>
        
        {mode === 'register' && (
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">تکرار رمز عبور</label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              required
              placeholder="رمز عبور خود را مجدداً وارد کنید"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        )}
        
        {mode === 'login' && (
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, rememberMe: checked as boolean }))
                }
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600 mr-2">
                مرا به خاطر بسپار
              </label>
            </div>
            
            <Link to="/forgot-password" className="text-sm text-orange-500 hover:text-orange-600 transition-colors">
              رمز عبور را فراموش کرده‌اید؟
            </Link>
          </div>
        )}
        
        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              در حال پردازش...
            </span>
          ) : mode === 'login' ? 'ورود' : 'ثبت‌نام'}
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        {mode === 'login' ? (
          <p className="text-gray-600">
            حساب کاربری ندارید؟{' '}
            <Link to="/register" className="text-orange-500 hover:text-orange-600 transition-colors">
              ثبت‌نام کنید
            </Link>
          </p>
        ) : (
          <p className="text-gray-600">
            قبلاً ثبت‌نام کرده‌اید؟{' '}
            <Link to="/login" className="text-orange-500 hover:text-orange-600 transition-colors">
              وارد شوید
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
