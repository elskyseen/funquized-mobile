import React from 'react';
import {Image, Text, View} from 'react-native';
import {image} from '../globalImage';
import {fontBold, icon, main, mb8} from '../globalStyle';
import SecondaryButton from '../components/Button/SecondaryButton';
import Title from '../components/Title';
import Description from '../components/Description';
import SubDescription from '../components/SubDescription';
import {NativeStackNavigatorProps} from 'react-native-screens/lib/typescript/native-stack/types';

const SplashScreen = ({navigation: {navigate}}: NativeStackNavigatorProps) => {
  return (
    <View style={main}>
      <Image source={image.iconImage} style={[icon, mb8]} />
      <Title text="selamat datang" />
      <Description
        text="FunQuized adalah platform yang menyediakan berbagai macam quiz dari
      berbagai macam kategori seperti buah, hewan, sejarah, science, dsb. dengan
      beberapa point yang bisa didapatkan jika menyelesaikan tiap tiap level
      dari tiap tiap kategori"
      />
      <SecondaryButton
        text="setuju & lanjutkan"
        onPress={() => navigate('Alternate')}
      />
      <SubDescription>
        dengan click <Text style={fontBold}>Setuju & Lanjut</Text> maka anda
        menyetujui semua aktivitas pada FunQuized
      </SubDescription>
    </View>
  );
};

export default SplashScreen;
