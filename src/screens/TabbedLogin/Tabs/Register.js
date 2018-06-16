import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

class Register extends Component {
	render() {
		return(
			<ScrollView style={ styles.container } contentContainerStyle={ styles.content }> 
				<View style={ styles.meta }>
					<Text style={ styles.name }>
						REGISTER
					</Text>
					<Text style={ styles.timestamp}>
                        1st Jan 2025
					</Text>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
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
});

export default Register;