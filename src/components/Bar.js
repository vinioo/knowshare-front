import React, { Component } from 'react';
import './Bar.css';

export default class Bar extends Component {
    state = {
        green: 0,
        red: 0
    };
     componentDidMount() {
     this.calcBar();
    }
    calcBar = () => {
        const { green, red } = this.props;
        const totalVotes = green + red;
        let redWidth = (red / totalVotes) * 100;
        let greenWidth = (green / totalVotes) * 100;

        if (!isFinite(redWidth)) {
            redWidth = 0;
        }
        if (!isFinite(greenWidth)) {
            greenWidth = 0;
        }
        this.setState({
            green: greenWidth,
            red: redWidth
        });
    };
    render() {
        return (
            <div className="bar" >
                {this.state.green === 0 && this.state.red === 0 ? (
                    <div>
                        teste
                        <div className="barGrey" />    
                    </div>
           
                ) : (
                    <div className="bar">
                        <div
                            className="barGreen"
                            style={{ width: `${this.state.green}px` }}
                        />
                        <div
                            className="barRed"
                            style={{ width: `${this.state.red}px` }}
                        />
                    </div>
                )}
            </div>
        );
    }
}
