import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateType} from "./redux/state";


export type addMessageType = (newDialogsMessage:string)=> void

export const rerenderEntireTree = (state: StateType)=> {
    ReactDOM.render(
    <React.StrictMode>
        <App state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);}


reportWebVitals();
