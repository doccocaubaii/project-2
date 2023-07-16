import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import {normalRoutes} from "./routes/routes";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function NonLogin() {
    return (
    <React.Fragment>
        <Header/>
        <div className="d-flex" style={{height:"94vh", minHeight:"625px"}}>
            <Sidebar></Sidebar>
            <div  className="centerDiv">
                <Outlet />
            </div>
        </div>
    </React.Fragment>
    );
}
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/' element={<NonLogin/>}>
                {normalRoutes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<Page />}
                        />
                    );
                })}
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
