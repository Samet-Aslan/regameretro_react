import React from 'react';

class Section extends React.Component{

    render(){
        return(

            <div class="section">
            <div class="gbcolor" id="gbcolor">
                <div class="infobox-right">
                    <h2 class="headline">{this.props.name}</h2>
                    <div class="buttons">
                        <input type="button" value="JETZT KAUFEN" name="GB COLOR" onClick="go(event);"/>
                    </div>
                </div>
            </div>
        </div>

        );
    }

}
export default Section;