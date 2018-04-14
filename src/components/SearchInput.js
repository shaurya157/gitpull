import React from 'react';
import './searchinput.css';

class SearchInput extends React.Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.printAction('fun');
    // console.log(this.props.printAction);
  }

  render() {
    return (
      <div className="searchinput-component">
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

SearchInput.displayName = 'SearchInput';
SearchInput.propTypes = {};
SearchInput.defaultProps = {};

export default SearchInput;
