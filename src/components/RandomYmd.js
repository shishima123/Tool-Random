import React, { Component } from 'react';
import './component.css';
import 'react-toastify/dist/ReactToastify.css';

class RandomYmd extends Component {
    constructor(props) {
        super(props);
        this.YearFrRef = React.createRef();
        this.YearToRef = React.createRef();
        this.MonthFrRef = React.createRef();
        this.MonthToRef = React.createRef();
        this.DayFrRef = React.createRef();
        this.DayToRef = React.createRef();
        this.qtyRef = React.createRef();
        this.onRandomYmd = this.onRandomYmd.bind(this);
    }

    onRandomYmd() {
        const { onRandom, onChangeHeader, header, onNotifySuccess, onNotifyFail } = this.props;

        let YearFr = Number(this.YearFrRef.current.value);
        let YearTo = Number(this.YearToRef.current.value);
        let MonthFr = Number(this.MonthFrRef.current.value);
        let MonthTo = Number(this.MonthToRef.current.value);
        let DayFr = Number(this.DayFrRef.current.value);
        let DayTo = Number(this.DayToRef.current.value);
        let qty = Number(this.qtyRef.current.value);
        let result = '';
        if (isNaN(YearFr) || isNaN(YearTo) || isNaN(MonthFr) || isNaN(MonthTo) || isNaN(DayFr) || isNaN(DayTo) || isNaN(qty)) {
            alert('The input value must be the number.');
        } else if (!this.chkValidateInput('Year', YearFr, YearTo)) {
            alert('Please check Year value.');
        } else if (!this.chkValidateInput('Month', MonthFr, MonthTo)) {
            alert('Please check Month value.');
        } else if (!this.chkValidateInput('Day', DayFr, DayTo)) {
            alert('Please check Day value.');
        } else {
            for (let i = 0; i < qty; i++) {
                var year = Math.floor((Math.random() * ((YearTo + 1) - YearFr)) + YearFr);
                var month = Math.floor((Math.random() * ((MonthTo + 1) - MonthFr)) + MonthFr);
                if (month === 2) {
                    var day = Math.floor((Math.random() * ((DayTo + 1) - DayFr)) + DayFr);
                    if (day > 28) {
                        day = day - 3;
                    }
                } else {
                    day = Math.floor((Math.random() * ((DayTo + 1) - DayFr)) + DayFr);
                }

                if (month < 10) {
                    month = '0' + month;
                }

                if (day < 10) {
                    day = '0' + day;
                }
                result += year.toString() + month.toString() + day.toString() + "\r";
            }

            if (result !== '') {
                onRandom(result);
                onChangeHeader(header[2]);
                onNotifySuccess();
            } else {
                onNotifyFail();
            }
        }
    }

    chkValidateInput(type, From, To) {
        if (type === "Year") {
            if (From > To) {
                return false;
            }
        } else if (type === "Month") {
            if ((From > To) || (From > 12) || (To > 12)) {
                return false;
            }
        } else {
            if ((From > To) || (From > 31) || (To > 31)) {
                return false;
            }
        }
        return true;
    }

    render() {
        return (
            <div className="col-3 text-right content__shadow bg-white py-4 rounded">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text lable__input-width cloudy-knoxville-gradient" >Year</span>
                    </div>
                    <input type="text" className="form-control input__border-radius_right" defaultValue="2019" ref={this.YearFrRef} />
                    <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
                    <input type="text" className="form-control input__border-radius_left" defaultValue="2019" ref={this.YearToRef} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text lable__input-width cloudy-knoxville-gradient">Month</span>
                    </div>
                    <input type="text" className="form-control input__border-radius_right" defaultValue="1" ref={this.MonthFrRef} />
                    <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
                    <input type="text" className="form-control input__border-radius_left" defaultValue="12" ref={this.MonthToRef} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text lable__input-width cloudy-knoxville-gradient">Day</span>
                    </div>
                    <input type="text" className="form-control input__border-radius_right" defaultValue="1" ref={this.DayFrRef} />
                    <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
                    <input type="text" className="form-control input__border-radius_left" defaultValue="30" ref={this.DayToRef} />
                </div>

                <div className="input-group mb-5">
                    <div className="input-group-prepend">
                        <span className="input-group-text lable__input-width">Quantity</span>
                    </div>
                    <input type="text" className="form-control" defaultValue="10" ref={this.qtyRef} />
                </div>

                <div className="input-group d-flex justify-content-center">
                    <button type="button" className="btn purple-gradient text-white btn__RandomYmd-margin" onClick={this.onRandomYmd}>Random</button>
                </div>
            </div>
        )
    }
}

export default RandomYmd;