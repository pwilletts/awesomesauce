import React from 'react';

class AppHeader extends React.Component{
    render(){
        return(
        <header>
            <h1>Awesome Sauce.<span>App</span></h1>
            {!this.props.user ? <h4><a href="/login">Login</a></h4> : `Welcome ${this.props.user.displayName}`}
        </header>
        )
    }
}

export default AppHeader;