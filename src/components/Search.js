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

    render(){
        return(
            <div className="search">
				<label>Search Sauces</label>
                <input onChange={this.onSearch.bind(this)}/>
				{this.state.searchResults ? this.state.searchResults.sort((a, b) => a.likes > b.likes ? -1 : 1).map(
					sauce => {
						return (
							<SauceList
								history={this.props.history}
								sauce={sauce}
								text={"Search Results"}
                            />
						)
					}
				): ""}
			</div>
        )
    }
}

export default Search;