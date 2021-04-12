import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabIconActive: {
    width: 45,
    height: 45,
    tintColor: 'white',
  },
  tabIconInactive: {
    width: 45,
    height: 45,
    tintColor: '#a5a5a5',
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
  },
  barContainer: {
    flexDirection: 'row',
    backgroundColor: '#696969',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
