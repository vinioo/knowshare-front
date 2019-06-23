import React, { Component } from 'react';
import axios from 'axios';

import './Login.css';
import Input from '../components/Input';
import ButtonOutline from '../components/ButtonOutline';

export default class Login extends Component {
    state = {
        email: '',
        pass: '',
        error: false
    };
    handleSubmit = async e => {
        this.setState({
            error: false
        });
        const { email, pass } = this.state;
        e.preventDefault();
        await axios
            .post(`http://localhost:4002/login`, {
                email: email,
                password: pass
            })
            .then(res => {
                this.props.history.push('/content');
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    error: true
                });
            });
    };
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <div className="LoginContent">
                    <Input
                        placeText="Digite o seu email"
                        onChange={this.handleInput}
                        name="email"
                    />
                    <Input
                        placeText="Digite a sua senha"
                        onChange={this.handleInput}
                        name="pass"
                    />
                    <ButtonOutline
                        content="Login"
                        onClick={this.handleSubmit}
                    />
                </div>
                {this.state.error && 'Usuário ou senha incorretos!'}
            </div>
        );
    }
}
