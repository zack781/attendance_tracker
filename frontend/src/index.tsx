import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./components/Auth";
import View from "./components/View";
import Stats from "./components/Stats";

const App = () => {
    return <div>
        <h1>Zack's Awesome Attendence Tracker App</h1>
    </div>
}

var res: HTMLElement | null = document.getElementById("root")
var root: ReactDOM.Root;

if (res != null){
    root = ReactDOM.createRoot(res);

    root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
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
                <Route path="/" element={<App/>}></Route>
                <Route path="auth" element={<Login/>}></Route>
                <Route path="view" element={<View/>}></Route>
                <Route path="stats" element={<Stats/>}></Route>
            </Routes>
        </BrowserRouter>
    );

}




