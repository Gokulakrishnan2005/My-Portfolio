import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Linking } from 'react-native';
import { useTailwind } from 'twrnc';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
// import emailjs from 'emailjs-com'; // Commented out for React Native

// Define project data with categories
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


  
  
  const Portfolio = ({ scrollViewRef, aboutRef, projectsRef, contactRef, aboutY, projectsY, contactY }) => {
  const tw = useTailwind();
  const form = useRef();
  const [activeCategory, setActiveCategory] = useState("all category");

  const filteredProjects =
    activeCategory === "all category"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const sendEmail = (e) => {
    alert("Email sending is not implemented in this React Native version.");
  };

  return (
    <ScrollView style={tw`bg-[#f5f5f5]`}
      ref={scrollViewRef}
    >
      {/* Navbar - Will be handled by Header component */}

      {/* Hero Section */}
      <View ref={aboutRef} style={tw`px-6 py-16`}>
        <View style={tw`max-w-6xl mx-auto flex-col gap-12 items-center`}>
          <View>
            <Text style={tw`text-5xl font-extrabold leading-tight tracking-tighter`}>
              HI, I AM
              {
`}
              GOKULA
              {
`}
              KRISHNAN.
            </Text>
            <Text style={tw`text-[#555555] mt-6 mb-8 text-lg`}>
            I am a web developer who enjoys making websites that look good and work well. I use the latest tools to build sites that are easy to use on any device. I also use AI to make websites faster and smarter than others.
            </Text>
            <View style={tw`flex-row items-center space-x-4`}>
              <TouchableOpacity onPress={() => Linking.openURL('#contact')} style={tw`bg-[#d3e97a] px-8 py-3 rounded-full font-semibold text-[#0a0a0a] shadow-md`}>
                <Text>CONTACT ME</Text>
              </TouchableOpacity>
              <View style={tw`w-1.5 h-1.5 bg-[#0a0a0a] rounded-full`}></View>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/gokul-akrishnan-b26ba725a/')} style={tw`bg-[#0a0a0a] p-3 rounded-full`}>
                <AntDesign name="linkedin-square" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Gokulakrishnan2005')} style={tw`bg-[#0a0a0a] p-3 rounded-full`}>
                <AntDesign name="github" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={tw`bg-[#eeeeee] rounded-xl overflow-hidden shadow-lg m-10`}>
              <Image
                source={{ uri: "https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/1744736152021IMG_20250215_082423-removebg-preview.png?alt=media&token=af43b5ed-2939-4f8d-8a01-e73485397d66" }}
                style={tw`w-full h-64 object-cover rounded-xl`}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Capabilities Section */}
      <View style={tw`px-6 py-16 bg-[#e6e6e6]`}>
        <View style={tw`max-w-6xl mx-auto flex-col gap-12`}>
          <View>
            <Text style={tw`text-4xl font-bold text-[#0a0a0a]`}>What I Build</Text>
          </View>
          <View>
            <Text style={tw`text-[#484848] mb-8 text-lg`}>
            I am proficient in HTML, CSS, JavaScript, the MERN stack, React Native, and enjoy solving complex problems through code.
            </Text>
            <View style={tw`flex-row flex-wrap gap-4`}>
              <Text style={tw`px-6 py-3 bg-white rounded-full border border-[#d1d1d1] text-[#0a0a0a] text-sm font-medium shadow-sm`}>MERN STACK</Text>
              <Text style={tw`px-6 py-3 bg-white rounded-full border border-[#d1d1d1] text-[#0a0a0a] text-sm font-medium shadow-sm`}>Full-Stack Web Applications</Text>
              <Text style={tw`px-6 py-3 bg-white rounded-full border border-[#d1d1d1] text-[#0a0a0a] text-sm font-medium shadow-sm`}>Interactive User Interfaces</Text>
              <Text style={tw`px-6 py-3 bg-white rounded-full border border-[#d1d1d1] text-[#0a0a0a] text-sm font-medium shadow-sm`}>Reliable Server-Side APIs</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Project and Client Count Section */}
      <View style={tw`px-6 py-16 bg-[#f9f9f9]`}>
        <View style={tw`max-w-6xl mx-auto text-center`}>
          <View style={tw`flex-row flex-wrap justify-center gap-12`}>
            <View style={tw`items-center`}>
              <Text style={tw`text-5xl font-bold text-[#0a0a0a]`}>{projectsData.length}</Text>
              <Text style={tw`text-[#555555] text-lg mt-2`}>Projects Completed</Text>
            </View>
            <View style={tw`items-center`}>
              <Text style={tw`text-5xl font-bold text-[#0a0a0a]`}>5+</Text>
              <Text style={tw`text-[#555555] text-lg mt-2`}>Clients Worked With</Text>
            </View>
            <View style={tw`items-center`}>
              <Text style={tw`text-5xl font-bold text-[#0a0a0a]`}>1000+</Text>
              <Text style={tw`text-[#555555] text-lg mt-2`}>Hours Coded</Text>
            </View>
            <View style={tw`items-center`}>
              <Text style={tw`text-5xl font-bold text-[#0a0a0a]`}>20+</Text>
              <Text style={tw`text-[#555555] text-lg mt-2`}>Technologies Used</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Portfolio Section */}
      <View style={tw`px-6 py-16`}>
        <View style={tw`max-w-6xl mx-auto`}>
          <Text style={tw`text-4xl font-bold text-center mb-6`}>My Projects</Text>
          <Text style={tw`text-center text-[#555555] max-w-3xl mx-auto mb-12 text-lg`}>
          I have completed several projects, gaining valuable hands-on experience and improving my development skills through real-world practice. Explore some of my work below.
          </Text>

          {/* Categories */}
          <View style={tw`flex-row flex-wrap justify-center gap-4 mb-10`}>
            {["All Category","UI Design", "Front-End Sites", "Full Stack Sites"].map((category) => (
              <TouchableOpacity
                key={category}
                style={tw`px-6 py-2 rounded-full font-medium text-base transition-all duration-300 ${activeCategory.toLowerCase() === category.toLowerCase() ? "bg-[#ffb400] text-[#0a0a0a] shadow-md" : "bg-white text-[#0a0a0a] border border-[#d1d1d1]"}`}
                onPress={() => setActiveCategory(category.toLowerCase())}
              >
                <Text>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Portfolio Grid */}
          <View style={tw`flex-row flex-wrap justify-center gap-8`}>
            {filteredProjects.map((project) => (
              <View key={project.id} style={tw`relative w-full rounded-xl overflow-hidden shadow-md`}>
                <Image
                  source={{ uri: project.image }}
                  style={tw`w-full h-64 object-cover`}
                />
                <View style={tw`absolute inset-0 p-6 bg-white bg-opacity-85 flex justify-center items-start`}>
                  <Text style={tw`text-xl font-bold text-[#0a0a0a] mb-2`}>{project.title}</Text>
                  <Text style={tw`text-sm text-[#484848]`}>
                    {project.description}
                  </Text>
                  <View style={tw`flex-row space-x-4 mt-4`}>
                    <TouchableOpacity onPress={() => Linking.openURL(project.demoUrl)} style={tw`flex-row items-center justify-center gap-2 px-4 py-2 bg-[#d3e97a] text-[#0a0a0a] rounded-md`}>
                      <AntDesign name="link" size={24} color="black" />
                      <Text>Live Demo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL(project.githubUrl)} style={tw`flex-row items-center justify-center gap-2 px-4 py-2 bg-[#0a0a0a] text-white rounded-md`}>
                      <AntDesign name="github" size={24} color="white" />
                      <Text style={tw`text-white`}>GitHub</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Contact Section */}
      <View style={tw`px-6 py-16 bg-[#e6e6e6]`}>
        <View style={tw`max-w-6xl mx-auto`}>
          <Text style={tw`text-4xl font-bold mb-10 text-center`}>Let's Work Together</Text>
          <View style={tw`flex-col flex-wrap justify-center gap-12`}>
            <View style={tw`flex-1`}>
              <Text style={tw`text-[#484848] mb-6 text-lg`}>
                I'm open to freelance opportunities and collaborations. Feel free to reach out if you're looking for a developer who can bring your ideas to life.
              </Text>
              <View style={tw`flex-row space-x-5 mt-8`}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Gokulakrishnan2005')} style={tw`text-[#0a0a0a] hover:text-[#ffb400] transition-colors duration-300`}>
                  <AntDesign name="github" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://leetcode.com/u/gokula05/')} style={tw`text-[#0a0a0a] hover:text-[#ffb400] transition-colors duration-300`}>
                  <AntDesign name="codesquareo" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/gokul-akrishnan-b26ba725a/')} style={tw`text-[#0a0a0a] hover:text-[#ffb400] transition-colors duration-300`}>
                  <AntDesign name="linkedin-square" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL('https://wa.me/918939237308?text=Hello%20I%20,%20Gokulakrishnan!')}
                  style={tw`text-[#0a0a0a] hover:text-[#ffb400] transition-colors duration-300`}
                >
                  <FontAwesome name="whatsapp" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={tw`flex-1`}>
              <View style={tw`space-y-6`}>
                <TextInput
                  placeholder="Name"
                  style={tw`w-full p-4 bg-white border border-[#d1d1d1] rounded-lg focus:border-[#d3e97a]`}
                />
                <TextInput
                  placeholder="Email"
                  keyboardType="email-address"
                  style={tw`w-full p-4 bg-white border border-[#d1d1d1] rounded-lg focus:border-[#d3e97a]`}
                />
                <TextInput
                  placeholder="Your message"
                  multiline
                  numberOfLines={5}
                  style={tw`w-full p-4 bg-white border border-[#d1d1d1] rounded-lg focus:border-[#d3e97a]`}
                />
                <TouchableOpacity
                  onPress={sendEmail}
                  style={tw`bg-[#0a0a0a] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#333333] shadow-lg self-end`}
                >
                  <Text style={tw`text-white`}>Send Message</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* WhatsApp Link */}
      <TouchableOpacity
        onPress={() => Linking.openURL('https://wa.me/918939237308?text=Hello,%20I%20am%20interested!')}
        style={tw`fixed bottom-8 right-8 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-xl`}
      >
        <FontAwesome name="whatsapp" size={28} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Portfolio;
