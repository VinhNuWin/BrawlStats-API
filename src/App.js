import React from "react";
import SearchBar from "./component/SearchBar";
import axios from 'axios';
import BrawlerDetail from './component/BrawlerDetail';
// import BrawlerList from './component/BrawlerList';

class App extends React.Component {
  state = { brawlers: '', selectedBrawler: null };

  componentDidMount() {
    this.onTermSubmit();
  }

  onTermSubmit = async term => {
    const response = await axios.get(`https://web-production-3295.up.railway.app/brawlers/${term}` , {
        params: {
            q: term
        }
    });

    console.log(response);

    this.setState({
      brawlers: response.data,
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
        <div class="bg-gradient-to-tr from-gray-900 to-gray-600 h-full w-full absolute">
          <img src ="https://prod.assets.earlygamecdn.com/images/AllBrawlers-Banner.jpg"
          className='w-full h-full object-cover absolute mix-blend-overlay'/>
        <BrawlerDetail brawler={this.state.brawlers} /> 
        </div>
        </div>
    );
  }
  }
  export default App;

          // src ="https://prod.assets.earlygamecdn.com/images/AllBrawlers-Banner.jpg"
        // class="object-cover absolute mix-blend-overlay h-96 w-full"/>