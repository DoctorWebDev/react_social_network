import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';

const App = () => {
	return (
		<div className="app_wrapper">     
      		<Header />
      		<NavBar /> 
      		<Profile />
    	</div>
	);
}

export default App;
