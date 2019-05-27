import React, { Component } from "react";
import "./component.css";

class Header extends Component {
    render() {
        const { feature } = this.props;
        let className = "container-fluid header-height content__shadow " + feature.bgColor;
        let headerName = feature.name;
        return (
            <div className={className}>
                <div className="row h-100">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <h2 className="m-0 font-weight-bold">{headerName}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;