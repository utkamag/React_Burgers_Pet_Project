import React from "react";
import Landing from "./Landing";
import App from "./App";
import {Route, Routes} from 'react-router-dom'


function Router() {
    return (
        <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/restaurant/:restaurantid' element={<App />}/>
        </Routes>
    )
}

export default Router