import React, { useState } from 'react';
import MovieList from './components/movielist';;
import Filter from './components/filter';
import MovieDetails from './components/moviedetails';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'expendables',
      description: 'action movie1',
      posterURL: './exp.jpeg',
      rating: 4.5,
      trailerLink:'https://www.youtube.com/watch?v=DhlaBO-SwVE'
    },
    {
      id: 2,
      title: 'scream',
      description: 'horror movie',
      posterURL: './scream.jpeg',
      rating: 3.8,
      trailerLink:'https://www.youtube.com/watch?v=beToTslH17s'
    },
    // Add more movies as needed
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= parseFloat(rateFilter)
  );

  return (
    <Router>
      <div className="app">
        <h1>Movie List</h1>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetails movies={movies} />
          </Route>
          <Route path="/">
            <Filter
              title={titleFilter}
              rate={rateFilter}
              onTitleChange={setTitleFilter}
              onRateChange={setRateFilter}
            />
            <MovieList movies={filteredMovies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;