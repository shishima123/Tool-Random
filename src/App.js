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
        { "name": "Random String", "isActive": true, "bgColor": "bg-primary", "textColor": "text-primary" },
        { "name": "Random Ymd", "isActive": false, "bgColor": "bg-success", "textColor": "text-success" },
      ],
      result: ''
    }
    this.onClickFeature = this.onClickFeature.bind(this);
    this.onRandom = this.onRandom.bind(this);
  }

  onClickFeature(item) {
    return () => {
      const { feature } = this.state;
      const index = feature.indexOf(item);
      let state = feature;
      state.map((item) => item.isActive = false)
      state[index].isActive = true;
      this.setState({
        feature: feature
      });
    }
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

        <div className="container-fluid mt-4">
          <div className="row d-flex justify-content-center">
            <RandomString onRandom={this.onRandom} />
            <TextArea
              result={this.state.result}
              onRandom={this.onRandom} />
            <RandomYmd onRandom={this.onRandom} />
          </div>
        </div>

      </div>
    )
  }
}

export default App;
