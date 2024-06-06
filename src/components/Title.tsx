import React from 'react';
import {IText} from '../interfaces';
import {
  capitalize,
  fontBold,
  mb16,
  text2xl,
  textCenter,
  textWhite,
} from '../globalStyle';
import {Text} from 'react-native';

const Title = ({text}: IText) => {
  return (
    <Text style={[text2xl, textCenter, textWhite, fontBold, capitalize, mb16]}>
      {text}
    </Text>
  );
};

export default Title;
