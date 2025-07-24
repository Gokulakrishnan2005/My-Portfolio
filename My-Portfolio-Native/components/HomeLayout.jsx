import React, { useRef } from 'react';
import { ScrollView, View } from 'react-native';
import Header from './Header';
import Portfolio from './Portfolio';

const HomeLayout = () => {
  const scrollViewRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const aboutY = useRef(0);
  const projectsY = useRef(0);
  const contactY = useRef(0);

  const scrollToAbout = () => {
    scrollViewRef.current?.scrollTo({ y: aboutY.current, animated: true });
  };

  const scrollToProjects = () => {
    scrollViewRef.current?.scrollTo({ y: projectsY.current, animated: true });
  };

  const scrollToContact = () => {
    scrollViewRef.current?.scrollTo({ y: contactY.current, animated: true });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <Portfolio
        scrollViewRef={scrollViewRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        aboutY={aboutY}
        projectsY={projectsY}
        contactY={contactY}
      />
    </View>
  );
};

export default HomeLayout;