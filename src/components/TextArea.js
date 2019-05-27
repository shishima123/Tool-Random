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
        const { result } = this.props;
        return (
            <div className="col-3 text-right content__shadow bg-white py-4 mx-3 rounded">
                <div className="input-form">
                    <div className="input-group-prepend">
                        <span className="input-group-text w-100 d-flex justify-content-center">Result</span>
                    </div>
                </div>
                <div className="input-group">
                    <textarea className="form-control" rows="11" value={result} onChange={this.handleChange} ></textarea>
                </div>
            </div>
        )
    }
}

export default TextArea;