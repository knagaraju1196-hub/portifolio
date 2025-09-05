import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Waste Packet Analyzer",
      description: "Designed and fabricated a system for analyzing and sorting radioactive waste packets.",
      image: "/src/assets/Waste Packet Analyzer.png",
      technologies: ["Fusion360", "3D Modeling", "Engineering Analysis", "Technical Drawing"],
      duration: "12 months",
      achievements: [
        "Created detailed 3D models and technical drawings",
        "Performed stress analysis and optimization",
        "Documented design process and specifications",
        "Fabricated the 3D model to use in real world"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Hand Foot Cloth Monitor",
      description: "Developed a device for monitoring surface contamination on hands, feet, and clothing.",
      image: "https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["AutoCAD", "SolidWorks", "Fusion360", "Manufacturing"],
      duration: "3 months",
      achievements: [
        "Improved design efficiency through CAD optimization",
        "Created manufacturable designs with proper tolerances",
        "Developed technical documentation and drawings"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Design of Various Lead Shielding Products.",
      description: "Designed mechanical components and assemblies focusing on functionality, safety, and manufacturing considerations.",
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Fusion360", "Material Selection", "Safety Analysis", "Cost Optimization"],
      duration: "2 months",
      achievements: [
        "3D modelling of various products which are used in day-to-day life in Nuclear Field Services."
        
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Fabrication Of Generative Design Of Hexacopter Drone Chassis Using 3D Printer",
      description: "This project was a showcase for my skills in Autodesk Fusion 360 and my ability to turn digital visions into tangible reality through 3D printing. The result is An innovative drone chassis that's both robust and high-performance.",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Fusion360", "Ultimate Cura", " Documentation", "Anycubic 3d printing"],
      duration: "1 months",
      achievements: [
        "Performed detailed engineering calculations and analysis",
        "Validated design concepts through analytical methods",
        "Created comprehensive technical reports and documentation"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of innovative engineering solutions that demonstrate my expertise
              in mechanical design, analysis, and problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 text-sm flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="flex space-x-4 pt-4 border-t border-gray-100">
                    <a
                      href={project.links.demo}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span className="text-sm font-medium">View Details</span>
                    </a>
                    <a
                      href={project.links.github}
                      className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      <span className="text-sm font-medium">Documentations</span>
                    </a>
                  </div> */}
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;