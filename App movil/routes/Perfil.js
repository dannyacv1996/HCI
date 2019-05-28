import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet,Image}

from 'react-native'
class Perfil extends Component {


	static navigationOptions = {
	    title: 'Perfil',
	    headerStyle: {
	    	backgroundColor: '#37b7ff',
	    },
	    headerTitleStyle:{
	    	color: '#ffffff'
	    },
	    headerTintColor: '#ffffff'
	};
   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render() {
      return (
         <View style = {styles.container}>
         <Image style={styles.img} source={require('../images/silvia.jpg')}/>
         <Text>
			{"\n"}
			</Text>
			<Text>
				{"\n"}
			</Text>
	        <Text>Nombre: Camila Montenegro</Text>
	          <Text>
				{"\n"}
			</Text>
	          <Text>Edad: 25 años</Text>
	         <Text>
				{"\n"}
			</Text>
          	<Text>Cedula : 11135512331</Text>
	          <Text>
				{"\n"}
			</Text>
	          <Text>Telefono: 30123312331</Text>
	          <Text>
				{"\n"}
			</Text>

            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>HISTORIAL CITAS :!</Text>
                  
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Cerrar Historial Citas</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.text}>Abrir Historial Citas</Text>
            </TouchableHighlight>
         </View>
      )
   }
}
export default Perfil

const styles = StyleSheet.create ({
   container: {
      marginTop: 20
   },
    img:{
 	marginLeft: '35%',
 	width: 110,
 	height: 110,
 	resizeMode: "stretch",
 }
})
