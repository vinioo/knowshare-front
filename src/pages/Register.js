import React, { Component } from 'react';
import axios from 'axios'

import './Login.css';
import Input from '../components/Input';
import ButtonOutline from '../components/ButtonOutline';
import './Register.css'

export default class Register extends Component {
    state = {
        name: '',
        email: '',
        pass: '',
        errorMessage: ''
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({
            errorMessage: ''
        })
        const {name, email, pass} = this.state
        await axios.post(`http://localhost:4002/register`, {
            name: name,
            email: email,
            password: pass

        })
        .then(res => {
            alert('Cadastro realizado com sucesso! Você será redirecionado para a tela de login')
            setTimeout(() => {
                this.props.history.push("/login")
            }, 2000)

        })
        .catch(err => { 
            console.log(err)
            this.setState({
                errorMessage: err
            })
        })
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }

        )

    }
    render() {
        return (
            <div className="Register">
                <h1>Registro</h1>
                    <div className="RegisterContent">
                    <Input placeText="Digite o seu nome" onChange={this.handleInput} name="name"/>
                        <Input placeText="Digite o seu email" onChange={this.handleInput} name="email"/>
                        <Input placeText="Digite a sua senha" onChange={this.handleInput} name="pass"/>
                        <ButtonOutline content="Cadastrar" onClick={this.handleSubmit}/>
                    </div>
                    {this.state.errorMessage && 'Erro no cadastro! Deve ser quantidade de campos'}
            </div>

        );
    }
}
