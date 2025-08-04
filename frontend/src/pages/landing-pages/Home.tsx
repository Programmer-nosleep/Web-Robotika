import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200/50">
      <Navbar />

      <div className='flex min-h-screen items-center'>
        <main className="relative z-10 pt-24 px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* <div className="flex items-center space-x-3">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">What's new?</span>
              <span className="text-gray-500 text-sm font-medium">Demo Application - Beta Version</span>
            </div> */}
  
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Selamat Datang <br /> Robotics Community
            </h1>
  
            <p className="text-gray-500 text-lg">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
  
            <div className="flex space-x-4">
              <Button asChild>
                <Link to="/information">Learn More</Link>
              </Button>
            </div>
          </div>
  
          <div className="hidden md:flex justify-center">
            <div className="border border-gray-200 rounded-2xl shadow-xl overflow-hidden bg-white p-4 w-full max-w-md">
              
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
