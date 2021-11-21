import React from 'react';
import {View, Text} from 'react-native';

export default function MainWrapper({children}) {
  return <View style={{flex: 1, backgroundColor: '#f4f5fb'}}>{children}</View>;
}
