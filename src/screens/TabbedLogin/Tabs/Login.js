import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors/Colors';
import EcoButton from '../../../components/EcoButton/EcoButton';

class Login extends Component {
	render() {
		return(
			
			<View style={styles.viewButtons} >
				<EcoButton 
					icon={require('../../../../resources/icons/email-logo.png')}
					color={Colors.button}		
				>
						Regístrate con tu correo 
				</EcoButton>
				<EcoButton 
					icon={require('../../../../resources/icons/facebook-logo.png')}
					color={Colors.blueFacebook}
				>
						Regístrate con facebook
				</EcoButton>
				<EcoButton 
					icon={require('../../../../resources/icons/google-plus-logo.png')}
					color={Colors.redGoogle}
				>
						Regístrate con google
				</EcoButton>
			</View>
	
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.tabContentColor,
	},
	meta: {
		marginHorizontal: 8,
		justifyContent: 'center',
	},
	name: {
		color: '#000',
		fontWeight: 'bold',
		fontSize: 16,
		lineHeight: 24,
	},
	timestamp: {
		color: '#999',
		fontSize: 14,
		lineHeight: 21,
	},
	viewButtons: { 
		flex: 1,
		alignItems: 'center', 
		justifyContent: 'center',
	},
});

export default Login;