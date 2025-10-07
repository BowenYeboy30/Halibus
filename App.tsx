import React from 'react';
import {View, Text, Image, ScrollView, TextInput, ImageBackground, StyleSheet} from 'react-native';


const App = () => {
  return (
<ImageBackground source={require('./assets/map.jpg')} style={styles.background}>
      <View style={styles.busContainer}>
        <Text style={styles.boxtext}>Board the PRT 71C {"\n"}Millvale bus</Text>

      </View>
      <View style={styles.busContainer1}>
              <Text style={styles.boxtext1}>9:39         30         9.9{"\n"}Arrival     Min       Miles </Text>

            </View>
</ImageBackground>
  );
};


const styles = StyleSheet.create({
  screenContainer: {
      margin: 30,
    padding: 20, // adds padding around the entire BusStop screen
    paddingTop: 200,
    backgroundColor: '#f8f9fa', // optional for contrast
  },
  busContainer: {
      position: 'absolute',
      top: 50,
      width: 400,
      height: 100,
    marginBottom: 10, // spacing between buses
    padding: 10, // padding inside each Bus component
    paddingLeft: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2, // Android shadow
  },
  busContainer1: {
        position: 'absolute',
        bottom: 50,
        width: 400,
        height: 100,
      marginBottom: 10, // spacing between buses
      padding: 10, // padding inside each Bus component
      backgroundColor: '#ffffff',
      paddingLeft: 20,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 4,
      elevation: 2, // Android shadow
    },
//   headerText: {
//       fontSize: 20,
//       fontWeight: 'bold',
//       },
  boxtext: {
      fontSize: 30,
      fontWeight: 'bold',
      },
  boxtext1: {
        fontSize: 30,
        fontWeight: 'bold',
        },
  background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      }
});

export default App;