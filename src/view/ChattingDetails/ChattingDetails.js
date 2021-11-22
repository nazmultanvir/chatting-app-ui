import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import MainWrapper from '../../components/MainWrapper';
import Header from '../../components/Header';
import ChattingCard from '../../components/ChattingCard';
import styles from './styles';
let demoMessage = [
  {
    message:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut',
    time: new Date(),
    userId: 'Sam',
    photo: 'https://via.placeholder.com/150',
  },
  {
    message:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut',
    time: new Date(),
    userId: 'Joyse',
    photo: 'https://via.placeholder.com/150',
  },
  {
    message:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut',
    time: new Date(),
    userId: 'Russell',
    photo: 'https://via.placeholder.com/150',
  },
  {
    message:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut',
    time: new Date(),
    userId: 'Joyse',
    photo: 'https://via.placeholder.com/150',
  },
  {
    message:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut',
    time: new Date(),
    userId: 'Russell',
    photo: 'https://via.placeholder.com/150',
  },
  {
    message:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut',
    time: new Date(),
    userId: 'Sam',
    photo: 'https://via.placeholder.com/150',
  },
];

function ChattingDetails({route, navigation}) {
  const {channelName, channelId, userId} = route.params;
  const [chatText, setChatText] = useState('');
  // useEffect(() => {
  //   fetchLatestMessages();
  // }, [channelId, userId]);
  const fetchLatestMessages = () => {
    const fetchLatestMessagesQuery = gql`
      query {
        fetchLatestMessages(channelId: ${channelId}) {
          userId
          text
          datetime
          messageId
        }
      }
    `;
  };

  return (
    <MainWrapper>
      <Header title={channelName ? channelName : ''} backKey />

      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {demoMessage &&
            demoMessage.map((message, index) => (
              <ChattingCard
                key={index}
                message={message}
                currentUser={userId}
              />
            ))}
        </View>
      </ScrollView>
      <View style={styles.TextInputSection}>
        <TextInput
          style={styles.ChatInput}
          placeholder="Type your message"
          onChangeText={text => setChatText(text)}
          value={chatText}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Image
            style={styles.sendButtonIcon}
            source={require('../../assets/send_icon.png')}
          />
        </TouchableOpacity>
      </View>
    </MainWrapper>
  );
}

export default ChattingDetails;
