import React,  { Component } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { View, Animated, TouchableOpacity, StyleSheet, Dimensions, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-native-easy-grid';
import * as appActions from '../../actions/index';
import PropTypes from 'prop-types';
import EcoButton from '../../components/EcoButton/EcoButton';
import Colors from '../../constants/Colors/Colors';

import Login from './Tabs/Login';
import Register from './Tabs/Register';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

class TabbedLogin extends Component {
    constructor() {
        super();

        this.state = {
            index:  0,
            routes: [
                { key: 'login', title: 'Iniciar sgitttttesión' },
                { key: 'register', title: 'Registrarse' },
            ],
        };
    }

    handleIndexChange = index =>
        this.setState({ 
            index,
        });

    renderLabel = ({ position, navigationState }) => ({ route, index }) => {
        const inputRange = navigationState.routes.map((x, i) => i);
        const outputRange = inputRange.map(
            inputIndex => (inputIndex === index ? Colors.tabActiveColor : Colors.tabColor)
        );
        const color = position.interpolate({
            inputRange,
            outputRange,
        });

        return(
            <Animated.Text style={ [styles.label, { color }] }>
                { route.title }
            </Animated.Text>
        );
    };

    renderIndicator = (position) => (index) => {
        let style = {   
            backgroundColor: 'transparent',
            width: '80%',
            position: 'absolute',
            bottom: 0,
        }
      
        if(position.index === index.index) {
            style = {
                ...style,
                borderBottomWidth: 4,
                borderBottomColor: Colors.tabIndicatorColor,
            }
        }

        return( <Animated.View style={ style } />)
    };
   
    renderTabBar = props => (
        <View style={ styles.tabBar }>
            { props.navigationState.routes.map((route, index) => {
                return(
                    <TouchableWithoutFeedback
                        key={ route.key }
                        onPress={ () => props.jumpTo(route.key) }
                    >
                        <Animated.View style={ styles.tab }>
                            { this.renderLabel(props)({ route, index }) } 
                            { this.renderIndicator(props.navigationState)({index}) }
                            <Animated.View style={ styles.tabLine } />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                );
            })}
        </View>
    );

    renderScene = SceneMap({
        login: Login,
        register: Register,
    });
    
    render() {
        return(
			<Grid >
                <Row size={1} style={ styles.header }>
                    <View style={styles.viewLogo}>
                        <Text style={styles.textLogo}>eCupon</Text>
                    </View>			
                </Row>
                <Row size={5}>
                    <TabView 
                        style={ [styles.container, this.props.style] }
                        navigationState={ this.state }
                        renderScene={ this.renderScene }
                        renderTabBar={ this.renderTabBar }
                        onIndexChange={ this.handleIndexChange }
                    />
                </Row>
            </Grid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.headerColor,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        height: 40,
        backgroundColor: Colors.headerColor,
    },
    label: {
        fontSize: 15,
        marginBottom: 0,
        marginTop: 0,
        backgroundColor: Colors.headerColor,
    },
    tabLine: {
        height: 1, 
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.tabLineColor,
    },
    header: {
        backgroundColor: Colors.headerColor,
    },
    viewLogo: {
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignItems: 'center', 
		flex: 1
	}, 
	textLogo: {
		color: Colors.darkGreen,
		fontSize: 30
	},
});

export default TabbedLogin;