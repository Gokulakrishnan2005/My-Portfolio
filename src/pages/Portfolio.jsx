"use client"

import { useState } from "react"
import { Github, Linkedin,ExternalLink } from "lucide-react"
import styled from 'styled-components';
import { SiLeetcode } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

// Define project data with categories
const projectsData = [
  {
    id: 1,
    image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/1744902989147Screenshot%202025-04-17%20204518.png?alt=media&token=fb165cd3-7ea2-4fe7-bb0f-d1e0acadd19d",
    category: "web developement", // Change to "web template" for consistency from ui design
    alt: "web Developement project", //UI Design Project -> web development project
    title: "Mern Stack",
    description: "Full stack application with MongoDB, Express, React , Node.js ,Tailwind CSS and Firebase",
    demoUrl: "https://merit-institution.onrender.com/",
    githubUrl: "https://github.com/Gokulakrishnan2005/Merit"
  },
  {
    id: 2,
    image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/1745417611071Screenshot%202025-04-23%20194142.png?alt=media&token=c0b5a107-2cf2-4a47-bf8b-49d60225a3b7",
    category: "front-end sites",
    alt: "Web Template Project",
    title: "My Portfolio",
    description: "It is an interactive portfolio website showcasing my work and skills",
    demoUrl: "https://my-portfolio-euhb.onrender.com",
    githubUrl: "https://github.com/Gokulakrishnan2005/My-Portfolio"
  },
  {
    id: 3,
    image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/17449041487882a7c9a6a-881c-479c-9139-610957078581.jpg?alt=media&token=4a1d43a5-1f8f-42e6-8846-b3a98e3f5739",
    category: "logo",
    alt: "Logo Project",
    title: "Brand Identity",
    description: "Creating unique brand identity through logo design",
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/yourusername/brand-identity"
  },
  {
    id: 4,
    image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/17449041487882a7c9a6a-881c-479c-9139-610957078581.jpg?alt=media&token=4a1d43a5-1f8f-42e6-8846-b3a98e3f5739",
    category: "branding",
    alt: "Branding Project",
    title: "Corporate Branding",
    description: "Complete branding package for modern businesses",
    demoUrl: "https://example.com/demo4",
    githubUrl: "https://github.com/yourusername/corporate-branding"
  },
  {
    id: 5,
    image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/17449041487882a7c9a6a-881c-479c-9139-610957078581.jpg?alt=media&token=4a1d43a5-1f8f-42e6-8846-b3a98e3f5739",
    category: "ui design",
    alt: "UI Design Project",
    title: "Mobile App UI",
    description: "User interface design for iOS and Android applications",
    demoUrl: "https://example.com/demo5",
    githubUrl: "https://github.com/yourusername/mobile-app-ui"
  },
  {
    id: 6,
    image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/17449041487882a7c9a6a-881c-479c-9139-610957078581.jpg?alt=media&token=4a1d43a5-1f8f-42e6-8846-b3a98e3f5739",
    category: "web template",
    alt: "Web Template Project",
    title: "E-commerce Template",
    description: "Complete online store solution with payment integration",
    demoUrl: "https://example.com/demo6",
    githubUrl: "https://github.com/yourusername/ecommerce-template"
  },
  {
    id: 7,
    image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/17449041487882a7c9a6a-881c-479c-9139-610957078581.jpg?alt=media&token=4a1d43a5-1f8f-42e6-8846-b3a98e3f5739",
    category: "logo",
    alt: "Logo Project",
    title: "Minimalist Logo",
    description: "Clean and modern logo design for startups",
    demoUrl: "https://example.com/demo7",
    githubUrl: "https://github.com/yourusername/minimalist-logo"
  },
  {
    id: 8,
    image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/17449041487882a7c9a6a-881c-479c-9139-610957078581.jpg?alt=media&token=4a1d43a5-1f8f-42e6-8846-b3a98e3f5739",
    category: "branding",
    alt: "Branding Project",
    title: "Restaurant Branding",
    description: "Full branding package for restaurants and cafes",
    demoUrl: "https://example.com/demo8",
    githubUrl: "https://github.com/yourusername/restaurant-branding"
  },
]

// Keep the existing StyledButton for GitHub
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 12px;
  background-color: #222;
  color: white;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #444;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  .text {
    font-size: 14px;
    margin: 0;
  }
`;

// Design imported from UI-VERSE site for pre-build components
const GithubButton =  styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 14px;
  background-color: #000000;
  color: white;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-top: 12px;
  
  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
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
// Add new LiveDemoButton for the demo links
const LiveDemoButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 14px;
  background-color: #4CAF50;
  color: white;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-top: 12px;
  
  &:hover {
    background-color: #45a049;
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
  border-radius: 10px;
  overflow: hidden;
  perspective: 1000px;
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: all 0.6s ease;
  }

  &:hover img {
    filter: blur(3px);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.8);
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #000;
    font-weight: 700;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #333;
    line-height: 1.4;
  }
`;

// Self-contained portfolio component
function Portfolio() {
  // State to track the selected category
  const [activeCategory, setActiveCategory] = useState("all category")

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "all category"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory.toLowerCase())

  return (
    <div className="bg-[#d9d9d9] text-[#0a0a0a]">
      {/* Hero Section */}
      <section id="about" className="px-6 py-12 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              HI, I AM
              <br />
              GOKULA
              <br />
              KRISHNAN.
            </h1>
            <p className="text-[#767676] mt-4 mb-6">
              A highly creative and purpose-driven digital marketing specialist with over 10 years of experience.
            </p>
            <div className="flex items-center space-x-4">
              <button  className="bg-[#d3e97a] px-6 py-3 rounded-full font-medium"> <a href="#contact">CONTACT ME </a></button>
              <span className="w-1 h-1 bg-[#0a0a0a] rounded-full"></span>
              <a href="https://www.linkedin.com/in/gokul-akrishnan-b26ba725a/" aria-label="LinkedIn Profile" className="bg-[#0a0a0a] p-2 rounded-full">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://github.com/Gokulakrishnan2005" aria-label="GitHub Profile" className="bg-[#0a0a0a] p-2 rounded-full">
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <div className="bg-[#f3f3f3] rounded-lg overflow-hidden m-10">
              {/* My Image */}
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/1744736152021IMG_20250215_082423-removebg-preview.png?alt=media&token=af43b5ed-2939-4f8d-8a01-e73485397d66" 
                alt="Gokula Krishnan profile" 
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-6 py-12 bg-[#e6e6e6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold">MY CAPABILITIES</h2>
          </div>
          <div>
            <p className="text-[#484848] mb-6">
              I am always looking to add more skills. Morbi egestas neque eu blandit fermentum. Nulla ac laoreet ligula.
              Pellentesque ac ex at purus faucibus tristique ut et dolor.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">HTML</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">CSS</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">JAVASCRIPT</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">REACT</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">NODE.JS</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">FIGMA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
          <p className="text-center text-[#767676] max-w-2xl mx-auto mb-8">
            Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim
            Velit Mollit. Lorem Ipsum
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["All Category", "UI Design", "Front-End Sites", "Branding", "Web Developement"].map((category) => (
              <button
                key={category}
                className={`font-medium transition-colors ${
                  activeCategory.toLowerCase() === category.toLowerCase()
                    ? "text-[#ffb400]"
                    : "text-[#0a0a0a] hover:text-[#767676]"
                }`}
                onClick={() => setActiveCategory(category.toLowerCase())}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="flex space-x-3 mt-3">
                    <LiveDemoButton href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink />
                      <span className="text">Live Demo</span>
                    </LiveDemoButton>
                    <GithubButton  onClick={() => window.open(project.githubUrl, "_blank")}>
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
      <section id="contact" className="px-6 py-12 bg-[#e6e6e6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Let's work together</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#484848] mb-4">
                I'm open to freelance opportunities and collaborations. Feel free to reach out if you're looking for a developer who can bring your ideas to life.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" aria-label="GitHub Profile" className="text-[#0a0a0a] hover:text-[#767676] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Leetcode Profile" className="text-[#0a0a0a] hover:text-[#767676] transition-colors">
                  <SiLeetcode className="w-6 h-6"/>
                </a>
                <a href="#" aria-label="LinkedIn Profile" className="text-[#0a0a0a] hover:text-[#767676] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>                
                <a 
                  href="https://wa.me/918939237308?text=Hello%20I%20,%20Gokulakrishnan!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0a0a0a] hover:text-[#767676] transition-colors"
                  aria-label="Message on WhatsApp"
                >
                  <FaWhatsapp className="w-6 h-6" />               
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    className="w-full p-4 bg-white border border-[#c7c7c7] rounded" 
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    className="w-full p-4 bg-white border border-[#c7c7c7] rounded" 
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    rows="4"
                    className="w-full p-4 bg-white border border-[#c7c7c7] rounded"
                    required
                  ></textarea>
                </div>
                <div className="text-right">
                  <button 
                    type="submit" 
                    className="bg-[#222222] text-white px-8 py-4 rounded hover:bg-[#000000] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Link */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/918939237308?text=Hello,%20I%20am%20interested!" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors"
          aria-label="Message on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Portfolio