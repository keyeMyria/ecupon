import { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens/Screens';
import * as reducers from './src/reducers/index';
import * as appActions from './src/actions/index';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);

export default class App extends Component {
	constructor(props) {
		super(props);
		store.subscribe(this.onStoreUpdate.bind(this));
		store.dispatch(appActions.appInitialized());
	}

	onStoreUpdate() {
		let { root } = store.getState().root;

		if(this.currentRoot != root) {
			this.currentRoot = root;
			this.startApp(root);
		}
	}

	startApp(root) {
		switch(root) {
		
		case 'login':
			Navigation.startSingleScreenApp({
				screen: {
					screen: 'eCupon.Login',
					navigatorStyle: { navBarHidden: true},
					navigatorButtons: {},
				}
			});
			return;

		case 'after-login':
			Navigation.startTabBasedApp({
				tabs: [
					{
						label: 'Home',
						screen: 'eCupon.HomeTab',
						title: 'Home',
						overrideBackPress: false,
						navigatorStyle: {}	
					},

					{
						label: 'Search',
						screen: 'eCupon.SearchTab',
						title: 'Search',
						navigatorStyle: {}
					}
				]
			});
			return;
		
		case 'user-registration':
			Navigation.startSingleScreenApp({
				screen: {
					screen: 'eCupon.UserRegistration',
					navigatorStyle: { navBarHidden: true},
				}
			});
			return;

		default:
			console.log('Root not found!');

		}
	}
}
