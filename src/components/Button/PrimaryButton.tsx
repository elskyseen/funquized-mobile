import React from 'react';
import {Pressable, Text} from 'react-native';
import {
  capitalize,
  fontBold,
  mb16,
  primaryButton,
  text2xl,
  textPrimary,
  textWhite,
} from '../../globalStyle';
import {IButton} from '../../interfaces';

const PrimaryButton = ({text, onPress}: IButton) => {
  return (
    <Pressable style={[primaryButton, mb16]} onPress={onPress}>
      <Text style={[text2xl, capitalize, fontBold, textWhite]}>{text}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
