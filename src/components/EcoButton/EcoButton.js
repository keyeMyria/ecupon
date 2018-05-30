import React from 'react';
import {TouchableOpacity, Image, View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors/Colors';

const EcoButton = props => {
	return (
		<TouchableOpacity
			style={[
				styles.view, {
					backgroundColor: props.color
				}
			]}
			activeOpacity={0.5}
			onPress={props.onPress}
		>
			<Image
				source={props.icon}
				style={styles.icon}/>
			<View style={styles.separatorLine}/>
			<Text style={styles.textStyle}>
				{props.children}
			</Text>
		</TouchableOpacity>
	);

};

EcoButton.propTypes = {
	color: PropTypes.string,
	children: PropTypes.string,
	icon: PropTypes.number,
	onPress: PropTypes.any
};

const styles = StyleSheet.create({
	view: {
		width: '90%',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: Colors.button,
		borderColor: Colors.button,
		height: 45,
		borderRadius: 5,
		margin: 5
	},
	icon: {
		padding: 10,
		margin: 10,
		height: 25,
		width: 25,
		resizeMode: 'stretch'
	},
	separatorLine: {
		backgroundColor: Colors.white,
		width: 2,
		height: 45
	},
	textStyle: {
		color: Colors.white,
		marginLeft: 10
	}
});

export default EcoButton;