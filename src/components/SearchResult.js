import React from 'react';
import './searchresult.css';

class SearchResult extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      repos: []
    }
  }

  componentWillReceiveProps(nextProps, prevState){
    console.log('receiving props');
  }

  render() {
    console.log(this.props);
    return (
      <div className="searchresult-component">
        Works
      </div>
    );
  }
}

SearchResult.displayName = 'SearchResult';
SearchResult.propTypes = {};
SearchResult.defaultProps = {};

export default SearchResult;
