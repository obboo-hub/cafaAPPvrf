import React from 'react';
import { Text, TextInput, View, StyleSheet, Button, Image,ImageBackground,Picker,TouchableOpacity,FlatList
  } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';

 class Page1 extends React.Component {
   state={
  
  type:'',
 


}
constructor(props) {
    super(props);
    this.state = {
        data1: [ 
         {id :1, avatar:require('./assets/genre.png'), text: 'genre', val: ''}],
          data2: [
         {id :2, avatar:require('./assets/religion.png'), text: 'Religions', val: ''}],
          data3: [
         {id :3, avatar:require('./assets/classesociale.png'), text: 'Classe Sociale', val: ''}],
          data4: [
         {id :4, avatar:require('./assets/race.png'), text: 'Race/Ethnie', val: '' }],
          data5: [ 
         {id :5,  avatar:require('./assets/region.png'),text: 'Régiion', val: '' }],
          data6: [
         {id :6, avatar:require('./assets/oriensexuelle.png'), text: 'Orien. Sexuelle', val: '' }
         
        ],
        checkBoxChecked: false
        };
  }
 onCheckBoxPress(id) {
        console.log( "Checked!" );
        console.log(this.state.checkBoxChecked)
        console.log( id );
        this.setState({
          checkBoxChecked: !this.state.checkBoxChecked
        });
        if(id != id){
            return this.setState({
                checkBoxChecked: true
              });
        }
        else{
            return this.setState({
                checkBoxChecked: false
              });
        }
      }
      bgcolor=(param)=>{
          if(param== true){
              return "yellow"
          }
          else{
              return "transparent"
          }
      }

  render() {
     const {navigate} = this.props;
    return (
      <View style={styles.container}>
<LinearGradient
   style={styles.linearGradient}
     colors={['#00DAF2','#00F4A2']}>
<View style={styles.div}>
<Text style={styles.p}> Welcome </Text>
<View style={styles.div1} >
<FlatList
       data={ this.state.data1 }
      horizontal={false}
                    extraData={this.state}
                    showsHorizontalScrollIndicator={false}
                    
  
         renderItem={({item, index}) => (
             
<TouchableOpacity
             onPress={()=> this.setState({checkBoxChecked:item.id})} selected={item.id === this.state.checkBoxChecked}  value={this.state.type} onValueChange={(value)=>this.setState({ type:value })}
             style={{width: '100%',height:148,backgroundColor:this.bgcolor(item.id === this.state.checkBoxChecked)}}>
  
         <Image
          source={item.avatar}  style={
          styles.im} resizeMode="contain"/> 
          <Text style={styles.bloodText}>{item.text} </Text>
              
</TouchableOpacity>
   )}  numColumns={2}/>
 
</View>
<View style={styles.div2}>
 <FlatList
         data={ this.state.data2 } 
        
                   horizontal={false}
                    extraData={this.state}
                    showsHorizontalScrollIndicator={false}
         renderItem={({item, index}) => (
<TouchableOpacity
 onPress={()=> this.setState({checkBoxChecked:item.id})} selected={item.id === this.state.checkBoxChecked} key={index} style={{width: '100%',height:148 ,backgroundColor:this.bgcolor(item.id === this.state.checkBoxChecked)}}>
     
        <Image
          source={item.avatar}  style={
          styles.im} resizeMode="contain"/> 
          <Text style={styles.bloodText}>{item.text} </Text>

</TouchableOpacity>
   )}  numColumns={2}/>
</View>
<View style={styles.div3}>
 <FlatList
         data={ this.state.data3 } 
        
                   horizontal={false}
                    extraData={this.state}
                    showsHorizontalScrollIndicator={false}
         renderItem={({item, index}) => (
<TouchableOpacity
             onPress={()=> this.setState({checkBoxChecked:item.id})} selected={item.id === this.state.checkBoxChecked} key={index} style={{width: '100%',height:148,backgroundColor:this.bgcolor(item.id === this.state.checkBoxChecked)}}>
  <Image
          source={item.avatar}  style={
          styles.im} resizeMode="contain"/> 
          <Text style={styles.bloodText}>{item.text} </Text>
 </TouchableOpacity>
    )}   numColumns={2}/>
</View>
<View style={styles.div4}>
 <FlatList
         data={ this.state.data4 } 
        
                   horizontal={false}
                    extraData={this.state}
                    showsHorizontalScrollIndicator={false}
         renderItem={({item, index}) => (
<TouchableOpacity
             onPress={()=> this.setState({checkBoxChecked:item.id})} selected={item.id === this.state.checkBoxChecked} key={index} style={{width: '100%',height: 148,backgroundColor:this.bgcolor(item.id === this.state.checkBoxChecked)}}>
  <Image
          source={item.avatar}  style={
          styles.im} resizeMode="contain"/> 
          <Text style={styles.bloodText}>{item.text} </Text>
</TouchableOpacity>
   )}
     numColumns={2}/>
</View>
<View style={styles.div5}>
 <FlatList
         data={ this.state.data5 } 
        
                   horizontal={false}
                    extraData={this.state}
                    showsHorizontalScrollIndicator={false}
         renderItem={({item, index}) => (
 <TouchableOpacity
            onPress={()=> this.setState({checkBoxChecked:item.id})} selected={item.id === this.state.checkBoxChecked} key={index} style={{width: '100%',height: 148,backgroundColor:this.bgcolor(item.id === this.state.checkBoxChecked)}}>
  <Image
          source={item.avatar}  style={
          styles.im} resizeMode="contain"/> 
          <Text style={styles.bloodText}>{item.text} </Text>
</TouchableOpacity>
   )}   numColumns={2}/>
</View>
<View style={styles.div6}>
 <FlatList
         data={ this.state.data6 } 
        
                   horizontal={false}
                    extraData={this.state}
                    showsHorizontalScrollIndicator={false}
         renderItem={({item, index}) => (
<TouchableOpacity
             onPress={()=> this.setState({checkBoxChecked:item.id})} selected={item.id === this.state.checkBoxChecked} key={index} value={this.state.type} onValueChange={(value)=>this.setState({ type:value })} style={{width: '100%',height: 150,backgroundColor:this.bgcolor(item.id === this.state.checkBoxChecked)}}>
 <Image
          source={item.avatar}  style={
          styles.im} resizeMode="contain" /> 
          <Text style={styles.bloodText} resizeMode="contain">{item.text} </Text>
</TouchableOpacity>
   )}  numColumns={2}/>
</View>
         <GradientButton
         style={styles.grb}
      text="Next"
      textStyle={{ fontSize: 20 }}
      gradientBegin="#3FE8C9"
      gradientEnd="#01DF74"
      gradientDirection="diagonal"
      height={40}
      width={150}
      top={750}
    onPressAction={() =>{
           this.props.navigation.navigate('Page2', {
             
           
           });
      }}
    />
</View>
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
        div: {
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  left: '5%',
right: '5%',
  top:'5%',
  borderRadius: 30,
  width:'90%',
  height:'93%',
  backgroundColor: 'rgba(238, 247, 245, 0.94)',
  },
  p:{
position: 'absolute',
width: '100%',
height: '42%',
left: '5%',
top: '5%',
fontSize:35,
color: '#3FE8C9',
  },
  div1:{
position: 'absolute',
width: '40%',
height: '25%',
left: '8%',
top: '15%',
backgroundColor: '#FFFFFF',
  },
 
  div2:{
position: 'absolute',
width: '40%',
height: '25%',
left: '50%',
top: '15%',
backgroundColor: '#FFFFFF',
  },
    
  div3:{
position: 'absolute',
width: '40%',
height: '25%',
left: '8%',
top: '41%',
backgroundColor: '#FFFFFF',
  },
  
   div4:{
position: 'absolute',
width: '40%',
height: '25%',
left: '50%',
top: '41%',
backgroundColor: '#FFFFFF',
  },
  div5:{
position: 'absolute',
width: '40%',
height: '25%',
left: '8%',
top: '67%',
backgroundColor: '#FFFFFF',
  },
   
  grb:{
  position: 'absolute',
  top: '93%',
  },
   div6:{
position: 'absolute',
width: '40%',
height: '25%',
left: '50%',
top: '67%',
backgroundColor: '#FFFFFF',
  },
im :{
  width:'90%',
  height:'55%',
   top :'20%',
 left:'5%',
  right:'5%',
},
bloodText:{
fontWeight:'bold',
top:'25%',
}

});
export default Page1;