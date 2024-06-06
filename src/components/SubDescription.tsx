import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import {textCenter, textSm, textWhite} from '../globalStyle';

const SubDescription = ({children}: PropsWithChildren) => {
  return <Text style={[textCenter, textWhite, textSm]}>{children}</Text>;
};

export default SubDescription;
