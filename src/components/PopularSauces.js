import React from 'react';
import SauceList from './SauceList';

class PopularSauces extends React.Component{
    sortSauces(){
        return this.props.sauces.sort((a,b) => a.likes > b.like ? -1 :1).slice(0,10);
    }

    render(){
        return(
            <div>
                <h2>Here are our most popular sauces!</h2>
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
            
        )
    }
}

export default PopularSauces;