import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { showModel } from '../action/index.js';
import { userDetails } from '../action/index.js';
import axios from 'axios';
import { useHistory } from "react-router-dom";

export const Login = () => {

    const history=useHistory();
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const Show = useSelector((state) => state.login.show)
    const user = useSelector((state) => state.login.record)


    const { name, password } = user;
    const handleChange = (e) => {
        dispatch(userDetails({ ...user, [e.target.name]: e.target.value }));
       
    }

    const getData = () => {
        axios.get(" http://localhost:3008/user").then((response) => {
            console.log(response)
            setData(response.data);
        });
    }

    useEffect(() => {
        getData();
       
    }, [])

    const handleClose = () => dispatch(showModel(false));
    const handleShow = () => dispatch(showModel(true));

    const handleSubmit = () => {
        if (name && password == data.map((user) => user.name && user.password)) {
            
            alert("Successfull login");
            history.push('/Dashboard')
            
        }
        else (alert("error"));
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
                    <Button variant="primary" onClick={handleSubmit}>
                        logIn
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    );
}