// import styles from './Header.module.css';
// import {Link} from "react-router-dom";
// import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
// function Header() {
//     return (
//       <>
//          <div className="d-flex" style={{backgroundColor:"#D0D0D0", height:"6vh"}}>
//              <div className="me-auto d-flex">
//                  <div style={{width:"220px"}} className="d-flex justify-content-center">
//                      <img src='/assets/images/book-blue.svg' />
//                  </div>
//
//                  <Link to="/concept"  className={styles.centerElementInside}>
//                      <div className={styles.blockUnit} >
//                          <span>Concept</span>
//                      </div>
//                  </Link>
//
//                  <Link to="/example" className={styles.centerElementInside}>
//                      <div className={styles.blockUnit}>
//                          <span>Example</span>
//                      </div >
//                  </Link>
//
//                  <Link to="/search" className={styles.centerElementInside}>
//                  <div className={styles.blockUnit}>
//                      <span>Search</span>
//                  </div>
//
//                  </Link>
//
//                  <Link to="/tree"  className={styles.centerElementInside}>
//                  <div className={styles.blockUnit}>
//                      <span>Tree</span>
//                  </div>
//                  </Link>
//              </div>
//              <div className="ms-auto">
//                  <span>Name</span>
//              </div>
//          </div>
//       </>
//     );
// }
//
// export default Header;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Header.module.css';

function Header() {
    const location = useLocation();

    return (
        <>
            <div className="d-flex" style={{ backgroundColor: '#D0D0D0', height: '6vh' }}>
                <div className="me-auto d-flex">
                    <div style={{ width: '220px' }} className="d-flex justify-content-center">
                        <img src="/assets/images/book-blue.svg" alt="Logo" />
                    </div>

                    <Link to="/concept" className={location.pathname === '/concept' ? `${styles.centerElementInside} ${styles.activeLink}` : styles.centerElementInside}>
                        <div className={styles.blockUnit}>
                            <span>Concept</span>
                        </div>
                    </Link>

                    <Link to="/example" className={location.pathname === '/example' ? `${styles.centerElementInside} ${styles.activeLink}` : styles.centerElementInside}>
                        <div className={styles.blockUnit}>
                            <span>Example</span>
                        </div>
                    </Link>

                    <Link to="/search" className={location.pathname === '/search' ? `${styles.centerElementInside} ${styles.activeLink}` : styles.centerElementInside}>
                        <div className={styles.blockUnit}>
                            <span>Search</span>
                        </div>
                    </Link>

                    <Link to="/tree" className={location.pathname === '/tree' ? `${styles.centerElementInside} ${styles.activeLink}` : styles.centerElementInside}>
                        <div className={styles.blockUnit}>
                            <span>Tree</span>
                        </div>
                    </Link>
                </div>
                <div className="ms-auto">
                    <span>Name</span>
                </div>
            </div>
        </>
    );
}

export default Header;