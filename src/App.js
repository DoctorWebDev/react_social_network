import './App.css';
import {Route} from "react-router-dom";
import NavBar from './components/Navbar/NavBar';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import SideBarContainer from "./components/SideBar/SideBarContainer";
import DialogsContainer from "./components/Dialogs/Dialogs.container";
import UserContainer from "./components/Users/UserContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className="app__wrapper">
            <HeaderContainer/>
            <NavBar/>
            <SideBarContainer/>

            <div className='app__wrapper__content'>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer />}/>

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
