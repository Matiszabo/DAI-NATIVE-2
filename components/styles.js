import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screenA: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000'
  },
  screenB: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ff00'
  },
  screenC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000ff'
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
    color: 'white'
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 10
  }
});

export default styles;
