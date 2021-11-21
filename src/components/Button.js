import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

export default function Button({title, onPress}) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#005cb9',
        padding: 15,
        borderRadius: 6,
      }}>
      <Text style={{color: '#fff'}}>{title}</Text>
      <Image
        style={{width: 16, height: 20}}
        source={require('../assets/right_arrow_icon.png')}
      />
    </TouchableOpacity>
  );
}
