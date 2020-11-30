import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = ({dialogsData, messageData, postsData}) => {
    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <NavBar/>
                <div className='app__wrapper__content'>
                    <Route path='/profile'
                           render={() => <Profile postsData={postsData}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsData={dialogsData} messageData={messageData}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
