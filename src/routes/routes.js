
import Login from "../pages/Login/Login";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Concept from "../pages/Concept/Concept";
import Example from "../pages/Example/Example";
import Search from "../pages/Search/Search";
import Tree from "../pages/Tree/Tree";


const normalRoutes = [

    { path: '/concept', component:Concept},
    { path: '/example', component:Example},
    { path: '/search', component:Search},
    { path: '/tree', component:Tree}
];

export {normalRoutes };
