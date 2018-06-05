import React, { Component }  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StyleProvider, Container } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import ecoCupon from '../../../native-base-theme/variables/ecoCupon';
import getTheme from '../../../native-base-theme/components';
import Colors from '../../constants/Colors/Colors';
import EcoButton from '../../components/EcoButton/EcoButton';

class SearchTab extends Component {
	render()   {
		return(
			<StyleProvider style={getTheme(ecoCupon)}>
				<Container>
					<Grid >
						<Row style={styles.rowLogo} size={5}>
							<View style={styles.viewLogo}>
								<Text style={styles.textLogo}>Search Tab</Text>
							</View>		
						</Row>
						<Row style={styles.rowButtons} size={3}>
							<View style={styles.viewButtons} >
								<EcoButton 
									icon={require('../../../resources/icons/email-logo.png')}
									color={Colors.button}
								>
								Regístrate con tu correo
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
export default SearchTab;