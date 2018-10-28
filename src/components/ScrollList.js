import React from 'react';

class PopularSauces extends React.Component{
    sortSauces(){
        return this.props.sauces.sort((a,b) => a.likes > b.like ? -1 :1).slice(0,10);
    }

    onSelect = (e, sauce, context) => {
        if(e.target.id === 'viewAll'){
            this.props.history.push(`/popular`);
        } else if (context === 'ListItem') {
            this.props.history.push(`/detail/${sauce.searchName.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase()}`);
        }       
    }

    render(){
        return(
            <div>
                <h2>Popular Sauces</h2>
                <ul className="scroll-list what-is-this" style={{textAlign: 'center', listStyleType: 'none'}}>
                    {this.sortSauces().map(
                        sauce => {
                            return(
                                <li key={sauce.name} onClick={(e) => this.onSelect(e, sauce, 'ListItem')} className="short-list">
									<p><strong>{sauce.name}</strong></p>
								</li>
                            )
                        }
                    )}
                </ul>
                <button id='viewAll' onClick={(e) => this.onSelect(e)}>View All</button>
            </div>
        )
    }
}

export default PopularSauces