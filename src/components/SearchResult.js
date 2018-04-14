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
    debugger
  }

  render() {
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
