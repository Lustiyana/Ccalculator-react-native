import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  result: {
    fontSize: 48,
    marginBottom: 20,
    textAlign: 'right',
    paddingHorizontal: 24,
    color: 'white',
  },
  calculate: {
    fontSize: 32,
    marginBottom: 20,
    textAlign: 'right',
    paddingHorizontal: 24,
    color: '#9c9c9c',
  },
  buttonWrap: {
    backgroundColor: '#252525',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 32,
    padding: 24,
  },

  button: {
    flex: 1,
    gap: 28,
  },
  textButton: {
    color: 'white',
    // maxWidth: 32,
    fontSize: 32,
    textAlign: 'center',
  },
  textGreen: {
    color: '#01B568',
  },
});
