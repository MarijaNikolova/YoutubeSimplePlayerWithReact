import React, { Component } from 'react';

class Search_bar extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={ this.state.term }
          onChange={ event => this.onInputChanged(event.target.value) }/>
      </div>
    );
  }

  onInputChanged(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default Search_bar;