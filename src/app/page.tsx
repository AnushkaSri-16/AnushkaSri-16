'use client';

import Link from 'next/link';
import { Users, PlusCircle, Eye } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Dual Portal Website
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern platform with separate portals for content management and public viewing.
            Choose your portal to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Admin Portal Card */}
          <Link href="/admin" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-300 group-hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <PlusCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Admin Portal
                </h2>
                <p className="text-gray-600 mb-6">
                  Create, manage, and organize your posts. Full content management capabilities for administrators.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Features:</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Add new posts</li>
                    <li>• Manage existing content</li>
                    <li>• Delete posts</li>
                    <li>• Real-time preview</li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>

          {/* Public Portal Card */}
          <Link href="/posts" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-green-300 group-hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Public Portal
                </h2>
                <p className="text-gray-600 mb-6">
                  Browse and read all published posts. Clean, responsive interface for the best reading experience.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Features:</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Browse all posts</li>
                    <li>• Responsive design</li>
                    <li>• Search functionality</li>
                    <li>• Clean reading interface</li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <Users className="w-8 h-8 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Built for Modern Web
            </h3>
            <p className="text-gray-600">
              This application is built with Next.js, TypeScript, and Tailwind CSS, 
              optimized for performance and ready for deployment on Vercel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}