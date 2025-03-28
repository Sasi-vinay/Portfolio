import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, Code2, Briefcase, User, FileText } from 'lucide-react';

// Navigation data
const navigation = [
  { name: 'About', icon: <User size={20} />, href: '#about' },
  { name: 'Skills', icon: <Code2 size={20} />, href: '#skills' },
  { name: 'Projects', icon: <Briefcase size={20} />, href: '#projects' },
  { name: 'Resume', icon: <FileText size={20} />, href: '#resume' },
];

// Project data
const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that provides real-time weather data and forecasts.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Weather API', 'ChartJS'],
  },
];

// Skills data
const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Jest'] },
  { category: 'Soft Skills', items: ['Problem Solving', 'Team Leadership', 'Communication', 'Agile'] },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <span className="text-2xl font-bold text-indigo-600">Portfolio</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-indigo-600"
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </a>
              ))}
            </div>
            <div className="sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-indigo-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              John Doe
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Full Stack Developer passionate about creating beautiful and functional web applications.
              With expertise in modern web technologies and a keen eye for design.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold leading-6 text-gray-900 flex items-center"
              >
                Contact me <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-10 flex justify-center gap-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <Code2 size={16} className="text-indigo-600 mr-2" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium">Senior Software Engineer - Tech Corp</h4>
                  <p className="text-gray-600">2020 - Present</p>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    <li>Led development of microservices architecture</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                    <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Software Engineer - StartUp Inc</h4>
                  <p className="text-gray-600">2018 - 2020</p>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    <li>Developed and maintained multiple React applications</li>
                    <li>Optimized database queries improving performance by 40%</li>
                    <li>Implemented responsive designs for mobile applications</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div>
                <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                <p className="text-gray-600">University of Technology - 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">© 2025 John Doe. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
