import React from 'react';
import './SearchBar.css';




class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {term: "", location: "", sortBy: "best_match"};

        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);

        this.sortByOptions = {
            "Best Match":'best_match',
            "Highest Rated": 'rating',
            "Most Reviewed": 'review_count' 
        };
    }

    getSortByClass(sortByOption){
        if (sortByOption === this.state.sortBy) {
            return 'active';
        } else {
            return '';
        }

    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption})
    }

    handleTermChange(e) {
        this.setState({term: e.target.value});
    }

    handleLocationChange(e) {
        this.setState({location: e.target.value});
    }

    renderSortByOptions(){
         return Object.keys(this.sortByOptions).map((sortByOption) => (
            <li key={this.sortByOptions[sortByOption]} className={this.getSortByClass(this.sortByOptions[sortByOption])}
             onClick={this.handleSortByChange.bind(this, this.sortByOptions[sortByOption])}>{sortByOption}</li>
            )
        )
    }
    

    

    render() {
        return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                <input placeholder="Where?" onChange={this.handleLocationChange}/>
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>)
    }
}

export default SearchBar;
