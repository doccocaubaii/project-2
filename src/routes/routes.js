
import Login from "../pages/Login/Login";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Concept from "../pages/Concept/Concept";
import Example from "../pages/Example/Example";


const normalRoutes = [

    { path: '/concept', component:Concept},
    { path: '/example', component:Example}
];

export {normalRoutes };
