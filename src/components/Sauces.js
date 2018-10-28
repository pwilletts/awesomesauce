import React from 'react';
import SauceList from './SauceList';

class Sauces extends React.Component{
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
                        <SauceList sauce={sauce}/>
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