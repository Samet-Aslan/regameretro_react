import React from 'react';
import 'bulma/css/bulma.min.css';
import { Navbar } from 'react-bulma-components';


class Nav extends React.Component{

    render(){
        return(
            <div>
                <Navbar.Item>{this.props.name}</Navbar.Item>
            </div>
            
        );
    }

}
export default Nav;
