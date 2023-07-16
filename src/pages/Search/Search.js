import styles from './Search.module.css';
import React, {useState} from "react";
import {Button, Form, ListGroup} from "react-bootstrap";

function Search(){
    return (
        <div className={styles.mcontainer}>
            <div className={styles.A}>
                <div className={styles.A1}>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter keyword search example"
                        style={{height: "100%"}}
                    />
                </div>
                <div className={styles.divA3}>
                    <SearchControls style={{}} name="Concept" placeholder="Search concept"></SearchControls>
                    <Form.Group className="mb-3" style={{height: "calc(100% - 85px)"}}
                                controlId="exampleForm.ControlInput1">
                        <Form.Label style={{fontWeight: "bold"}}>Concept3 </Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="definition"
                            style={{height: "calc(100% - 39px)"}}
                        />
                    </Form.Group>
                </div>

            </div>
            <div className={styles.divB}>
                <div className={styles.divB1}>
                    <div className={styles.divB11}>
                        <MyLabel2 name="Tone"></MyLabel2>
                        <div style={{minWidth:"103px"}}>
                            <Form.Select aria-label="Chose Relation">
                                <option value="1">All</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className={styles.divB11}>
                        <MyLabel2 name="Mode"></MyLabel2>
                        <div style={{minWidth:"103px"}}>
                            <Form.Select aria-label="Chose Relation">
                                <option value="1">All</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className={styles.divB11}>
                        <MyLabel2 name="Register"></MyLabel2>
                        <div style={{minWidth:"103px"}}>
                            <Form.Select aria-label="Chose Relation">
                                <option value="1">All</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className={styles.divB11}>
                        <MyLabel2 name="Nuance"></MyLabel2>
                        <div style={{minWidth:"103px"}}>
                            <Form.Select aria-label="Chose Relation">
                                <option value="1">All</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className={styles.divB11}>
                        <MyLabel2 name="Dialect"></MyLabel2>
                        <div style={{minWidth:"103px"}}>
                            <Form.Select aria-label="Chose Relation" >
                                <option value="1">All</option>
                            </Form.Select>
                        </div>
                    </div>
                </div>
                <div className={styles.divB2}>
                    <div className={styles.divB21}>
                        <Form.Group className="mb-3" style={{height: "calc(100% - 85px)"}}
                                    controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight: "bold"}}>Linked concept </Form.Label>
                            <div style={{overflowY:"auto", maxHeight:"70px", backgroundColor:"white"}}>
                                <ul>
                                    <li><span style={{color:"red", marginLeft:"5px", marginRight:"15px"}}>
                                          [x]
                                        </span>Concept 1
                                    </li>
                                    <li><span style={{color:"red", marginLeft:"5px", marginRight:"15px"}}>
                                          [x]
                                        </span>Concept 2
                                    </li>
                                    <li><span style={{color:"red", marginLeft:"5px", marginRight:"15px"}}>
                                          [x]
                                        </span>Concept 2
                                    </li>
                                    <li><span style={{color:"red", marginLeft:"5px", marginRight:"15px"}}>
                                          [x]
                                        </span>Concept 2
                                    </li>
                                    <li><span style={{color:"red", marginLeft:"5px", marginRight:"15px"}}>
                                          [x]
                                        </span>Concept 2
                                    </li>
                                </ul>
                            </div>
                        </Form.Group>
                    </div>
                    <div className={styles.divB22}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Save last search parameters
                            </label>
                        </div>
                        <div className="d-flex">
                            <button type="button" style={{width:"150px"}} className="btn btn-primary">Search</button>
                        </div>

                    </div>

                </div>
            </div>
            <div className={styles.divC}>
                <span><strong>Search results</strong>: No data</span>
            </div>
        </div>

    );
}

export default Search;

function SelectControls() {
    return (
        <Form.Select aria-label="Chose Relation" style={{width: "70%"}}>
            <option value="1">No link</option>
            <option value="2">Association</option>
            <option value="3">Type of</option>
        </Form.Select>
    );
}

function MyLabel({name}) {
    return (
        <div className={styles.myLabel}>
            <span>{name}</span>
        </div>
    );
}
function MyLabel2({name}) {
    return (
        <div className={styles.myLabel} style={{marginLeft:"5px", marginRight:"5px", width: "100px"}}>
            <span>{name}</span>
        </div>
    );
}

function SearchControls(props) {
    const name = props.name !== undefined ? props.name : false;
    const showRequiredLabel = props.isRequired !== undefined ? props.isRequired : false;
    const placeHolder = props.placeholder !== undefined ? props.placeholder : '';
    return (
        <Form style={props.style} className={styles.relative}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{fontWeight: "bold", paddingLeft: "6px"}}>{props.name} {showRequiredLabel &&
                    <span style={{color: "red"}}>(*)</span>} </Form.Label>
                <Form.Control type="text" placeholder={placeHolder}/>
                <svg className={styles.iconSearch} width="21" height="20" viewBox="0 0 21 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5"
                          d="M15.2008 12.309C16.4365 10.7364 16.9899 8.78662 16.7504 6.8498C16.5109 4.91298 15.4961 3.13193 13.909 1.86295C12.3219 0.593978 10.2796 -0.0693265 8.19067 0.0057415C6.10172 0.0808095 4.12019 0.888714 2.64251 2.26782C1.16483 3.64693 0.299983 5.49554 0.220987 7.4438C0.141991 9.39206 0.854674 11.2963 2.21645 12.7756C3.57823 14.2548 5.48868 15.2 7.56559 15.422C9.6425 15.6439 11.7327 15.1264 13.418 13.9728H13.4167C13.455 14.0204 13.4958 14.0656 13.5418 14.1097L18.455 18.6919C18.6943 18.9152 19.0189 19.0407 19.3574 19.0408C19.6959 19.0409 20.0206 18.9156 20.2601 18.6924C20.4995 18.4693 20.6341 18.1665 20.6343 17.8508C20.6344 17.5351 20.5 17.2323 20.2607 17.0089L15.3475 12.4268C15.3019 12.3837 15.2529 12.3439 15.2008 12.3078V12.309ZM15.53 7.73392C15.53 8.59355 15.3485 9.44476 14.9958 10.239C14.643 11.0331 14.126 11.7548 13.4743 12.3626C12.8225 12.9705 12.0488 13.4526 11.1972 13.7816C10.3456 14.1106 9.43292 14.2799 8.51119 14.2799C7.58947 14.2799 6.67677 14.1106 5.8252 13.7816C4.97364 13.4526 4.19988 12.9705 3.54813 12.3626C2.89637 11.7548 2.37936 11.0331 2.02663 10.239C1.6739 9.44476 1.49236 8.59355 1.49236 7.73392C1.49236 5.99783 2.23184 4.33284 3.54813 3.10524C4.86441 1.87763 6.64968 1.18797 8.51119 1.18797C10.3727 1.18797 12.158 1.87763 13.4743 3.10524C14.7905 4.33284 15.53 5.99783 15.53 7.73392Z"
                          fill="black"/>
                </svg>
            </Form.Group>
        </Form>
    );
}