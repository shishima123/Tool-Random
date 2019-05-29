import React, { Component } from 'react';
import './component.css';
import 'react-toastify/dist/ReactToastify.css';

class RandomString extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 3,
            isDisable: false
        }
        this.prefixRef = React.createRef();
        this.fromRef = React.createRef();
        this.toRef = React.createRef();
        this.typeRef = React.createRef();
        this.qtyRef = React.createRef();
        this.onRandomString = this.onRandomString.bind(this);
        this.onChangeLen = this.onChangeLen.bind(this);
        this.onChangeSelectBox = this.onChangeSelectBox.bind(this);
    }

    onRandomString() {
        const { onRandom, onChangeHeader, header, onNotify } = this.props;

        let prefix = this.prefixRef.current.value;
        let from = Number(this.fromRef.current.value);
        let to = Number(this.toRef.current.value);
        let type = this.typeRef.current.value;
        let qty = Number(this.qtyRef.current.value);
        let result = '';
        if (from === '' || to === '') {
            alert('Please enter From-To.');
        } else if (isNaN(from) || isNaN(to)) {
            alert('From - To must number.');
        } else if (isNaN(qty)) {
            alert('The quantity must be number.');
        } else if (from > to) {
            alert('From is bigger than To. Please re-enter correctly.');
        } else {

            if (type === 'random') {
                for (let i = 0; i < qty; i++) {
                    let number = Math.floor((Math.random() * ((to + 1) - from)) + from);
                    let numberLen = number.toString().length;
                    let toLen = to.toString().length;
                    if (numberLen < toLen) {
                        for (let i = numberLen; i < toLen; i++) {
                            number = '0' + number;
                        }
                    }
                    result += prefix + number + '\r';
                }
            } else {
                for (let i = from; i <= to; i++) {
                    result += prefix + i + '\r';
                }
            }
            onRandom(result);
            onChangeHeader(header[1]);
            onNotify();
        }
    }

    onChangeLen() {
        let prefix = this.prefixRef.current.value;
        let lenPrefix = prefix.length;
        let to = this.toRef.current.value;
        let lenTo = to.length;
        let length = lenPrefix + lenTo;
        this.setState({ length: length })
    }

    onChangeSelectBox(e) {
        let isDisable;
        if (e.target.value === 'order_list') {
            isDisable = true;
        } else {
            isDisable = false;
        }
        this.setState({ isDisable: isDisable })

    }

    render() {
        return (
            <div className="col-3 text-right content__shadow bg-white py-4 rounded">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text lable__input-width cloudy-knoxville-gradient">Prefix</span>
                    </div>
                    <input type="text" className="form-control" ref={this.prefixRef} onChange={this.onChangeLen} />
                    <div className="input-group-append ">
                        <span className="input-group-text cloudy-knoxville-gradient">{this.state.length}</span>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text lable__input-width cloudy-knoxville-gradient" >From</span>
                    </div>
                    <input type="text" className="form-control" defaultValue="000" ref={this.fromRef} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text lable__input-width cloudy-knoxville-gradient" >To</span>
                    </div>
                    <input type="text" className="form-control" defaultValue="100" ref={this.toRef} onChange={this.onChangeLen} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text lable__input-width cloudy-knoxville-gradient">Type</label>
                    </div>
                    <select className="form-control" ref={this.typeRef} onChange={this.onChangeSelectBox}>
                        <option value='random'>Random</option>
                        <option value='order_list'>Order List</option>
                    </select>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text lable__input-width cloudy-knoxville-gradient">Quantity</span>
                    </div>
                    <input type="text" className="form-control" defaultValue="10" ref={this.qtyRef} disabled={(this.state.isDisable) ? true : ''} />
                </div>

                <div className="input-group d-flex justify-content-center">
                    <button type="button" className="btn blue-gradient text-white" onClick={this.onRandomString}>Random</button>
                </div>
            </div>
        )
    }
}

export default RandomString;