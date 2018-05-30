import React,  { Component } from 'react';
import { 
	Container, 
	StyleProvider
} from 'native-base';
import { View, Text, StyleSheet } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
import getTheme from '../../../native-base-theme/components';
import ecoCupon from '../../../native-base-theme/variables/ecoCupon';
import Colors from '../../constants/Colors/Colors';
import EcoButton from '../../components/EcoButton/EcoButton';
import startMainScreen from '../../screens/Main/Main';
import { Icon } from 'native-base';

class LoginScreen extends Component {

	registerHandler = () => {
		startMainScreen();
	}

	render() {
		return(
			<StyleProvider style={getTheme(ecoCupon)}>
				<Container>
					<Grid >
						<Row style={styles.rowLogo} size={5}>
							<View style={styles.viewLogo}>
								<Text style={styles.textLogo}>eCupon</Text>
							</View>		
						</Row>
						<Row style={styles.rowButtons} size={3}>
							<View style={styles.viewButtons} >
								<EcoButton 
									icon={require('../../../resources/icons/email-logo.png')}
									color={Colors.button}
									onPress={this.registerHandler}
								>
									Regístrate con tu correo
								</EcoButton>
								<EcoButton 
									icon={require('../../../resources/icons/facebook-logo.png')}
									color={Colors.blueFacebook}
								>
									Regístrate con facebook
								</EcoButton>
								<EcoButton 
									icon={require('../../../resources/icons/google-plus-logo.png')}
									color={Colors.redGoogle}
								>
									Regístrate con google
								</EcoButton>
							</View>
						</Row>
					</Grid>
				</Container>
			</StyleProvider>
		);
	}
}

const styles = StyleSheet.create ({

	rowLogo: {
		backgroundColor: Colors.darkGreen
	},
	viewLogo: {
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignItems: 'center', 
		flex: 1
	}, 
	textLogo: {
		backgroundColor: Colors.darkGreen, 
		color: Colors.white,
		fontSize: 30
	},
	rowButtons: { 
		backgroundColor: 
		Colors.darkGreen
	},
	viewButtons: { 
		backgroundColor: Colors.darkGreen, 
		justifyContent: 'center', 
		alignItems:'center', 
		flex:1, 
		alignSelf:'center' 
	},
});

export default LoginScreen;
