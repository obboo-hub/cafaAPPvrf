import React from 'react';
import { Text, TextInput, View, StyleSheet, Button, Image,ImageBackground,Picker,TouchableOpacity
  } from 'react-native'; 
import GradientButton from 'react-native-gradient-buttons';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';
 class Page extends React.Component {

  render() {
    
     const {navigate} = this.props.navigation;
    return (
     
      <View style={styles.container}>
      


<LinearGradient  
   style={styles.linearGradient}
     colors={['#00DAF2','#00F4A2']}>
 <Image style={styles.logo} source={require('./assets/im2.png')}resizeMode="stretch" />
<Text style={styles.p}>You will help create a safe  weboshphere </Text>
         <GradientButton
         style={styles.grb}
     
      text="Indeed"
      textStyle={{ fontSize: 20 }}
      gradientBegin="#3FE8C9"
      gradientEnd="#01DF74"
    
  
      onPressAction={() => navigate('Page1')}
    />

       



     </LinearGradient>
   

      </View>
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height:'100%',
  },
     linearGradient:{

         alignContent:'center',
         position: 'absolute',
width: '100%',
height: '100%',

         },

  p:{
position: 'absolute',
width: '100%',
height: '70%',
left: '1%',
top: '70%',
fontSize:35,
color: 'white',

  },
  logo:{
    width:'100%', 
    height:'60%',


  },

  grb:{

    top:'27%',
    width:'50%',
    height:'8%',
    left:'20%',
    
    
    },

 
});
export default Page;