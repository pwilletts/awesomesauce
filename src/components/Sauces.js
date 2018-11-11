import React from 'react';
import SauceList from './SauceList';

class Sauces extends React.Component{
    onSelect = (e, sauce) => {
        this.props.history.push(`/detail/${sauce.name.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase()}`);
        this.setState({searchResults: null}, function(){
            document.getElementById('searchTerm').value = '';
        })
    }

    sortSauces(){
        if(!this.props.match.params.filter || this.props.match.params.filter === ('all'|| '')){
            return this.props.sauces.sort((a,b) => a.searchName > b.searchName)
        } else if (this.props.match.params.filter === 'popular') {
            return this.props.sauces.sort((a,b) => a.likes > b.like ? -1 :1).slice(0,10);
        }
    }

    changeFilter= (e) => {
        this.props.history.push(`/sauces/${e.target.value}`);
    }

    setText(){
        var filter = this.props.match.params.filter;
        if(filter === ('all' || '') || !filter){
            return 'popular'
        } else {
            return 'all'
        }
    }

    setHtml(){    
        return <div><h2>Popular Sauces</h2>
        <button value={this.setText()} onClick={(e) => this.changeFilter(e)}>View {this.setText()} sauces</button>
        <ul className="sauce-list" style={{textAlign: 'center', listStyleType: 'none'}}>
        {this.sortSauces().map(
                sauce => {
                    return(
                        <SauceList sauce={sauce} onSelect={this.onSelect.bind(this)}/>
                    )
                }
            )}
        </ul>      
    </div>         
    }

    render(){
        return(
                this.setHtml()
        )
    }
}

export default Sauces;