import React from 'react';
import {Text} from 'react-native';
import {fontBold, mb72, textBase, textCenter, textWhite} from '../globalStyle';
import {IText} from '../interfaces';

const Description = ({text}: IText) => {
  return (
    <Text style={[textWhite, fontBold, textBase, textCenter, mb72]}>
      {text}
    </Text>
  );
};

export default Description;
