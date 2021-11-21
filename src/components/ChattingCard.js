import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function ChattingCard({message, currentUser}) {
  return (
    <View style={styles.cardBox}>
      {currentUser == message.userId ? (
        <View style={styles.leftSection}>
          <View style={styles.timeStatusSection}>
            <Text style={styles.timeText}>08.56 am</Text>
            <Text style={styles.statusText}>send</Text>
          </View>
          <View style={styles.messageSection}>
            <Text style={styles.messageText}>{message.message}</Text>
          </View>
          <View style={styles.userSection}>
            <Image style={styles.userPhoto} source={{url: message.photo}} />
            <Text style={styles.userNameText}>{currentUser}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.rightSection}>
          <View style={styles.userSection}>
            <Image style={styles.userPhoto} source={{url: message.photo}} />
            <Text style={styles.userNameText}>{currentUser}</Text>
          </View>
          <View style={styles.messageOtherSection}>
            <Text style={styles.messageText}>{message.message}</Text>
          </View>
          <View style={styles.timeStatusSection}>
            <Text style={styles.timeText}>08.56 am</Text>
            <Text style={styles.statusText}>send</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardBox: {marginVertical: 20},
  rightSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  leftSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  userSection: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  userPhoto: {
    width: 40,
    height: 40,
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  userNameText: {
    fontSize: 12,
    textAlign: 'center',
  },
  messageSection: {
    marginHorizontal: 5,
    backgroundColor: '#aed9e7',
    width: '60%',
    padding: 7,
    borderRadius: 6,
  },
  messageOtherSection: {
    marginHorizontal: 5,
    backgroundColor: '#fff',
    width: '60%',
    padding: 7,
    borderRadius: 6,
  },
  messageText: {
    fontSize: 12,
  },
  timeStatusSection: {
    // justifyContent: 'flex-end',
  },
  timeText: {
    fontSize: 12,
  },
  statusText: {
    fontSize: 10,
    textAlign: 'right',
  },
});
