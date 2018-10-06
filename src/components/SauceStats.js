import React from 'react';

class SauceStats extends React.Component{
    setDetailHtml(){       
        return <ul className="grid-x grid-margin-x">
            <li className="cell small-4 rating">
                {this.props.statNumbers.rating}
                <span>Rating</span>
            </li>
            <li className={`cell small-4 heat-index hi-${this.calcHeatIndex()}`}>Heat Index: {this.props.statNumbers.heatIndex}</li>
            <li className="cell small-4 likes">
                <button>UP:</button> {this.props.sauceLikes}
                <button>DOWN:</button> {this.props.sauceDislikes}
            </li>
        </ul>
    }

    calcHeatIndex(){
        return Math.floor(Math.round(this.props.statNumbers.heatIndex *1000)/1000)
    }

    render(){        
        return(
            <div>
                {this.setDetailHtml()}
            </div>
        )
    }
}

export default SauceStats;