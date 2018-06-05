import { Navigation } from 'react-native-navigation';
import Login from './Login/Login';
import UserRegistration   from './UserRegistration/UserRegistration';
import HomeTab from './HomeTab/HomeTab';
import SearchTab from './SearchTab/SearchTab';


export default(store, Provider) => {
	Navigation.registerComponent('eCupon.Login', () => Login, store, Provider);
	Navigation.registerComponent('eCupon.UserRegistration', () => UserRegistration, store, Provider);
	Navigation.registerComponent('eCupon.HomeTab', () => HomeTab, store, Provider);
	Navigation.registerComponent('eCupon.SearchTab', () => SearchTab, store, Provider);
};