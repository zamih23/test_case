import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listItemContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  image: {
    width: 325,
    height: 325,
    borderRadius: 5,
  },
  date: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  dateContainer: {alignItems: 'flex-end', width: '100%'},
  emptyListContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  emptyListText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
