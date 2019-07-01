import React, { Component } from 'react';
import Header from './components/Header';
import RandomYmd from './components/RandomYmd';
import RandomString from './components/RandomString';
import TextArea from './components/TextArea';
import { ToastContainer, toast } from 'react-toastify';
import { Flip } from 'react-toastify';


class App extends Component {
    constructor() {
        super();
        this.state = {
            feature: [
                { "name": "Tool Random", "isActive": true, "bgColor": "bg-danger" },
                { "name": "Random String", "isActive": false, "bgColor": "blue-gradient" },
                { "name": "Random Year-Month-Day", "isActive": false, "bgColor": "purple-gradient" },
            ],
            result: ''
        }
        this.onChangeHeader = this.onChangeHeader.bind(this);
        this.onRandom = this.onRandom.bind(this);
        this.onNotifySuccess = this.onNotifySuccess.bind(this);
        this.onNotifyFail = this.onNotifyFail.bind(this);
    }

    onChangeHeader(item) {
        const { feature } = this.state;
        const index = feature.indexOf(item);
        let state = feature;
        state.map((item) => item.isActive = false)
        state[index].isActive = true;
        this.setState({
            feature: feature
        });
    }

    onRandom(result) {
        this.setState({ result: result });
    }

    onNotifySuccess() {
        return toast.success('🦄 Random Complete!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'rotateY animated'
        });
    }

    onNotifyFail() {
        return toast.error('🦄 Random Fail!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'rotateY animated'
        });
    }

    render() {
        let getFeature = this.state.feature.filter((item) => item.isActive === true);
        return (
            <div className="App">
                {
                    getFeature.map((item, index) =>
                        <Header
                            feature={item}
                            key={index}
                        />)
                }

                <div className="container-fluid mt-4 content__height">
                    <div className="row d-flex justify-content-center h-100">
                        <RandomString
                            onRandom={this.onRandom}
                            onChangeHeader={this.onChangeHeader}
                            header={this.state.feature}
                            onNotifySuccess={this.onNotifySuccess}
                            onNotifyFail={this.onNotifyFail}
                        />
                        {
                            getFeature.map((item, index) =>
                                <TextArea
                                    key={index}
                                    result={this.state.result}
                                    onRandom={this.onRandom}
                                    header={item}
                                />)
                        }

                        <RandomYmd
                            onRandom={this.onRandom}
                            onChangeHeader={this.onChangeHeader}
                            header={this.state.feature}
                            onNotifySuccess={this.onNotifySuccess}
                            onNotifyFail={this.onNotifyFail}
                        />

                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar
                            newestOnTop
                            closeOnClick
                            rtl={false}
                            pauseOnVisibilityChange={false}
                            draggable={false}
                            pauseOnHover
                            transition={Flip}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
