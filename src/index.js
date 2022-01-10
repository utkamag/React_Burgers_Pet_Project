import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./components/Router";
import reportWebVitals from './reportWebVitals';
import './css/style.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
