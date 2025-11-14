"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 pt-5 max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-2 cursor-pointer"
        onClick={() => router.push('/')}>
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span><img src="/favicon.ico" alt="Logo" className="rounded" /></span>
          </div>
          <span className="md:inline-block text-xl font-bold text-gray-900">Chhaya Persona</span>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.push('/persona')}
            className="bg-sky-100 text-gray-800 px-6 py-2 rounded-full font-medium border border-sky-600 shadow-none hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.8)] transition-all duration-300"
          >
            Try Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
