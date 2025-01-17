import Navbar from "../../components/navbar/Navbar";
import styled from "./notfound.module.css"
function NotFound(){
    return(
        <>
        <Navbar title="Bahar Blog"/>
        <div className={styled.notFoundWrapper}>
            

            <h1> 404</h1>
        </div>

        </>
        
    )
}
export default NotFound;