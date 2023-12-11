import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CSS from "csstype";

import Auth from "./components/Auth";
import View from "./components/View";
import Stats from "./components/Stats";
import NavBar from "./components/NavBar";

import Login from "./screens/Login";

import React from 'react';
import ReactDOM from 'react-dom/client';


const Styles: CSS.Properties  = {
    marginLeft: "15%",
    marginRight: "15%",
    
}

const App = () => {
    return <div style={Styles}>
        <NavBar></NavBar>
    </div>
}

var res: HTMLElement | null = document.getElementById("root")
var root: ReactDOM.Root;

if (res != null){
    root = ReactDOM.createRoot(res);

    root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="auth" element={<Auth/>}></Route>
                <Route path="view" element={<View/>}></Route>
                <Route path="stats" element={<Stats/>}></Route>
                <Route path="app" element={<App/>}></Route>
            </Routes>
        </BrowserRouter>
    );

} else {
    let r = document.createElement('div');
    r.id = "root";
    r.appendChild(document.createTextNode("Something is wrong with default React static html file!"));
    document.body.appendChild(r);

    root = ReactDOM.createRoot(r);

    root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="auth" element={<Auth/>}></Route>
                <Route path="view" element={<View/>}></Route>
                <Route path="stats" element={<Stats/>}></Route>
            </Routes>
        </BrowserRouter>
    );

}




