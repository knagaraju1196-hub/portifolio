import React from 'react';
import { Settings, Cpu, Database, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Design & CAD",
      skills: [
        { name: "SolidWorks", level: 95 },
        { name: "AutoCAD", level: 90 },
        { name: "3D Modeling", level: 85 },
        { name: "Fusion360", level: 95},
        { name: "GD & T", level: 90 },
        { name: "Technical Drawing", level: 88 },
      ]
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "Engineering Analysis",
      skills: [
        { name: "Engineering Mechanics", level: 85 },
        { name: "Thermodynamics", level: 80 },
        { name: "Fluid Mechanics", level: 78 },
        { name: "Machine Design", level: 82 }
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Technical Skills",
      skills: [
        { name: "Material Science", level: 90 },
        { name: "Manufacturing Processes", level: 90 },
        { name: "Quality Control", level: 80 },
        { name: "Engineering Documentation", level: 85 }
      ]
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Professional Skills",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 80 },
        { name: "Communication", level: 85 },
        { name: "Continuous Learning", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit of engineering skills developed through years of hands-on experience
              and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-white ml-3">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Competencies</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-300 mb-1">Programming Languages</h4>
                <p className="text-gray-500">Python, C++, CAM</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-300 mb-1">Industry Standards</h4>
                <p className="text-gray-500">Engineering Standards, Design Principles</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-300 mb-1">Certifications</h4>
                <h4 className="font-semibold text-gray-500 mb-1">Udemy</h4>
                <p className="text-gray-500">Solidworks</p>
                </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-300 mb-1">Graduation</h4>
                <h4 className="font-semibold text-gray-500 mb-1">Bachelors</h4>
                <p className="text-gray-500">Mechanical Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;