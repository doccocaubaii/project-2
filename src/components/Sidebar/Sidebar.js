import styles from './Sidebar.module.css';
function Sidebar() {
    return (
        <div className={styles.total}>
            <div style={{ marginBottom: "15px",paddingLeft: "16px"}}>
                <span style={{ display: "block"}}>Current Dictionary</span>
                <span style={{ display: "block",fontWeight:"bold"}}>My Dictionary</span>
            </div>
            <div className={styles.rectangleDiv}>
                <div>
                    <img src="/assets/images/contact.svg"/>
                    <span>Dictionary</span>
                </div>
                <div style={{marginTop: "24px"}}>
                    <img src="/assets/images/git.svg"/>
                    <span>Acccount</span>
                </div>
            </div>
            <div className={styles.contentDiv}>
                <img src='/assets/images/rocket.svg'></img>
            </div>
        </div>
    );
}

export default Sidebar;
