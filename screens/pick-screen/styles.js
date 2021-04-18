import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 70,
  },
  imageConrainer: {
    borderWidth: 2,
    borderColor: '#a5a5a5',
    borderRadius: 100,
    padding: 45,
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
  }
});
