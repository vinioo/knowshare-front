import React, { Component } from 'react';
import axios from 'axios';

import Input from '../components/Input';
import ButtonOutline from '../components/ButtonOutline';

import './NewPost.css';

export default class NewPost extends Component {
  handleSubmit = async e => {
    this.setState({
      title: '',
      author: '',
      description: '',
      hashtags: '',
      link: ''
    });
    const { title, author, description, hashtags, link } = this.state;
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_URL}/posts`, {
        title: title,
        author: author,
        descripton: description,
        hashtags: hashtags,
        link: link
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
      <div>
        <div className="NewPost">
          <h1>Novo Post</h1>
          <div className="NewPostContent">
            <Input
              placeText="Digite o titulo"
              onChange={this.handleInput}
              name="title"
            />
            <Input
              placeText="Digite o autor"
              onChange={this.handleInput}
              name="author"
            />
            <Input
              placeText="Digite a descricao"
              onChange={this.handleInput}
              name="description"
            />
            <Input
              placeText="Digite as hashtags"
              onChange={this.handleInput}
              name="hashtags"
            />
            <Input
              placeText="Digite o link"
              onChange={this.handleInput}
              name="link"
            />
            <ButtonOutline content="Enviar post!" onClick={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}
