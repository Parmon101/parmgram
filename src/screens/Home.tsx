import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgHeart} from '../assets/icons/SvgHeart';
import {SvgLogo} from '../assets/icons/SvgLogo';
import {SvgMessage} from '../assets/icons/SvgMessage';
import {SvgPlus} from '../assets/icons/SvgPlus';

export const Home = () => {
  return (
    <>
      <View style={s.container}>
        <SvgLogo />
        <View style={s.topContainerIcons}>
          <TouchableOpacity style={s.icon}>
            <SvgPlus />
          </TouchableOpacity>

          <TouchableOpacity style={s.icon}>
            <SvgHeart />
          </TouchableOpacity>

          <TouchableOpacity style={s.icon}>
            <SvgMessage />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {[...Array(10)].map((_, index) => (
          <TouchableOpacity
            style={[s.avatarContainer, index === 0 && {marginLeft: 8}]}
            key={index}>
            <Image
              style={s.avatar}
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 6,
  },
  topContainerIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
  avatarContainer: {
    marginLeft: 20,
    marginTop: 12,

    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 30,
    padding: 2,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});
