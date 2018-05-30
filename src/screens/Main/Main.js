import { Navigation } from 'react-native-navigation';


const startMainScreen = () =>{
	
	Navigation.showModal({
	
		screen: 'ecoCupon.RegisterUserScreen',
		navigatorStyle: {
			navBarHidden: true,
		},
		animationType: 'none',
	}
	);

};

export default startMainScreen;