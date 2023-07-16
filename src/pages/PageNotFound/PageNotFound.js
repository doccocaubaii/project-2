import styles from './PageNotFound.module.css';
import React from "react";
import {Link} from "react-router-dom";
function PageNotFound() {
    return (

        <div className={styles.A}>
            <img src="/assets/images/404.svg" style={{maxHeight:"500px"}}/>
            <strong style={{marginTop:"5px", marginBottom:"5px", fontSize:"1.5em"}}> Trang bạn kết nối đến không tồn tại</strong>
            <Link to="/concept">
                <button type="button" className="btn btn-danger me-4" >Back to Main</button>

            </Link>
        </div>


);
}

export default PageNotFound;
