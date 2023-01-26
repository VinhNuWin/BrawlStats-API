import React from "react";
import youtube from "./apis/youtube";
import SearchBar from "./component/SearchBar";
import axios from 'axios';
import BrawlerDetail from './component/BrawlerDetail';

class App extends React.Component {
  state = { brawlers: null, selectedBrawler: null };

  componentDidMount() {
    this.onTermSubmit();

    // console.log()
  }

  // onTermSubmit = async term => {
  //   const response = await youtube.get('/search', {
  //       params: {
  //           q: term
  //       }
  //   });
  onTermSubmit = async term => {
    const response = await axios.get(`https://web-production-3295.up.railway.app/brawlers/${term}` , {
        params: {
            q: term
        }
    });

    console.log(response);

    this.setState({
      brawlers: response.data.items,
      // selectedBrawler: response.data.items[0]
    });
  };

// onBrawlerSelect = brawler => {
//   this.setState({ selectedBrawler: brawler });
// };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onTermSubmit} />
        <div>
        <BrawlerDetail brawler={this.state.brawlers} /> 
        </div>
      </div>
    );
  }
  }
  export default App;
