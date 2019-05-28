import React, { Component } from 'react';

class TextArea extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        return this.props.onRandom(event.target.value);
    }
    render() {
        const { result, header } = this.props;
        let className = "input-group-text w-100 d-flex justify-content-center label__border-radius_bottom ";
        if (header.bgColor !== 'bg-danger') {
            className += "text-white " + header.bgColor;
        }
        return (
            <div className="col-3 text-right content__shadow bg-white py-4 mx-3 rounded">
                <div className="input-group">
                    <div className="input-group-prepend w-100">
                        <span className={className}>Result</span>
                    </div>
                </div>
                <div className="input-group">
                    <textarea className="form-control textarea__border-radius_top" rows="11" value={result} onChange={this.handleChange} ></textarea>
                </div>
            </div>
        )
    }
}

export default TextArea;