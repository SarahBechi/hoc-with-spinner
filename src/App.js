import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import HOC from './components/Hoc';




function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}


export default HOC(App);





