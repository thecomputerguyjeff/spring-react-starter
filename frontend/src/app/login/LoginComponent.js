import React, { Component } from 'react';

import {
    Button,
    Col, Form, FormControl, FormGroup, Modal } from "react-bootstrap";

class LoginComponent extends Component {
    state = {
        username: "",
        password: ""
    };

    handleChange = (e) => {
        var inputName = e.target.name;
        var inputValue = e.target.value;
        this.setState({[inputName]: inputValue});
    }

    handleSubmit = (e) => {
        this.props.login(this.state.username, this.state.password);
    }

    render() {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>
                        Login page
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form horizontal>
                        <FormGroup>
                            <Col sm={3}>
                                Login:
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text"
                                             name="username"
                                             onChange={this.handleChange.bind(this)} />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col sm={3}>
                                Password:
                            </Col>
                            <Col sm={9}>
                                <FormControl type="password"
                                             name="password"
                                             onChange={this.handleChange.bind(this)} />
                            </Col>
                        </FormGroup>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Login</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

export default LoginComponent;