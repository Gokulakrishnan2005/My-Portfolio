import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTailwind } from 'twrnc';

const Header = ({ scrollToAbout, scrollToProjects, scrollToContact }) => {
  const tw = useTailwind();

  return (
    <View>
      <View style={tw`bg-[#d9d9d9] py-6 px-6 flex-row justify-between items-center`}>
        <Text style={tw`font-bold`}>GOKULAKRISHNAN</Text>
        <View style={tw`flex-row space-x-8`}>
          <TouchableOpacity onPress={scrollToAbout}>
            <Text style={tw`text-black`}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={scrollToProjects}>
            <Text style={tw`text-black`}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={scrollToContact}>
            <Text style={tw`text-black`}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;