import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <div>
                    Favorite Food: <FontAwesomeIcon icon="chevron-right" />
                </div>
                <h2>Popular Sauces</h2>
                <button id='viewAll' onClick={(e) => this.onSelect(e)}>View All</button>
                <ul className="scroll-list" style={{textAlign: 'center', listStyleType: 'none'}}>
                    {this.sortSauces().map(
                        sauce => {
                            return(
                                <li key={sauce.name} onClick={(e) => this.onSelect(e, sauce, 'ListItem')} className="short-list" style={{backgroundImage: `url(${sauce.image})`}}>
									<p><strong>{sauce.name}</strong></p>
								</li>
                            )
                        }
                    )}
                </ul>
            </div>
        )
    }
}

export default PopularSauces