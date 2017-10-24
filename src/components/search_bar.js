import React, { Component } from 'react';

class SearchBar extends Component {    // class based

  constructor (props) {
    super(props);

    this.state = { term: '' };
  }

  render () {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;

                                                          // ES6
// render () {                                             // render(){
//  return <input onChange={this.onInputChange} />;       //    render(){
// }                                                       //       return <input onChange={event => console.log(event.target.value)}
//                                                        //    }
// onInputChange (event) {                                 // }
//  console.log(event.target.value);                      //
// }                                                       //

// const SearchBar = () => {       //method based
//   return <input />;
// };
