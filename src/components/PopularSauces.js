import React from 'react';

class PopularSauces extends React.Component{
    state = {
        
    }

    sortSauces(){
        return this.props.sauces.sort((a,b) => a.likes > b.like ? -1 :1).slice(0,10);
    }

    render(){
        return(
            <div>
                <h2>Popular Sauces</h2>
                <ul className="sauce-list" style={{textAlign: 'center', listStyleType: 'none'}}>
                    {this.sortSauces().map(
                        sauce => {
                            return(
                                <li key={sauce.name} style={{backgroundImage: `url(${sauce.image})`}} className="short-list">
									<div className="aligner">
										<p><strong>{sauce.name}</strong></p>
									</div>
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