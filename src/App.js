import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
  connectStateResults
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  'P3I1RCM5CN',
  'a80be3f8bce5508e0cd9280c6d63cd79'
);

const Content = connectStateResults(
  ({ searchState }) =>
    searchState && searchState.query
      ? <div>
          The query {searchState.query} exists
        </div>
      : <div>No query</div>
);


class App extends Component {

  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>React InstantSearch e-commerce demo</h1>
        <InstantSearch indexName="mule_stores" searchClient={searchClient} >
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div hideResult={Content}>
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="address" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="city" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="state" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="store_hours" hit={props.hit} />
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
