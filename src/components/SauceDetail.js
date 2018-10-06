import React from 'react';
import SauceStats from './SauceStats';

class SauceDetail extends React.Component{
    getSauceDetails(){
        return this.props.sauces.find(a => a.searchName.replace(/[^\w\s]/gi, '').toUpperCase() === this.props.match.params.sauceName.replace(/-/gi, ' ').toUpperCase())
    }

    formDetailHtml(){
        var sauce = this.getSauceDetails();
        return <div>
            <div className="cell medium-3"> 
                <img src={sauce.image} alt={sauce.name} style={{maxHeight: '400px', textAlign: 'center'}}/> 
            </div> 
            <div className="cell medium-9"> 
                <h3>{sauce.manufacturer}</h3> 
                <h1>{sauce.name}</h1> 
                <h4>{sauce.peppers.join(', ')}</h4>
                <SauceStats statNumbers={sauce} /> 
                <p>{sauce.description}</p> 
            </div> 
        </div>
    }

    render(){
        return(
            <div id="sauce-detail" className="grid-container">
                {this.formDetailHtml()}
            </div>
        )
    }
}

export default SauceDetail;