import React, { Component } from 'react';
import Header from './components/Header';
import RandomYmd from './components/RandomYmd';
import RandomString from './components/RandomString';
import TextArea from './components/TextArea';


class App extends Component {
  constructor() {
    super();
    this.state = {
      feature: [
        { "name": "Tool Random", "isActive": true, "bgColor": "bg-danger" },
        { "name": "Random String", "isActive": false, "bgColor": "bg-primary" },
        { "name": "Random Year-Month-Day", "isActive": false, "bgColor": "bg-success" },
      ],
      result: ''
    }
    this.onChangeHeader = this.onChangeHeader.bind(this);
    this.onRandom = this.onRandom.bind(this);
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

  render() {
    return (
      <div className="App">
        {
          this.state.feature.filter((item) => item.isActive === true).map((item, index) => <Header feature={item} key={index} />)
        }

        <div className="container-fluid mt-4 content__height">
          <div className="row d-flex justify-content-center h-100">
            <RandomString onRandom={this.onRandom} onChangeHeader={this.onChangeHeader} header={this.state.feature} />
            <TextArea
              result={this.state.result}
              onRandom={this.onRandom} />
            <RandomYmd onRandom={this.onRandom} onChangeHeader={this.onChangeHeader} header={this.state.feature} />
          </div>
        </div>

      </div>
    )
  }
}

export default App;
