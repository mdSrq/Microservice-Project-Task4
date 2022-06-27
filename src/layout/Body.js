import React from "react";
import Header from "./Header";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ViewAllServer from "../component/ViewAllServers";
import AddServer from "../component/AddServer";
import UpdateServer from "../component/UpdateServer";

class Body extends React.Component {
   render() {
      return (
         <div className="container">
            <Router>
               <Header title="REST Server API"/>
               <Routes>
               <Route exact path="/" element={<ViewAllServer></ViewAllServer>}></Route>
                 <Route exact path="/home" element={<ViewAllServer></ViewAllServer>}></Route>
                   <Route exact path="/add-server" element={<AddServer></AddServer>}></Route>
                   <Route exact path="/update-server/:id" element={<UpdateServer/>}/>
               </Routes>
            </Router>
         </div>
      );
   }
}
export default Body;