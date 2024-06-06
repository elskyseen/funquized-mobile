import React from 'react';
import {Image, Text, View} from 'react-native';
import {capitalize, fontBold, icon, main, mb8} from '../globalStyle';
import {image} from '../globalImage';
import Title from '../components/Title';
import SecondaryButton from '../components/Button/SecondaryButton';
import SubDescription from '../components/SubDescription';
import PrimaryButton from '../components/Button/PrimaryButton';

const AlternateScreen = () => {
  return (
    <View style={main}>
      <Image source={image.iconImage} style={[icon, mb8]} />
      <Title text="pilih jalur masuk" />
      <PrimaryButton text="login" />
      <SecondaryButton text="register" />
      <SubDescription>
        jika belum memiliki akun sama sekali masuk melalui{' '}
        <Text style={[fontBold, capitalize]}>register</Text>
      </SubDescription>
    </View>
  );
};

export default AlternateScreen;
