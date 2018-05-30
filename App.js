import { Navigation } from 'react-native-navigation';
import LoginScreen from './src/screens/Login/Login';
import RegisterScreen from './src/screens/Register/Register';

Navigation.registerComponent('ecoCupon.RegisterUserScreen', () => RegisterScreen);
Navigation.registerComponent('ecoCupon.LoginScreen', () => LoginScreen);

Navigation.startSingleScreenApp({
	screen: {
		screen: 'ecoCupon.LoginScreen',
		title: 'Login',
		navigatorStyle: {
			navBarHidden: true,
		},
	} 
});
