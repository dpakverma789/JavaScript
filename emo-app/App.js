import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.eyes}></View>
      <View style={styles.eyes}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginTop:40,
      height: 800,
      width: 500,
      backgroundColor: 'black',
      flexDirection:'row',
      // animation-name: eye-movement;
      // transition: top 2s;
      // animation-duration: 3s;
      // animation-iteration-count: infinite;
  },
  eyes:{
        height: 40,
        width: 40,
        borderRadius: 10,
        margin:8,
        backgroundColor: 'aqua',
        position: 'relative',
        top: 200,
        left: 140,
        shadowColor: '#aqua',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    // animation-name: blink;
    // animation-duration: 1s;
    // animation-delay: 5s;
    // animation-iteration-count: infinite;
  }
});