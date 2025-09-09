import React from 'react';
import { Award, Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "2+ Years Experience",
      description: "Proven track record in mechanical design and CAD modeling"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Design Excellence",
      description: "Expertise in SolidWorks, AutoCAD, Creo, Fusion360, Catia V5and 3D modeling"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Technical Skills",
      description: "Strong foundation in mechanical engineering principles"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Graduate",
      description: "Graduate with modern engineering knowledge and skills in mechanical engineering"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate and motivated Mechanical Engineering Designer with 1 year of experience. I’ve developed a solid foundation in creating detailed 2D and 3D mechanical drawings and models, focusing on accuracy and practicality. My experience includes designing mechanical components and systems that are both efficient and reliable. I thrive in collaborative environments,
 working closely with engineering teams to turn ideas into precise, actionable designs. I’m eager to continue growing and
 contributing to innovative projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
              <p className="text-gray-300 mb-4">
                With 2 years of experience in mechanical engineering, I've developed expertise
                in CAD design, mechanical systems, and engineering analysis. My journey began
                with a Bachelor's degree in Mechanical Engineering, where I discovered my passion for
                creating innovative solutions to real-world problems.
              </p>
              <p className="text-gray-300 mb-4">
                Throughout my career, I've focused on developing strong technical skills in design
                software like SolidWorks,Creo, Fusion360 and AutoCAD, while gaining practical experience in
                mechanical system design and analysis.
              </p>
              <p className="text-gray-300">
                I'm passionate about applying modern engineering principles to solve complex problems
                and am always eager to learn new technologies and methodologies in the field of
                mechanical engineering.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Engineering workspace"
                className="rounded-lg shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-lg"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{highlight.title}</h4>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;