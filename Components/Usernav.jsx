import { Link } from "react-router-dom";
import "../Styles/Usernav.css"
const Usernav = () => {
    return ( 
        <div className="usernav">
            {/* <h1>Usernav</h1> */}
            <div>
                <img src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/01/31/0dfe05d1f843d2705c096b93ccb80e54_original.jpg?impolicy=abp_cdn&imwidth=720" alt="" />
            </div>
            <div className="link">
               <Link  to="/userhomepage/userview" id="l1">UserView</Link>
               <Link  to="/userhomepage/useraddvedio" id="l2">Useraddvideo</Link>
            </div>

        </div>
     );
}
 
export default Usernav;