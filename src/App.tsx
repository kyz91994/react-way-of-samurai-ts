import React  from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {StateType} from "./redux/state";
import { Friends } from './components/Friends/Friends';
type AppPropsType = {
    state: StateType
}

function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sideBarPage}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={()=><Profile state={props.state.profilePage}/>}/>
                    <Route path='/dialogs' render={()=><Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/settings' render={()=><Settings/>}/>
                    <Route path='/friends' render={()=><Friends state={props.state.sideBarPage}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
