// path: @/modules/experience/ExperienceDesktop.tsx

// path: @/modules/experience/ExperienceDesktop.tsx
import React from 'react';

// Experience data with placeholder images
const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "College of Veterinary Medicine (westernU)",
    location: "Pomona, California",
    description: "Created an in-house web app that helps vet students and faculty track hands-on training, saving the school major licensing costs.",
    image: "/images/exp1.jpg"
  },
  {
    id: 2,
    title: "Software Engineering Researcher",
    company: "Google exploreCSR Program",
    location: "Carson, California",
    description: "Worked on Google-funded projects that made web apps snappier and explored new ways to model graphics data.",
    image: "/images/exp2.jpg"
  },
  {
    id: 3,
    title: "Software Engineer, Intern",
    company: "Turner Fairbank Highway Research Center (Federal Job)",
    location: "McLean, Virginia",
    description: "Automated realistic self-driving-car simulations for U.S. transportation researchers to test road-safety ideas faster.",
    image: "/images/exp3.jpg"
  },
  {
    id: 4,
    title: "Software Development Engineer in Test (SDET)",
    company: "Computing Alliance of Hispanic Serving Institutions",
    location: "Union, New Jersey",
    description: "Built smart test scripts that quickly spot hidden bugs, boosting reliability for student software projects.",
    image: "/images/exp4.jpg"
  },
  {
    id: 5,
    title: "Software Engineer and Program Lead",
    company: "Center for Innovation in STEM Education (Apple)",
    location: "Los Angeles Unified School District, California",
    description: "Led coding workshops in under-resourced LA schools, guiding teachers and kids through hands-on Swift and robotics projects.",
    image: "/images/exp5.jpg"
  },
  {
    id: 6,
    title: "Regional Sales Lead & Shadow Trainer",
    company: "T-Mobile",
    location: "Whittier, California",
    description: "Recognized as the most influential Mobile Expert & Shadow Trainer for the East Los Angeles Region.",
    image: "/images/exp6.jpg"
  },
  {
    id: 7,
    title: "Lead Server",
    company: "M&M Restaurant",
    location: "Downey, California",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
    image: "/images/exp7.jpg"
  },
  {
    id: 8,
    title: "Cashier Clerk",
    company: "Dollar Zone",
    location: "Pico Rivera, California",
    description: "A very humbling job.",
    image: "/images/exp8.jpg"
  },
  {
    id: 9,
    title: "Dish Washer",
    company: "Zapien's Salsa Grill",
    location: "Pico Rivera, California",
    description: "The most humbling job I've had.",
    image: "/images/exp9.jpg"
  }
];

const ExperienceDesktop = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">EXPERIENCE</h2>
        <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 gap-16">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`flex items-start gap-12 transition-all duration-300 bg-[#18181b] hover:bg-gray-50 p-8 rounded-xl ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="flex-shrink-0 relative">
              <div className="relative w-64 h-64 overflow-hidden rounded-xl shadow-lg">
                {/* Placeholder for image */}
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                <div className="absolute inset-0 border border-white/20 rounded-xl"></div>
              </div>
              <div className={`absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-sm ${
                index % 2 === 0 ? '' : '-right-4 left-auto'
              }`}>
                {exp.id}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {exp.company}
                </div>
                <div className="text-gray-500">{exp.location}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{exp.description}</p>
              
              <div className="flex gap-2 mt-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                    Skill {i+1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceDesktop;
