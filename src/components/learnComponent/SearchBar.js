import React from 'react';
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: " ",
            sortBy : 'HTML'
        };
        this.sortByOptions = {
            'HTML' : 'HTML',
            'CSS' : 'CSS',
            'JavaScript' : 'JavaScript'
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption) {
        if(this.state.sortBy === sortByOption){
          return 'active'
        }else {
          return ' '
        }
    }

    handleSortByChange(sortByOption) {
      this.setState({ sortBy : sortByOption });
    }

    handleTermChange(event) {
      this.setState({ term: event.target.value });
    }


    handleSearch(event) {
      this.props.searchTerm(this.state.term, this.state.sortBy);
      event.preventDefault();
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <h1 className="section-title">Coding Skills</h1>
                <div class="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Skill" />
                </div>
                <div class="submit button primary-button">
                    <a onClick={this.handleSearch}>Let's Learn</a>
                </div>
            </div>
        )
    }
}

export default SearchBar; 