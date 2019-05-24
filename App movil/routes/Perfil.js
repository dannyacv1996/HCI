import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, DatePickerAndroid, TouchableOpacity, Alert, Picker, Image,Modal,TouchableHighlight} from 'react-native';



class Perfil extends Component {

	state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }



	constructor(props) {
    	super(props);
    	this.state = { text: '', tel: '' };
  	}

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


	render() {
    	return (
    		<View style={styles.container}>
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
			    <Button title="Historial Citas" onPress={this.setModalVisible(true)} style={styles.buttonPress}/>
			     <Modal
         		 animationType="slide"
          			transparent={false}
          			visible={this.state.modalVisible}
          			onRequestClose={() => {
            		Alert.alert('Modal has been closed.');
          		}}>
          		<View style={{marginTop: 22}}>
            	<View>
              		<Text>Hello World!</Text>
                <Text>Hide Modal</Text>
            	</View>
          		</View>
        		</Modal>
			</View>
		    
    	);
	}
}

const styles = StyleSheet.create({
 buttonPress: {
    alignItems: 'center',
    backgroundColor: '#6885FF',
    padding: 10,
    marginTop: 30
 },
 textButton: {
 	color: "#fff",
    fontSize: 18,
    fontWeight: "600"
 },
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

export default Perfil;