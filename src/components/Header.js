import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Header({title, backKey}) {
  const navigation = useNavigation();
  const backAction = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        disabled={!backKey}
        onPress={() => backAction()}>
        {backKey ? (
          <Image
            style={styles.backArrow}
            source={require('../assets/back_arrow_icon.png')}
          />
        ) : null}
        <Text style={styles.headerText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#005cb9',
    padding: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backArrow: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
});
