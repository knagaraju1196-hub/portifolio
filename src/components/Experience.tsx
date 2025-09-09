import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Noki technologies Pvt Ltd",
      position: "Mechanical Design Engineer",
      duration: "Sept 2024 - Present",
      location: "India",
      description: "Working as a mechanical engineer focusing on design and analysis of mechanical systems using CAD software and engineering principles.",
      achievements: [
        "Developed proficiency in SolidWorks, Fusion360 and AutoCAD for 3D modeling and technical drawings",
        "Applied engineering principles to solve design challenges",
        "Collaborated with team members on various mechanical design projects",
        "Gained hands-on experience in mechanical system for medical industry"
      ]
    },
    {
      company: "Nikhita Industries",
      position: "AutoCAD Designer/draftman",
      duration: "Jan 2024 - Sept 2024",
      location: "India",
      description: " Assisted in creating detailed 2D and 3D drawings for various projects, including mechanical components, and electrical layouts, using AutoCAD software.",
      achievements: [
        " Collaborated with senior designers and engineers to understand project requirements and contribute to the development of design solutions.",
        " Created and maintained complex 2D and 3D models, including flat patterns, bends, and forming tools. Developed and implemented standardized sheet metal design practices and workflows. Utilized AutoCAD's sheet metal features to create and edit sheet metal parts, including wall thickness, bend radius, and relief cuts.",
        " Assisted in providing technical support to colleagues, troubleshooting drawing issues, and proposing solutions to overcome design challenges."
      ]
    },
    {
      company: "National Small Industries Coorporation",
      position: "Internship",
      duration: "Sept 2022 - Oct 2022",
      location: "India",
      description: "Completed engineering training and internship programs to gain practical experience in Ansys.",
      achievements: [
        "Learned fundamental engineering practices and industry standards",
        "Gained exposure to various mechanical engineering applications",
        "Developed technical skills in CAD software and engineering analysis",
        "Built foundation for professional engineering career"
      ]
    },
    {
      company: "Quinint techsoft ",
      position: "Internship",
      duration: "Sept 2021 - Oct 2021",
      location: "India",
      description: "Completed engineering training and internship programs to gain practical experience in mechanical engineering applications.",
      achievements: [
        "Learned fundamental engineering practices for 3D printing",
        "Gained exposure to various Softwares",
        "Developed technical skills analysis",
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A progressive career in mechanical engineering with increasing responsibilities
              and impactful contributions to innovative projects.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-600"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-black shadow-lg z-10"></div>

                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-semibold">{exp.duration}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                    <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                    
                    <div className="flex items-center mb-4">
                      <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-300">{exp.location}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-white mb-2">Key Achievements:</h5>
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;