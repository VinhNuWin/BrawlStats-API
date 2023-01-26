import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState = ({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };


    render() {
        return (
        <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Brawler Search</label>
                    <input 
                    type="text" 
                    value={this.state.term}
                    onChange={e => this.setState({ term: e.target.value })}
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;















// import React from 'react';

// class SearchBar extends React.Component {
//     state = {term:''};

// onInputChange = event => {
//     this.setState({ term: event.target.value });
// };

// onFormSubmit = event => {
//     event.preventDefault();

//     this.props.onFormSubmit(this.state.term);
// };

// render(){
//     return (
//         <div>
//             <form onSubmit={this.onFormSubmit}>
//                 <input 
//                     type="text"
//                     value={this.state.term} 
//                     onChange={this.onInputChange}
//                     />
//             </form>
//         </div>
//     );
// }
// }

// export default SearchBar;