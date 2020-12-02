import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SideBar from "./components/SideBar/SideBar";

const App = ({state, addPost, updatePostText, updateMessageText, addMessage}) => {
    return (
        <div className="app__wrapper">
            <Header/>
            <NavBar/>
            <SideBar state={state.sideBar}/>
            <div className='app__wrapper__content'>
                <Route path='/profile'
                       render={() => <Profile profilePage={state.profilePage}
                                              addPost={addPost}
                                              updatePostText={updatePostText}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs dialogsPage={state.dialogsPage}
                                              updateMessageText={updateMessageText}
                                              addMessage={addMessage}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
