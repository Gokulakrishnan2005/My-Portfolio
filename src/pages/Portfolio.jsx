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
    description: " This project is a comprehensive student management system for Merit Institution. It facilitates student registration, document management, and performance tracking, providing a streamlined digital platform for administrative tasks. "
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
  // {
  //   id: 5,
  //   image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/IMG_20241017_205348-EDIT.jpg?alt=media&token=9a12e2f1-61e8-4abf-a2ee-1a873728d3d5",
  //   category: "pc build", 
  //   alt: "web Developement project", 
  //   title: "Personal Pc Build",
  //   description: "Specs : ryzen 5 5600, Crusial 512GB Gen 4 Nvme ssd, asus b450 Motherboard, 16gb xpg ram, 400w zebronics smps",
  //   demoUrl: "https://www.youtube.com/watch?v=1AqZKoqkJ9M",
  //   githubUrl: "*/"
  // },
  // {
  //   id: 6,
  //   image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/17449041487882a7c9a6a-881c-479c-9139-610957078581.jpg?alt=media&token=4a1d43a5-1f8f-42e6-8846-b3a98e3f5739",
  //   category: "ui design",
  //   alt: "UI Design Project",
  //   title: "Mobile App UI",
  //   description: "User interface design for iOS and Android applications",
  //   demoUrl: "https://example.com/demo5",
  //   githubUrl: "https://github.com/yourusername/mobile-app-ui"
  // },
  // {
  //   id: 7,
  //   image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/17449041487882a7c9a6a-881c-479c-9139-610957078581.jpg?alt=media&token=4a1d43a5-1f8f-42e6-8846-b3a98e3f5739",
  //   category: "web template",
  //   alt: "Web Template Project",
  //   title: "E-commerce Template",
  //   description: "Complete online store solution with payment integration",
  //   demoUrl: "https://example.com/demo6",
  //   githubUrl: "https://github.com/yourusername/ecommerce-template"
  // },
  // {
  //   id: 8,
  //   image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/17449041487882a7c9a6a-881c-479c-9139-610957078581.jpg?alt=media&token=4a1d43a5-1f8f-42e6-8846-b3a98e3f5739",
  //   category: "mobile application",
  //   alt: "Logo Project",
  //   title: "Minimalist Logo",
  //   description: "Clean and modern logo design for startups",
  //   demoUrl: "https://example.com/demo7",
  //   githubUrl: "https://github.com/yourusername/minimalist-logo"
  // },
  // {
  //   id: 9,
  //   image: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/17449041487882a7c9a6a-881c-479c-9139-610957078581.jpg?alt=media&token=4a1d43a5-1f8f-42e6-8846-b3a98e3f5739",
  //   category: "branding",
  //   alt: "Branding Project",
  //   title: "Restaurant Branding",
  //   description: "Full branding package for restaurants and cafes",
  //   demoUrl: "https://example.com/demo8",
  //   githubUrl: "https://github.com/yourusername/restaurant-branding"
  // },
];

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
const GithubButton = styled.a`
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
  const form = useRef();
  const [activeCategory, setActiveCategory] = useState("all category");

  // Filter projects based on selected category
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
            I am a web developer who enjoys making websites that look good and work well. I use the latest tools to build sites that are easy to use on any device. I also use AI to make websites faster and smarter than others.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-[#d3e97a] px-6 py-3 rounded-full font-medium"> <a href="#contact">CONTACT ME </a></button>
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
            <h2 className="text-4xl font-bold">What I Build</h2>
          </div>
          <div>
            <p className="text-[#484848] mb-6">
            I am proficient in HTML, CSS, JavaScript, the MERN stack, React Native, and enjoy solving complex problems through code.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">MERN STACK</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">Full-Stack Web Applications</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">Interactive User Interfaces</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">Reliable Server-Side APIs</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">FIGMA</span>
{/*               <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">MERN STACK</span> */}
{/*               <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">Problem Solving</span> */}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
          <p className="text-center text-[#767676] max-w-2xl mx-auto mb-8">
          I have completed several projects, gaining valuable hands-on experience and improving my development skills through real-world practice.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["All Category","UI Design", "Front-End Sites", "Full Stack Sites"].map((category) => ( // add in future -  "Pc Build" , "Mobile Application",
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
      <section id="contact" className="px-6 py-12 bg-[#e6e6e6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Let's work together</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#484848] mb-4">
                I'm open to freelance opportunities and collaborations. Feel free to reach out if you're looking for a developer who can bring your ideas to life.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://github.com/Gokulakrishnan2005" aria-label="GitHub Profile" className="text-[#0a0a0a] hover:text-[#767676] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://leetcode.com/u/gokula05/" aria-label="Leetcode Profile" className="text-[#0a0a0a] hover:text-[#767676] transition-colors">
                  <SiLeetcode className="w-6 h-6"/>
                </a>
                <a href="https://www.linkedin.com/in/gokul-akrishnan-b26ba725a/" aria-label="LinkedIn Profile" className="text-[#0a0a0a] hover:text-[#767676] transition-colors">
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
              <form ref={form} className="space-y-4" onSubmit={sendEmail}>
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
  );
}

export default Portfolio;
