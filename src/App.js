import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import SideBarContainer from "./components/SideBar/SideBarContainer";
import DialogsContainer from "./components/Dialogs/Dialogs.container";
import UserContainer from "./components/Users/UserContainer";

const App = () => {
    return (
        <div className="app__wrapper">
            <Header/>
            <NavBar/>
            <SideBarContainer/>

            <div className='app__wrapper__content'>
                <Route path='/profile'
                       render={() => <Profile />}/>

                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>

                <Route path='/news' component={News}/>
                <Route path='/users' render={() => <UserContainer />}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
