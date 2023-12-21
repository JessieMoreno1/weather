import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { useFonts } from "expo-font";
import { useCallback } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function App() {

  const [fontsLoaded] = useFonts({
    'enhanced_dot_digital': require('./assets/fonts/enhanced_dot_digital-7.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <View style={styles.header}>
          <Text style={styles.text}>Los Angeles</Text>
          <StatusBar style="auto" />

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => alert("ff")}
            >
              <Ionicons 
              name="search-outline" 
              size={25} color="white" 
              style={styles.search}
            />
          </TouchableOpacity>
      </View>

      <View> 
        <Text style={styles.todayText}>Today</Text>
      </View>

      <View style={styles.middle}>
        <MaterialCommunityIcons name="weather-sunny" size={75} style={styles.weatherView}/>    
        <Text style={styles.Temptext}>8</Text>  
      </View>

      <View style={styles.bottomTemps}>

        <View style={styles.bottomheader}>
          <Text style={styles.bottomtext}>Tomorrow</Text>
          <Text style={styles.bottomtemptext}>5</Text>
          <MaterialCommunityIcons name="weather-pouring" size={20} color="white" />   
        </View>

        <View style={styles.lineStyle}/>

        <View style={styles.bottomheader}>
          <Text style={styles.bottomtext}>Monday</Text>
          <Text style={styles.bottomtemptext}>5</Text>
          <MaterialCommunityIcons name="weather-pouring" size={20} color="white" />   
        </View>

        <View style={styles.lineStyle}/>


        <View style={styles.bottomheader}>
          <Text style={styles.bottomtext}>Tuesday</Text>
          <Text style={styles.bottomtemptext}>7</Text>
          <MaterialCommunityIcons name="weather-windy" size={20} color="white" />
        </View>

        <View style={styles.lineStyle}/>

        <View backgroundColor="black" margin='50%'/> 

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    paddingTop: 70,
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text : {
    fontFamily: 'enhanced_dot_digital',
    color: 'white',
    fontSize: 25
  },
  todayText: {
    fontSize: 17,
    color: 'white',
    fontFamily: 'enhanced_dot_digital',
    paddingTop: 10,
    paddingLeft: '13.5%',
    backgroundColor: '#000',
  },
  middle: {
    backgroundColor: '#000',
    alignItems: 'center'
  },
  weatherView: {
    alignItems: 'center',
    paddingTop: 150,
    paddingHorizontal: '40%',
    color: "white",
  },
  Temptext: {
    paddingTop: '5%',
    alignItems: 'center',
    paddingBottom: '10%',

    fontFamily: 'enhanced_dot_digital',
    color: 'white',
    fontSize: 25
  },
  bottomTemps: {
    backgroundColor: '#000',
  },
  bottomtext: {
    fontFamily: 'enhanced_dot_digital',
    color: 'white',
    fontSize: 15,
    paddingBottom: '5%'
  },
  bottomtemptext: {
    fontFamily: 'enhanced_dot_digital',
    color: 'white',
    fontSize: 20
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'white',
  },
  bottomheader: {
    backgroundColor: '#000',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
