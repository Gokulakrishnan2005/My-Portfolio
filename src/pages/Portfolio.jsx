"use client"
import emailjs from 'emailjs-com';
import { useState, useRef } from "react"
import { Github, Linkedin, ExternalLink } from "lucide-react"
import styled from 'styled-components';
import { SiLeetcode } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

// Define project data with categories
// Categories have -> full stack sites, front-end sites, ui design, mobile application.
const projectsData = [
  {
    id: 1,
    image: "https://firebasestorage.googleapis.com/v0/b/mern-estate-1b297.appspot.com/o/Elm-Library-Hub.png?alt=media&token=5c149b2c-d48d-4f9f-80f9-318afd60b9be",
    category: "front-end sites",
    alt: "Front-End Project",
    title: "Elm Library Hub for Library Management",
    description: "Application for managing library operations, including book management, user management, and borrowing system.",
    demoUrl: "https://library-chapter-chashers.onrender.com/",
    githubUrl: "https://github.com/Gokulakrishnan2005/Library_chapter_chashers"
  },
  {
    id: 2,
    image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/1744902989147Screenshot%202025-04-17%20204518.png?alt=media&token=fb165cd3-7ea2-4fe7-bb0f-d1e0acadd19d",
    category: "full stack sites", 
    alt: "web Developement project", 
    title: "Merit Institution Management System",
    description: " This project is a comprehensive student management system for Merit Institution. It facilitates student registration, document management, and performance tracking, providing a streamlined digital platform for administrative tasks. ",
    demoUrl: "https://merit-institution.onrender.com/",
    githubUrl: "https://github.com/Gokulakrishnan2005/Merit"
  },
  {
    id: 3,
    image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/1745417611071Screenshot%202025-04-23%20194142.png?alt=media&token=c0b5a107-2cf2-4a47-bf8b-49d60225a3b7",
    category: "front-end sites",
    alt: "Web Template Project",
    title: "My Portfolio",
    description: "It is an interactive portfolio website showcasing my work and skills",
    demoUrl: "https://gokulakrishnan-portfolio.onrender.com/",
    githubUrl: "https://github.com/Gokulakrishnan2005/My-Portfolio"
  },
  {
    id: 4,
    image: "https://firebasestorage.googleapis.com/v0/b/mern-estate-1b297.appspot.com/o/Screenshot%202025-06-24%20074118.png?alt=media&token=b20f1d01-4782-48f7-adbb-2b475cde357e",
    category: "full stack sites",
    alt: "web development project",
    title: "Printing Shop with E-commerce",
    description: "Xerox2U is your all-in-one platform for essential digital services, combining on-demand printing with a full-featured e-commerce storefront. It’s designed to be a blueprint for a local business's entire digital operation, in one box.",
    demoUrl: "https://xerox2u.onrender.com/",
    githubUrl: "https://github.com/Gokulakrishnan2005/studio"
  },
];

const GithubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 14px;
  background-color: #0a0a0a;
  color: white;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-top: 12px;
  
  &:hover {
    background-color: #333333;
    transform: translateY(-2px);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
  
  .text {
    font-size: 14px; 
    font-weight: 500;
    margin: 0;
  }
`;

const LiveDemoButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 14px;
  background-color: #d3e97a;
  color: #0a0a0a;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-top: 12px;
  
  &:hover {
    background-color: #b8cc6d;
    transform: translateY(-2px);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
  
  .text {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
  }
`;

const StyledCard = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  perspective: 1000px;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: all 0.4s ease-in-out;
  }

  &:hover img {
    filter: brightness(70%) blur(2px);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 25px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.85);
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  &:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 26px;
    color: #0a0a0a;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .card__description {
    margin: 0;
    font-size: 15px;
    color: #484848;
    line-height: 1.5;
  }
`;

// Self-contained portfolio component
function Portfolio() {
  const form = useRef();
  const [activeCategory, setActiveCategory] = useState("all category");

  const filteredProjects =
    activeCategory === "all category"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_mhvz79k',      // replace this
      'template_ovbt6dm',     // replace this
      form.current,
      '2LlmztOwYg-Rxuogq'       // replace this
    ).then(
      (result) => {
        alert('Message sent successfully!');
        e.target.reset(); // clear form after submit
      },
      (error) => {
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <div className="bg-[#f5f5f5] text-[#0a0a0a]">
      {/* Navbar */}
      <nav className="bg-[#f5f5f5] px-6 py-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#about" className="text-xl font-bold text-[#0a0a0a]">Gokula Krishnan</a>
          <div className="space-x-6">
            <a href="#about" className="text-[#0a0a0a] hover:text-[#ffb400] transition-colors duration-300 font-medium">About</a>
            <a href="#projects" className="text-[#0a0a0a] hover:text-[#ffb400] transition-colors duration-300 font-medium">Projects</a>
            <a href="#contact" className="text-[#0a0a0a] hover:text-[#ffb400] transition-colors duration-300 font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
              HI, I AM
              <br />
              GOKULA
              <br />
              KRISHNAN.
            </h1>
            <p className="text-[#555555] mt-6 mb-8 text-lg">
            I am a web developer who enjoys making websites that look good and work well. I use the latest tools to build sites that are easy to use on any device. I also use AI to make websites faster and smarter than others.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-[#d3e97a] px-8 py-3 rounded-full font-semibold text-[#0a0a0a] hover:bg-[#b8cc6d] transition-colors duration-300 shadow-md"> <a href="#contact">CONTACT ME </a></button>
              <span className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full"></span>
              <a href="https://www.linkedin.com/in/gokul-akrishnan-b26ba725a/" aria-label="LinkedIn Profile" className="bg-[#0a0a0a] p-3 rounded-full hover:bg-[#333333] transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://github.com/Gokulakrishnan2005" aria-label="GitHub Profile" className="bg-[#0a0a0a] p-3 rounded-full hover:bg-[#333333] transition-colors duration-300">
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <div className="bg-[#eeeeee] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 m-10">
              {/* My Image */}
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/1744736152021IMG_20250215_082423-removebg-preview.png?alt=media&token=af43b5ed-2939-4f8d-8a01-e73485397d66" 
                alt="Gokula Krishnan profile" 
                className="w-full h-full object-cover rounded-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-6 py-16 bg-[#e6e6e6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a]">What I Build</h2>
          </div>
          <div>
            <p className="text-[#484848] mb-8 text-lg">
            I am proficient in HTML, CSS, JavaScript, the MERN stack, React Native, and enjoy solving complex problems through code.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-6 py-3 bg-white rounded-full border border-[#d1d1d1] text-[#0a0a0a] text-sm font-medium shadow-sm">MERN STACK</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#d1d1d1] text-[#0a0a0a] text-sm font-medium shadow-sm">Full-Stack Web Applications</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#d1d1d1] text-[#0a0a0a] text-sm font-medium shadow-sm">Interactive User Interfaces</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#d1d1d1] text-[#0a0a0a] text-sm font-medium shadow-sm">Reliable Server-Side APIs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project and Client Count Section */}
      <section className="px-6 py-16 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-5xl font-bold text-[#0a0a0a]">{projectsData.length}</h3>
              <p className="text-[#555555] text-lg mt-2">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#0a0a0a]">5+</h3> 
              <p className="text-[#555555] text-lg mt-2">Clients Worked With</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#0a0a0a]">1000+</h3>
              <p className="text-[#555555] text-lg mt-2">Hours Coded</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#0a0a0a]">20+</h3>
              <p className="text-[#555555] text-lg mt-2">Technologies Used</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">My Projects</h2>
          <p className="text-center text-[#555555] max-w-3xl mx-auto mb-12 text-lg">
          I have completed several projects, gaining valuable hands-on experience and improving my development skills through real-world practice. Explore some of my work below.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["All Category","UI Design", "Front-End Sites", "Full Stack Sites"].map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium text-base transition-all duration-300 ${
                  activeCategory.toLowerCase() === category.toLowerCase()
                    ? "bg-[#ffb400] text-[#0a0a0a] shadow-md"
                    : "bg-white text-[#0a0a0a] hover:bg-[#eeeeee] border border-[#d1d1d1]"
                }`}
                onClick={() => setActiveCategory(category.toLowerCase())}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (                                         
              <StyledCard key={project.id}>
                <img 
                  src={project.image} 
                  alt={project.alt} 
                />
                <div className="card__content">
                  <h3 className="card__title">{project.title}</h3>
                  <p className="card__description">
                    {project.description}
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <LiveDemoButton href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink />
                      <span className="text">Live Demo</span>
                    </LiveDemoButton>
                    <GithubButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github />
                      <span className="text">GitHub</span>
                    </GithubButton>
                  </div>
                </div>  
              </StyledCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 bg-[#e6e6e6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Let's Work Together</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#484848] mb-6 text-lg">
                I'm open to freelance opportunities and collaborations. Feel free to reach out if you're looking for a developer who can bring your ideas to life.
              </p>
              <div className="flex space-x-5 mt-8">
                <a href="https://github.com/Gokulakrishnan2005" aria-label="GitHub Profile" className="text-[#0a0a0a] hover:text-[#ffb400] transition-colors duration-300">
                  <Github className="w-7 h-7" />
                </a>
                <a href="https://leetcode.com/u/gokula05/" aria-label="Leetcode Profile" className="text-[#0a0a0a] hover:text-[#ffb400] transition-colors duration-300">
                  <SiLeetcode className="w-7 h-7"/>
                </a>
                <a href="https://www.linkedin.com/in/gokul-akrishnan-b26ba725a/" aria-label="LinkedIn Profile" className="text-[#0a0a0a] hover:text-[#ffb400] transition-colors duration-300">
                  <Linkedin className="w-7 h-7" />
                </a>                
                <a 
                  href="https://wa.me/918939237308?text=Hello%20I%20,%20Gokulakrishnan!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0a0a0a] hover:text-[#ffb400] transition-colors duration-300"
                  aria-label="Message on WhatsApp"
                >
                  <FaWhatsapp className="w-7 h-7" />               
                </a>
              </div>
            </div>
            <div>
              <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    className="w-full p-4 bg-white border border-[#d1d1d1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d3e97a] transition-all duration-200" 
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    className="w-full p-4 bg-white border border-[#d1d1d1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d3e97a] transition-all duration-200" 
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    rows="5"
                    className="w-full p-4 bg-white border border-[#d1d1d1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d3e97a] transition-all duration-200"
                    required
                  ></textarea>
                </div>
                <div className="text-right">
                  <button 
                    type="submit" 
                    className="bg-[#0a0a0a] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#333333] transition-colors duration-300 shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Link */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://wa.me/918939237308?text=Hello,%20I%20am%20interested!" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#1DA851] transition-colors duration-300"
          aria-label="Message on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
