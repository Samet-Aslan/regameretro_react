import React from 'react';

class Nav extends React.Component{

    render(){
        return(
            <li>{this.props.name}</li>           
        );
    }

}
export default Nav;
