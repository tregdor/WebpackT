import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MovieCard } from '../MovieCard/MovieCard';
import { MoviesList } from '../MoviesList';

const data = {
  id: 337167,
  title: 'Fifty Shades Freed',
  tagline: "Don't miss the climax",
  vote_average: 6.1,
  vote_count: 1195,
  release_date: '2018-02-07',
  poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
  overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable ' +
      'connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, ' +
      'new threats could jeopardize their happy ending before it even begins.',
  budget: 55000000,
  revenue: 136906000,
  genres: [
    'Drama',
    'Romance',
  ],
  runtime: 106,
};

it('should render movie card', () => {
  const component = shallow(<MovieCard movie={data} />);
  expect(toJson(component)).toMatchSnapshot();
});
it('should render movie list', () => {
  const component = shallow(<MoviesList sortFilter="rating" movies={[data, data]} />);
  expect(toJson(component)).toMatchSnapshot();
});
it('should render 2 movie', () => {

});
