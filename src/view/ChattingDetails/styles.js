import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  TextInputSection: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ChatInput: {
    backgroundColor: '#f1f2f3',
    height: 35,
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 10,
    width: '90%',
  },
  sendButton: {
    width: 50,
    padding: 5,
  },
  sendButtonIcon: {
    width: 27,
    height: 27,
  },
  scrollView: {
    marginBottom: 50,
  },
});

export default styles;
