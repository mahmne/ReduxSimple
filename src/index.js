import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBOqJZ_gW4GX28gK7qn4_zk5HfUcC4OzOA';

// Create a new Componenet, This Component should produce some HTML
const App = () => {           // const App = function(){}  ES5
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this components generated HTML and put it in the page (in The DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
