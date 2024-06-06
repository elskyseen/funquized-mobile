import React from 'react';
import {Pressable, Text} from 'react-native';
import {
  capitalize,
  fontBold,
  mb16,
  secondaryButton,
  text2xl,
  textPrimary,
} from '../../globalStyle';
import {IButton} from '../../interfaces';

const SecondaryButton = ({text, onPress}: IButton) => {
  return (
    <Pressable style={[secondaryButton, mb16]} onPress={onPress}>
      <Text style={[text2xl, capitalize, fontBold, textPrimary]}>{text}</Text>
    </Pressable>
  );
};

export default SecondaryButton;
