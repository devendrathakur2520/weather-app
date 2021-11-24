import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { useState,/*useEffect */ } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { showForm } from '../action/index.js';
//import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import LoginConform from '../loginConform.js';
import axios from 'axios';
export const Login = () => {

    const dispatch = useDispatch();
    const Show = useSelector((state) => state.login.show)

    //const [show, setShow] = useState(false);
    const [Details, setDetails] = useState(
        {
            name: "",
            password: ""
        }
    )
    let history = useHistory();
    const { name, password } = Details;
    const handleChange = (e) => {
        setDetails({ ...Details, [e.target.name]: e.target.value });

    }

    const handleClose = () => dispatch(showForm(false));
    const handleShow = () => dispatch(showForm(true));

    const handleGo = () => {
       
        history.push('/LoginConform.js');
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Log
            </Button>

            <Modal show={Show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>LogIn Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>UserName:<input type="text" placeholder="UserName" name="name" value={name} onChange={handleChange} /></Modal.Body>
                <Modal.Body>PassWord:<input type="password" placeholder="password" name="password" value={password} onChange={handleChange} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleGo}>
                        logIn
                    </Button>




                </Modal.Footer>
            </Modal>
        </>
    );
}