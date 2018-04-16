import React from 'react';
import './searchinput.css';

class SearchInput extends React.Component {

  constructor(props){
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.searchString = ""
  }

  handleKeyPress(e){
    // console.log(e.target.value);
    this.searchString = e.target.value;
    let string = e.target.value;
    setTimeout(function(){
      if(string === this.searchString){
        fetch(`https://api.github.com/search/repositories?q=${this.searchString}&per_page=100`).then(response => {
          return response.json();
        }).then(result => {
          this.props.seachGithub(result.items);
        })
      }
    }.bind(this), 1000)
  }

  render() {
    return (
      <div className="searchinput-component">
        <input onKeyUp={this.handleKeyPress} />
      </div>
    );
  }
}

SearchInput.displayName = 'SearchInput';
SearchInput.propTypes = {};
SearchInput.defaultProps = {};

export default SearchInput;
