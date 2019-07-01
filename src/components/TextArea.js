import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

class TextArea extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.onClickCopy = this.onClickCopy.bind(this);
        this.textAreaRef = React.createRef();
    }

    handleChange(event) {
        return this.props.onRandom(event.target.value);
    }

    onNotify() {
        return toast.info('Copied ¯\\_(ツ)_/¯', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'rotateY animated'
        });
    }

    onClickCopy(e) {
        this.textAreaRef.current.select();
        document.execCommand('copy');
        this.onNotify();
    }

    render() {
        const { result, header } = this.props;
        let className = "input-group-text w-100 d-flex justify-content-center label__border-radius_bottom ";
        if (header.bgColor !== 'bg-danger') {
            className += "text-white " + header.bgColor;
        }

        return (
            <div className="col-3 text-center content__shadow bg-white py-4 mx-3 rounded">
                <div className="input-group">
                    <div className="input-group-prepend w-100">
                        <span className={className}>Result</span>
                    </div>
                </div>
                <div className="input-group">
                    <textarea className="form-control textarea__border-radius_top" rows="11" value={result} onChange={this.handleChange} ref={this.textAreaRef}></textarea>
                </div>
                <button className="btn btn-success" onClick={this.onClickCopy}>Copy</button>
            </div>
        )
    }
}

export default TextArea;