import React, { Component }  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
import * as appActions from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors/Colors';
import EcoButton from '../../components/EcoButton/EcoButton';

class UserRegistration extends Component {

	handleOnEmailPress() {
		this.props.onEmailPress();
	}

	render()   {
		return(
	
			<Grid >
				<Row style={styles.rowLogo} size={5}>
					<View style={styles.viewLogo}>
						<Text style={styles.textLogo}>Register Screen</Text>
					</View>		
				</Row>
				<Row style={styles.rowButtons} size={3}>
					<View style={styles.viewButtons} >
						<EcoButton 
							icon={require('../../../resources/icons/email-logo.png')}
							color={Colors.button}
							onPress={this.handleOnEmailPress.bind(this)}
						>
								Regístrate con tu correo
						</EcoButton>
					</View>
				</Row>
			</Grid>

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

UserRegistration.propTypes = {
	onEmailPress: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		root: state.root
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onEmailPress: () => dispatch(appActions.appInitialized())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration);