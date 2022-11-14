import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import styles from "./Home.module.css"
import {useNavigate} from "react-router-dom"
import Sidebar from "../../components/Sidebar";
import BasicTable from "../../components/TableList";
 
const Home = () => {
    const verifyStorage = localStorage.getItem("isAuth")

    const verifyAdmin = localStorage.getItem("userRole") === '"SUPER_ADMIN"'
    
    return ( 
        <>
        <Layout title="Home">
        <div className={styles.main}>
            <div className={styles.container}>
            <div className={styles.links}>
            {verifyStorage ? 
                <>
                    <div className={styles.link}>
                        <Link to="/courses">Subjects</Link>
                    </div>
                    <div className={styles.link}>
                        <Link to="/students">Teachers</Link>
                    </div>
                    {verifyAdmin && <div className={styles.link}>
                        <Link to="/users">Admins</Link>
                    </div>}
                </>
                :
                <BasicTable className={styles.table}/>
            }
        </div>
            </div>
        </div>
        </Layout>
        </> 
    );
}
 
export default Home;