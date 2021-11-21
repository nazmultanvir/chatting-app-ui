import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MainWrapper from '../../components/MainWrapper';
import Header from '../../components/Header';
import Button from '../../components/Button';
import styles from './styles';

//data
import users from '../../../data/users';
import channels from '../../../data/channels';

export default function ChatDashboard(props) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [selectedChannelName, setSelectedChannelName] = useState(null);

  useEffect(() => {
    initialStateSetup();
  }, [users, channels]);

  const initialStateSetup = () => {
    setSelectedUser(users[0].name);
    setSelectedChannel(channels[0].channelId);
    setSelectedChannelName(channels[0].name);
  };

  const setSelectedChannelData = (channelName, channelId) => {
    setSelectedChannel(channelId);
    setSelectedChannelName(channelName);
  };
  const StartChatting = () => {
    let params = {
      channelName: selectedChannelName,
      channelId: selectedChannel,
      userId: selectedUser,
    };
    props.navigation.navigate('ChattingDetails', params);
  };
  return (
    <MainWrapper title="Chat App">
      <Header title="Chat Application" />
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose Your User</Text>
          <Picker
            mode={'dropdown'}
            selectedValue={selectedUser}
            style={styles.userPicker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedUser(itemValue)
            }>
            {users &&
              users.map(user => (
                <Picker.Item
                  label={user.name}
                  value={user.name}
                  key={user.name}
                />
              ))}
          </Picker>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose Your Channel</Text>
          <View>
            {channels &&
              channels.map(channel => (
                <TouchableOpacity
                  onPress={() =>
                    setSelectedChannelData(channel.name, channel.channelId)
                  }
                  key={channel.channelId}
                  style={[
                    styles.channel,
                    selectedChannel == channel.channelId
                      ? styles.selectedChannel
                      : styles.notSelectedChannel,
                  ]}>
                  <Text style={styles.channelText}>{channel.name}</Text>
                </TouchableOpacity>
              ))}
          </View>
          <View style={{marginTop: 30}}>
            <Button title="Start Chat" onPress={() => StartChatting()} />
          </View>
        </View>
      </View>
    </MainWrapper>
  );
}
