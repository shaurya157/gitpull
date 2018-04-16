import React from 'react';
import './searchresult.css';

class SearchResult extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      repos: [{name: 'fun'}, {name: 'cool'}]
    }

    this.listRepos = this.listRepos.bind(this);
  }

  componentWillReceiveProps(nextProps, prevState){
    this.setState({repos: nextProps.searchResults.repos});
  }

  listRepos(){
    return this.state.repos.map((repo, index) => {
      return (
        <li key={index}><a href={repo.html_url} target="_blank">{repo.name}</a></li>
      )
    })
  }

  render() {
    console.log(this.props);
    return (
      <div className="searchresult-component">
        <ul>
          {this.listRepos()}
        </ul>
      </div>
    );
  }
}

SearchResult.displayName = 'SearchResult';
SearchResult.propTypes = {};
SearchResult.defaultProps = {};

export default SearchResult;
