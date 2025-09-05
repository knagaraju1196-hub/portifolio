import React from 'react';
import { Download, Mail, Linkedin, Github } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              //src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-8 shadow-2xl object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Katta Nagaraju
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
            Mechanical Design Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate mechanical engineer with 2 years of experience in design engineering, 
            CAD modeling, and manufacturing processes. Specialized in SolidWorks, AutoCAD, 
            and mechanical system design with a strong foundation in engineering principles.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
              <Download size={20} />
              <span>Download Resume</span>
            </button>
            
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
              <Mail size={20} />
              <span>Get in Touch</span>
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/nagaraju-katta-671137270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-blue-600 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              //href="https://github.com/johndoe"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;