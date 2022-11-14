import Navbar from "./Navbar";
import img1 from "../images/course-logo.png"
import styles from "./Layout.module.css"
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import img2 from "../images/avatar.png"
import {VscBellDot} from "react-icons/vsc"
import {TbLogout} from "react-icons/tb"
import { useNavigate } from "react-router-dom";

const Layout = params => {
    const navigate = useNavigate()

    const logoutHandler = () => {
        navigate("/auth/login")
        window.location.reload()
    }
    return ( 
        <>
        <nav>
            <img src={img1} alt="logo"/>
            <a>Computer Ingineering</a>
            <div className={styles.links}>
                <Link className={styles.link} to={"/courses"}>Articles</Link>
                <Link className={styles.link} to={"/students"}>Teachers</Link>
                <Link className={styles.link} to={"/students"}>Subjects</Link>
                <Link className={styles.link} to={"/auth/login"}>Login</Link>
            </div>
            <div className={styles.rightSide}>
                <img src={img2} alt="avatar"/>
                <button onClick={logoutHandler} className={styles.logout}>Log out <TbLogout size={24}/></button>
            </div>
        </nav>
        <div className={styles.container}>
        <Sidebar/>
        <div className={styles.main}>
            {params.children}
        </div>
        </div>
        </>
     );
}
 
export default Layout;