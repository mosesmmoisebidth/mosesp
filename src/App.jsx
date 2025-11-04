import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Calendar, Award, GraduationCap, Briefcase, Loader2 } from 'lucide-react';
import { FaBriefcase, FaBuilding, FaCalendarAlt } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import TypewriterWithHand from "./TypewriterWithHand";
import PortfolioChatbot from './PortfolioChatbot';
import TestimonialsSection from './Testimonials';
import profileImage from './assets/profile.png';

const skills = [
  "Scrum", "Trello", "Jira", "Asana", "PMP", "React", "Node.js", "JavaScript",
  "TypeScript", "Python", "AWS", "Docker", "MongoDB", "FastAPI", "Django",
  "Flutter", "React-Native", "Java", "Springboot", "Microservices", "NestJS",
  "CircleCI", "k8s",
];

const skillIcons = {
  "Scrum": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Scrum_wordmark.svg",
  "Trello": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
  "Jira": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-plain.svg",
  "Asana": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/asana/asana-original.svg",
  "PMP": "https://upload.wikimedia.org/wikipedia/commons/f/f0/PMP_logo.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React-Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Springboot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "NestJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
  "CircleCI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg",
  "k8s": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "Microservices": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
};

const PersonalPortfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);

  const jobs = [
  {
    title: "Fullstack Engineer",
    company: "TaskBees Inc",
    period: "May/2025 - Sep/2025",
    description: [
      "Led a 6-member engineering team to deliver a Django + PostgreSQL job marketplace serving 10K+ users.",
      "Built RESTful APIs with Django REST Framework, cutting latency by 35%, and boosted Agile sprint delivery by 30% through automation tools like Celery & Docker.",
    ],
  },
  {
    title: "Backend Developer",
    company: "Jahia Solutions Group SA",
    period: "Jan/2024 - Mar/2025",
    description: [
      "Built and optimized enterprise modules using Python (Django, DRF) with light Angular integration.",
      "Improved API speed 40% through caching and ORM tuning, leveraging Redis & Celery for async tasks.",
      "Enhanced backend architecture for multilingual CMS, boosting scalability 25% with Dockerized microservices.",
      "Implemented reusable components and performance improvements following TDD & CI/CD practices.",
    ],
  },
  {
    title: "Fullstack Developer (Python/Java)",
    company: "Chronicle Software Ltd",
    period: "Dec/2021 - Oct/2023",
    description: [
      "Engineered real-time financial systems using Django, Flask, and React, with selective Java Spring Boot modules.",
      "Optimized REST APIs and task queues, cutting latency 45% and achieving 99.97% uptime.",
      "Built monitoring and analytics tools with Celery and AWS CloudWatch, boosting reliability 30%.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "T Global Software Ltd",
    period: "Nov/2019 - Oct/2021",
    description: [
      "Developed and launched Jivah Collections, an e-commerce platform using Django + React, reaching 10K+ users.",
      "Built a Django REST Framework backend integrated with NestJS and PostgreSQL, improving response speed 35%.",
      "Maintained 99.9% uptime using Docker, Nginx, and automated CI/CD deployment pipelines.",
    ],
  },
  {
    title: "Backend Developer",
    company: "MIVO Solutions Ltd",
    period: "Aug/2018 - Sept/2019",
    description: [
      "Built NaviGO, an AI-driven traffic system powered by Python (Django, DRF) and predictive analytics.",
      "Developed APIs and React dashboards, cutting manual reporting 60% and improving uptime 40% using Celery + Redis.",
      "Created analytics pipelines for live tracking and traffic prediction leveraging PostgreSQL & AWS EC2.",
    ],
  },
];


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      
      const sections = ['home', 'about', 'experience', 'achievements', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 border-t-2 border-white rounded-full animate-spin"></div>
            <div className="absolute inset-4 flex items-center justify-center">
              <span className="text-5xl font-light text-white">MM</span>
            </div>
          </div>
          <div className="text-sm tracking-widest text-white/60 uppercase">Loading</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen font-light">
      {/* Fixed Social Icons */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
        <a href="https://github.com/mosesmmoisebidth" className="text-white/40 hover:text-white transition-colors duration-300">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/mosesmucyo" className="text-white/40 hover:text-white transition-colors duration-300">
          <Linkedin size={18} />
        </a>
        <a href="https://x.com/MosesManed" className="text-white/40 hover:text-white transition-colors duration-300">
          <Twitter size={18} />
        </a>
        <div className="w-px h-20 bg-white/20 mx-auto mt-4"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center py-8">
            <div className="text-xl tracking-wider font-light">
              <span className="text-white">MM</span>
            </div>
            <div className="hidden md:flex space-x-12">
              {['Home', 'About', 'Experience', 'Achievements', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-white' : 'text-white/40 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-8">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-16 opacity-0 animate-fadeInUp">
            <div className="w-40 h-40 mx-auto relative">
              <div className="w-full h-full rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-4xl font-light text-white/60">MM</div>
                )}
              </div>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-extralight mb-8 tracking-tight opacity-0 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Mucyo Moses
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-4 tracking-wide opacity-0 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            Fullstack Developer & Digital Innovator
          </p>
          
          <p className="text-sm text-white/40 mb-16 tracking-wider opacity-0 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            Crafting exceptional digital experiences with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 opacity-0 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
            <a
              href="https://drive.google.com/file/d/1wbuW_JbTVcqzHNUDpoQCLSWK379IV7MI/view?usp=sharing"
              download
              className="group border border-white/20 hover:border-white/40 px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Download Resume
            </a>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-300"
            >
              Explore
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 opacity-0 animate-fadeInUp" style={{animationDelay: '1s'}}>
            <div className="border border-white/10 p-12 hover:border-white/20 transition-all duration-500">
              <div className="text-center">
                <ExternalLink size={20} className="mx-auto mb-6 text-white/60" />
                <h3 className="text-base tracking-wider mb-4 font-light">Blogging Garden</h3>
                <p className="text-sm text-white/40 mb-8 leading-relaxed">Explore my thoughts, insights, and technical articles in my personal blogging space.</p>
                <a
                  href="https://blog.moses.it.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-300"
                >
                  Visit Blogs
                </a>
              </div>
            </div>

            <div className="border border-white/10 p-12 hover:border-white/20 transition-all duration-500">
              <div className="text-center">
                <Briefcase size={20} className="mx-auto mb-6 text-white/60" />
                <h3 className="text-base tracking-wider mb-4 font-light">Portfolio Projects</h3>
                <p className="text-sm text-white/40 mb-8 leading-relaxed">Discover my latest projects, applications, and creative solutions.</p>
                <a
                  href="https://portfolio.moses.it.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce-slow opacity-0 animate-fadeInUp"
            style={{animationDelay: '1.2s'}}
          >
            <ChevronDown size={24} className="text-white/40 hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-extralight mb-4 tracking-tight">About Me</h2>
            <div className="w-16 h-px bg-white/20"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div className="text-lg text-white/60 leading-relaxed space-y-6">
                <TypewriterWithHand
                  lines={[
                    "Passionate full-stack developer with a keen eye for creating innovative digital solutions.",
                    "I specialize in modern technologies and have a strong foundation in Web (Frontend & Backend), Desktop, Mobile, and WearOS development.",
                    "With expertise in React, Node.js, and cloud technologies, I bring ideas to life through clean code and intuitive user experiences.",
                    "I'm constantly learning and adapting to new technologies to deliver cutting-edge solutions."
                  ]}
                  speed={70}
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-8">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="flex items-center gap-2 border border-white/10 px-4 py-2 text-xs tracking-wider hover:border-white/30 transition-all duration-300"
                  >
                    <img
                      src={skillIcons[skill] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"}
                      alt={`${skill} icon`}
                      className="w-4 h-4"
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border border-white/10 p-10 hover:border-white/20 transition-all duration-500">
                <h3 className="text-xl tracking-wider mb-8 font-light">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail size={18} className="text-white/40 mt-1" />
                    <span className="text-sm text-white/60 leading-relaxed">
                      intambwefit@moses.it.com / mosesmanek7@gmail.com
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={18} className="text-white/40 mt-1" />
                    <span className="text-sm text-white/60">
                      +250 792712603 / +250 734850687
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-white/40 mt-1" />
                    <span className="text-sm text-white/60">
                      Kigali, Rwanda
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-8 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-extralight mb-4 tracking-tight">Work Experience</h2>
            <div className="w-16 h-px bg-white/20"></div>
          </div>

          <div className="space-y-16">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="border-l border-white/10 pl-12 pb-16 hover:border-white/30 transition-all duration-500"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-light mb-2">{job.title}</h3>
                  <p className="text-lg text-white/60 mb-2">{job.company}</p>
                  <div className="text-xs text-white/40 tracking-wider uppercase">{job.period}</div>
                </div>

                <div className="text-sm text-white/60 leading-relaxed space-y-3">
                  <TypewriterWithHand
                    lines={[
                      job.company,
                      ...job.description.map((point) => "• " + point),
                    ]}
                    speed={30}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 px-8 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-extralight mb-4 tracking-tight">Achievements</h2>
            <div className="w-16 h-px bg-white/20"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Google Project Management",
                issuer: "Google",
                date: "May/2024",
                link: "https://drive.google.com/file/d/190YWP2Rw_vbiDFBadxg_M-7ApNb8Y20m/view?usp=sharing",
              },
              {
                title: "Engineering Project Management",
                issuer: "Coursera",
                date: "May/2024",
                link: "https://drive.google.com/file/d/1Dd3C6UGtXydXTtOt9hQIc1OnI2zXk2EB/view?usp=sharing",
              },
              {
                title: "AI Enhanced Project Management",
                issuer: "IO Academy",
                date: "April/2025",
                link: "https://drive.google.com/file/d/1KdSTpUSrlhgJU95srZqRqUcMN-UwNeEH/view?usp=sharing",
              },
              {
                title: "Oracle Java Certification",
                issuer: "Oracle",
                date: "2024",
                link: "https://drive.google.com/file/d/1_FJlOwDTKHrT05PZVdE3U6SPGbaMm_1E/view",
              },
              {
                title: "Fullstack Database Engineer",
                issuer: "Meta",
                date: "2023",
                link: "https://drive.google.com/file/d/1GAbBIRp_FvgyagaMjLX-sEkKivedb_iS/view",
              },
              {
                title: "k8s Application Developer",
                issuer: "Cloud Native Computing",
                date: "2024",
                link: "https://drive.google.com/file/d/1Shg-N5lJbRwzrXC9uosvjD0pEAnChAJd/view",
              },
              {
                title: "MVP Award, Rwanda Korea Exchange Programme",
                issuer: "Korea International Cooperation Agency(KOICA), KEFA, KDS",
                date: "August/2024",
                link: "https://drive.google.com/file/d/1fTILljdnK1U-nERAr-8syjxdLev_ppRu/view",
              },
              {
                title: "Google Digital Skills",
                issuer: "Google",
                date: "2022",
                link: "https://drive.google.com/file/d/1YoPVry_5vSm8_gBH1Ep24DF-ojDz2QUt/view",
              }
            ].map((achievement, index) => (
              <a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 p-10 hover:border-white/30 transition-all duration-500 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <Award size={20} className="text-white/40 group-hover:text-white/60 transition-colors duration-300" />
                  <span className="text-xs text-white/40 tracking-wider">{achievement.date}</span>
                </div>
                <h3 className="text-lg font-light mb-3 leading-tight">{achievement.title}</h3>
                <p className="text-sm text-white/40">{achievement.issuer}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-8 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-extralight mb-4 tracking-tight">Education</h2>
            <div className="w-16 h-px bg-white/20"></div>
          </div>
          
          <div className="space-y-16">
            {[
              {
                degree: "Software Programming & Embedded Systems",
                institution: "Rwanda Coding Academy",
                period: "   ",
                // period: "01/2016 - 10/2019",
                description: "Specialized in software engineering, fullstack web Development and Artificial Intelligence. And a little bit cybersecurity"
              },
              // {
              //   degree: "Bachelor in Computer Science & Software Engineering",
              //   institution: "University of California",
              //   period: "01/2020 - 07/2024",
              //   description: "Specialising in Software Engineering, Data Structures & Algorithm and Data Analytics"
              // }
            ].map((education, index) => (
              <div key={index} className="border-l border-white/10 pl-12 hover:border-white/30 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-light mb-2">{education.degree}</h3>
                    <p className="text-lg text-white/60">{education.institution}</p>
                  </div>
                  <div className="text-xs text-white/40 tracking-wider uppercase mt-4 lg:mt-0">{education.period}</div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{education.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">Let's Connect</h2>
          <div className="w-16 h-px bg-white/20 mx-auto mb-16"></div>
          
          <p className="text-lg text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to chat about technology, feel free to reach out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:intambwefit@moses.it.com"
              className="border border-white/20 hover:border-white/40 px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Send Email
            </a>
            <a
              href="https://calendar.app.google/G3PfdEPLSF8tF9Nm6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-300"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xs text-white/40 tracking-widest uppercase">
            © 2025 Mucyo Moses. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 2px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
      <PortfolioChatbot />
    </div>
  );
};

export default PersonalPortfolio;