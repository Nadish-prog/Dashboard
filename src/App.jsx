
import './App.css'
import {Toolbar} from "@mui/material";
import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./components/pages/home/Home.jsx";
function App() {
  return (
   <>
    <Topbar/>
       <div className="container">
           <Sidebar/>
             <Home/>
       </div>
   </>
  )
}

export default App
