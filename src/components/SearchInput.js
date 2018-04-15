import React from 'react';
import './searchinput.css';

class SearchInput extends React.Component {

  constructor(props){
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e){
    // console.log(e.target.value);
    this.props.printAction(e.target.value);
    // console.log(this.props.printAction);
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
