import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, DatePickerAndroid, TouchableOpacity, Alert, Picker, Image} from 'react-native';

class Medicamento extends Component {


	constructor(props) {
    	super(props);
    	this.state = { text: '', tel: '' };
  	}

	static navigationOptions = {
	    title: 'Solicitar Medicamentos',
	    headerStyle: {
	    	backgroundColor: '#37b7ff',
	    },
	    headerTitleStyle:{
	    	color: '#ffffff'
	    },
	    headerTintColor: '#ffffff'
	};

	openDatePicker() {
	    try {
	      DatePickerAndroid.open({
	        date: new Date()
	      }).then(date => {
	        if (date.action !== DatePickerAndroid.dismissedAction) {
	          const finalDate = `${date.month + 1} ${date.day} ${date.year}`;
	        }
	      });
	    } catch ({ code, message }) {
	      console.warn('No se pudo abrir el calendario', message);
	    }
  	}

  	selectAppointment(){

  		Alert.alert(
		  'Medicamento Añadido',
		  'Revise Medicamentos',
		  [
		    {text: 'OK', onPress: () => console.log('OK Pressed')},
		  ],
		  {cancelable: false},
		);
  	}

  	selectAppointment1(){

  		Alert.alert(
		  'Medicamento Solicitado',
		  'Puede reclamar sus medicamentos',
		  [
		    {text: 'OK', onPress: () => console.log('OK Pressed')},
		  ],
		  {cancelable: false},
		);
  	}



	render() {
    	return (
    		<View style={styles.container}>
    			<Image style={styles.img} source={require('../images/medi.png')}/>
    			<View style={{ alignItems: "center" }}>
	    			<Text>
						{"\n"}
					</Text>
					<Text>
						{"\n"}
					</Text>
	          		<Text>Selecciona y añada Medicamento</Text>
				    <Picker
				    	selectedValue={this.state.language}
				    	style={{height: 50, width: 250}}
				    	onValueChange = {(itemValue, intemIndex) => this.setState({
				    		language: itemValue
				    	})}>
				    	<Picker.Item label="Clonazepan" value="Clonazepan" />
				    	<Picker.Item label="Dolex" value="Dolex" />
				    </Picker>
				</View>
			 	<Button title="Añadir" onPress={this.selectAppointment} style={styles.buttonPress}/>
				<View style={{ alignItems: "center" }}>			 
				 	<Text>
						{"\n"}
					</Text>
					 <Text>
						{"\n"}
					</Text>
				 	 <Text>Revise medicamentos añadidos</Text>
				    <Picker
				    	selectedValue={this.state.language}
				    	style={{height: 50, width: 250}}
				    	onValueChange = {(itemValue, intemIndex) => this.setState({
				    		language: itemValue
				    	})}>
				    	<Picker.Item label="Clonazepan" value="Clonazepan" />
				    </Picker>
				</View>
			    <Button title="Solicitar" onPress={this.selectAppointment1} style={styles.buttonPress}/>
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

export default Medicamento;