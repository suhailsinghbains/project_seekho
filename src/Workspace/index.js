import React, { Component } from 'react';
import './index.css';

export default class Workspace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            language: props.language
        }
        console.log(props.language)
    }
    Handler(prop) {
        this.setState({
            input: prop
        })
    }
    render() {
        return (<div className="flex">
            <div className="width-50">
                <textarea className="textArea" value={this.state.input} onChange={(e) => this.Handler(e.target.value)} />
            </div>
            <div className="width-50 wordBreak">
                <div dangerouslySetInnerHTML={{ __html: this.state.input }} />
            </div>
        </div>
        )
    }
}