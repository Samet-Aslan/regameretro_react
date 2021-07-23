import React from 'react';
import 'bulma/css/bulma.min.css'
import { Columns, Container, Section, Notification } from 'react-bulma-components';

class ProductSection extends React.Component{

    render(){
        return(
            <Container>
                <Columns>
                    <Columns.Column>
                        <p class="title is-3">{this.props.headline}</p>                     
                    </Columns.Column>
                    <Columns.Column>
                    </Columns.Column>
                </Columns>
            </Container>
        );
    }

}
export default ProductSection;