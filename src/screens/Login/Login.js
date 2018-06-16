import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
import * as appActions from '../../actions/index';
import PropTypes from 'prop-types';
import EcoButton from '../../components/EcoButton/EcoButton';
import Colors from '../../constants/Colors/Colors';
class Login extends Component {

	constructor(props) {
		super(props);
	}
	
	handleOnEmailPress() {
		this.props.onEmailPress();
	}

	render() {
		return(
	
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
							onPress={this.handleOnEmailPress.bind(this)}
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

Login.propTypes = {
	onEmailPress: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		root: state.root
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onEmailPress: () => dispatch(appActions.gotoUserRegistration())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
