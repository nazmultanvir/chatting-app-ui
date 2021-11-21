import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
  },
  section: {
    paddingBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
    paddingBottom: 5,
  },
  userPicker: {
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  channel: {
    height: 40,
    marginVertical: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  selectedChannel: {
    backgroundColor: '#fff',
  },
  notSelectedChannel: {
    backgroundColor: '#e6ecf3',
  },
  channelText: {
    color: '#000',
  },
});

export default styles;
