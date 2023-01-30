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
        <div className="flex justify-between py-3 px-6 bg-gray-50 border-b">
            <form onSubmit={this.onFormSubmit} className="w-full max-w-md">
                <div >
                    <label>Search Icon</label>
                    <input 
                    type="text" 
                    value={this.state.term}
                    placeholder="Search Brawler"
                    onChange={e => this.setState({ term: e.target.value })}
                    className="w-full pr-5 pl-10 px-3 py-2 font-normal placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
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