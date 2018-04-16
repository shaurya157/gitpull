import React from 'react';
import YeomanImage from './YeomanImage';
import SearchResult from './searchresult';
import SearchInput from './searchinput';
import './app.css';

class AppComponent extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="index">
        <SearchInput seachGithub={this.props.actions.search}>
        </SearchInput>
        <SearchResult className="notice"
        searchResults={this.props.search}>

        </SearchResult>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
