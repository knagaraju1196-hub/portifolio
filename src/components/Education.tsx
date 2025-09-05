import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Mechanical Engineering",
      school: "Sreenidhi Institute Of Science and technology",
      duration: "2019 - 2023",
      location: "India",
      gpa: "8.2",
      specialization: "Mechanical Engineering",
      highlights: [
        "Strong foundation in mechanical engineering principles",
        "Coursework in thermodynamics, fluid mechanics, and machine design",
        "Hands-on experience with CAD software and engineering tools",
        "Final year project in mechanical design"
      ]
    }
  ];

  const certifications = [
    {
      name: "SolidWorks Proficiency",
      issuer: "udemy",
      date: "2022",
      credential: "Professional Level"
    },
    {
      name: "AutoCAD Certification",
      issuer: "Self-Developed",
      date: "2022",
      credential: "Advanced Level"
    },
    {
      name: "Mechanical Engineering Fundamentals",
      issuer: "Academic Achievement",
      date: "2022",
      credential: "B.Tech Degree"
    },
    {
      name: "Engineering Design Principles",
      issuer: "Academic Coursework",
      date: "2022",
      credential: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong academic foundation combined with industry certifications
              that demonstrate commitment to continuous learning and professional development.
            </p>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <h5 className="text-lg text-blue-600 font-semibold">{edu.school}</h5>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{edu.duration}</span>
                      </div>
                      <p className="text-gray-600">{edu.location}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600"><strong>GPA:</strong> {edu.gpa}</p>
                      <p className="text-gray-600"><strong>Specialization:</strong> {edu.specialization}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">Highlights:</h6>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900">{cert.name}</h4>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm">
                    <strong>Credential ID:</strong> {cert.credential}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;