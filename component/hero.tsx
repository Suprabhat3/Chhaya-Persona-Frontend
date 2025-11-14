"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Main Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
          Conversations with the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Greatest Minds
          </span>
          , Powered by AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
          Chhaya Persona uses cutting-edge AI to bring famous figures to life,
          allowing for conversations and insights like never before
        </p>
        <button 
          onClick={() => router.push('/persona')}
          className="group relative mb-12 transform transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
        >
          <div className="absolute inset-0 bg-black/20 rounded-full transform translate-y-1 group-hover:translate-y-0.5 transition-transform duration-150"></div>
          <div className="relative bg-gradient-to-b from-pink-200 to-pink-300 hover:from-pink-150 hover:to-pink-250 text-gray-900 px-8 py-4 rounded-full font-medium text-lg border border-pink-300/50 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.7)]">
            Start Chatting
          </div>
        </button>
      </main>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-xl opacity-60"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-xl opacity-60"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-pink-200 to-red-200 rounded-full blur-xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-xl opacity-60"></div>
    </div>
  );
};

export default HeroSection;
