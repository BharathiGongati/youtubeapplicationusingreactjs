import { Route, Routes } from "react-router-dom";
import Usernav from "./Usernav"
import Userview from "./Userview"
import Useraddvedio from "./Useraddvedio"
const Userhomepage = () => {
    return (  
        <div>
            <h1>Userhomepage</h1>
            <Usernav/>
            <Routes>
                
                <Route path="/userview" element={<Userview/>}/>
                <Route path="/useraddvedio" element={<Useraddvedio/>}/>
            </Routes>
        </div>
    );
}
 
export default Userhomepage;