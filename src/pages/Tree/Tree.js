import styles from './Tree.module.css';
import React, {useState} from "react";
import {Button, Form, ListGroup} from "react-bootstrap";

function Tree() {
    const [concept, setConcept] = useState(0);
    const [examples, setExamples] = useState(0);

    return (
        <div className={styles.mcontainer}>
            <div className={styles.divA}>
                <TextControls  style={{width:'40%', paddingRight:"10px"}} name="Concept"  placeholder="Search concept" ></TextControls>
                <Button variant="primary" style={{marginTop:'14px',minWidth:'87px'}}>Show</Button>{' '}
            </div>
            <div className={styles.divC}>
                <Form.Control
                    as="textarea"
                    placeholder="Example of concept"
                    disabled={true}
                    style={{ height: "calc(100% )" }}
                />

            </div>
            <div className={styles.divB}>
                <div className={styles.divB1}>
                    <Unit name="Nominal" value="0"></Unit>
                    <Unit name="Agent" value="0"></Unit>
                    <Unit name="Action" value="0"></Unit>
                    <Unit name="Describing" value="0"></Unit>
                </div>
                <div className={styles.divB1}>
                    <Unit name="Nominal" value="0"></Unit>
                    <Unit name="Patient" value="0"></Unit>
                    <Unit name="Being described by" value="0"></Unit>
                    <Unit name="Other phrases" value="0"></Unit>
                </div>
            </div>
            <div className={styles.divD}>
                <div className={styles.divD1}>
                    <p>Children</p>
                    <ul>
                        <LiUnit name ='child1' type="A type of"></LiUnit>
                        <LiUnit name ='child2' type="Association"></LiUnit>
                    </ul>
                </div>
                <Button variant="primary" style={{marginTop:'14px',minWidth:'87px', backgroundColor:"#F64D4D",width:"10%",height:"40px"}}>Concept1</Button>
                <div className={styles.divD1}>
                    <p>Children</p>
                    <ul>
                        <LiUnit name ='child1' type="A type of"></LiUnit>
                        <LiUnit name ='child2' type="Association"></LiUnit>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Tree;

function TextControls(props) {
    const name =  props.name !== undefined ? props.name : false;
    const showRequiredLabel = props.isRequired !== undefined ? props.isRequired : false;
    const placeHolder= props.placeholder !==undefined? props.placeholder : '';
    return (
        <Form  style={props.style}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{fontWeight:"bold"}}>{props.name} {showRequiredLabel && <span style={{color: "red"}}>(*)</span>} </Form.Label>
                <Form.Control type="text" placeholder={placeHolder} />
            </Form.Group>
        </Form>
    );
}

function Unit(props) {
    return (
        <div className="d-flex flex-column align-items-center" style={{width :"25%"}}>
            <span style ={{fontWeight:"500", display:"block"}}>{props.name}</span>
            <span style ={{color:"red", fontWeight:"bold",display:"block"}}>{props.value}</span>
        </div>
    )
}

function LiUnit({name, type}){
    return (
        <li>
            <div className="d-flex justify-content-between">
                <span>{name}</span>
                <span>{type}</span>
            </div>
        </li>

    )
}