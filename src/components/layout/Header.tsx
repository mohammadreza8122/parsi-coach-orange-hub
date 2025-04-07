
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogIn, Search, Book } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be replaced with actual auth state

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">مرکز آموزش</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">
              خانه
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-orange-500 transition-colors">
              دوره‌ها
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-orange-500 transition-colors">
              وبلاگ
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">
              درباره ما
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
              تماس با ما
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-orange-500 transition-colors">
              سوالات متداول
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-reverse space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            
            {isLoggedIn ? (
              <Link to="/profile">
                <Button variant="ghost" className="flex items-center">
                  <User className="ml-2 h-5 w-5" />
                  پروفایل
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="ghost" className="flex items-center">
                  <LogIn className="ml-2 h-5 w-5" />
                  ورود
                </Button>
              </Link>
            )}
            
            <Link to="/courses">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center">
                <Book className="ml-2 h-5 w-5" />
                مشاهده دوره‌ها
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 transform transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4">
          <Link to="/" className="text-lg font-medium text-gray-800 hover:text-orange-500" onClick={toggleMobileMenu}>
            خانه
          </Link>
          <Link to="/courses" className="text-lg font-medium text-gray-800 hover:text-orange-500" onClick={toggleMobileMenu}>
            دوره‌ها
          </Link>
          <Link to="/blog" className="text-lg font-medium text-gray-800 hover:text-orange-500" onClick={toggleMobileMenu}>
            وبلاگ
          </Link>
          <Link to="/about" className="text-lg font-medium text-gray-800 hover:text-orange-500" onClick={toggleMobileMenu}>
            درباره ما
          </Link>
          <Link to="/contact" className="text-lg font-medium text-gray-800 hover:text-orange-500" onClick={toggleMobileMenu}>
            تماس با ما
          </Link>
          <Link to="/faq" className="text-lg font-medium text-gray-800 hover:text-orange-500" onClick={toggleMobileMenu}>
            سوالات متداول
          </Link>
          
          <div className="border-t border-gray-200 pt-4 mt-4">
            {isLoggedIn ? (
              <Link to="/profile" className="flex items-center text-lg font-medium text-gray-800 hover:text-orange-500" onClick={toggleMobileMenu}>
                <User className="ml-2 h-5 w-5" />
                پروفایل
              </Link>
            ) : (
              <Link to="/login" className="flex items-center text-lg font-medium text-gray-800 hover:text-orange-500" onClick={toggleMobileMenu}>
                <LogIn className="ml-2 h-5 w-5" />
                ورود
              </Link>
            )}
          </div>
          
          <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4">
            مشاهده دوره‌ها
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
