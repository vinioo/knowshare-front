import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import io from 'socket.io-client';

import FlipMove from 'react-flip-move';
import Bar from '../Bar';

import './Item.css';
import like from '../../images/like.png';

export default class Item extends Component {
  state = {
    items: [],
    transition: false
  };
  async componentDidMount() {
    this.registerToSocket();
    await axios.get(`${process.env.REACT_APP_URL}/posts`).then(res => {
      const items = res.data;
      this.setState({ items: items });
    });
  }
  registerToSocket = () => {
    const socket = io(process.env.REACT_APP_URL);

    socket.on('like', itemLiked => {
      this.setState({
        items: this.state.items.map(item =>
          item._id === itemLiked._id ? itemLiked : item
        )
      });
    });
    socket.on('dislike', itemLiked => {
      this.setState({
        items: this.state.items.map(item =>
          item._id === itemLiked._id ? itemLiked : item
        )
      });
    });
  };
  handleLike = async id => {
    await axios.post(`${process.env.REACT_APP_URL}/posts/${id}/like`);
  };
  handleDislike = async id => {
    await axios.post(`${process.env.REACT_APP_URL}/posts/${id}/dislike`);
  };
  getVideoThumbnail = link => {
    if (link !== undefined && link !== null) {
      let regEx =
        '^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?.com|youtu.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)';
      var matches = link.match(regEx);
      if (matches !== undefined && matches !== null) {
        return `https://img.youtube.com/vi/${matches[1]}/0.jpg`;
      }
    }
    return false;
  };
  render() {
    const items = this.state.items
      .sort((a, b) => a.likes - b.likes)
      .reverse()
      .map(item => (
        <div className="itemContainer">
          <div className="item">
            <div className="itemImage">
              <a href={item.link} target="_blank" className="itemLink">
                <div className="imgOverlay" />

                <img src={this.getVideoThumbnail(item.link)} alt="" srcset="" />
              </a>
            </div>
            <div className="itemDescription">
              <h4>
                {item.title} - {item.author}
              </h4>
              <p>{item.descripton}</p>
              <Link class="hashtags">{item.hashtags}</Link>
            </div>
            <div className="likeContainer">
              <img
                src={like}
                onClick={() => this.handleLike(item._id)}
                class="like"
              />
              {item.likes}
              <img
                src={like}
                onClick={() => this.handleDislike(item._id)}
                class="dislike"
              />
              {item.dislikes}
              <Bar
                green={item.likes}
                red={item.dislikes}
                className="bar"
              />
            </div>
          </div>
        </div>
      ));
    return <div>{items}</div>;
  }
}
