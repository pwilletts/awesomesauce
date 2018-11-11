import React from 'react';
import SauceList from './SauceList';

class Search extends React.Component{
    state = {
        searchResults: null
    }

    onSearch = (e) => {
        if(e.target.value !== ""){
            this.setState({searchResults: this.search(e.target.value)}, function(){
                console.log(this.state.searchResults);
            })
        } else {
            this.setState({searchResults: null}, function(){
                console.log(this.state.searchResults)
            })
        }
    }

    search = (term) => {
        return this.props.sauces.filter(function(name){
            return name.name.toUpperCase().includes(term.toUpperCase())
        })
    }

    onSelect = (e, sauce) => {
        this.props.history.push(`/detail/${sauce.name.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase()}`);
        this.setState({searchResults: null}, function(){
            document.getElementById('searchTerm').value = '';
        })
    }

    render(){
        return(
            <div className="search">
				<label>Search Sauces</label>
                <input id="searchTerm" onChange={this.onSearch.bind(this)}/>
				{this.state.searchResults ? this.state.searchResults.sort((a, b) => a.likes > b.likes ? -1 : 1).map(
					sauce => {
						return (
							<SauceList
								history={this.props.history}
								sauce={sauce}
                                text={"Search Results"}
                                onSelect={this.onSelect.bind(this)}
                            />
						)
					}
				): ""}
			</div>
        )
    }
}

export default Search;