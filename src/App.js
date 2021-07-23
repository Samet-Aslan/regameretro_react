import './App.css';
import React from 'react';
import Nav from './components/Nav';
import ProductSection from './components/ProductSection';
import 'bulma/css/bulma.min.css';
import { Navbar } from 'react-bulma-components';


let navitems = [
  {name: "Home"},
  {name: "GB Classic"},
  {name: "GB Color"},
  {name: "GB Advance"},
  {name: "GB Advance SP"}
];

let sectionitems = [
  {headline: "GB Classic", image: "url"},
  {headline: "GB Color", image: "url"},
  {headline: "GB Advance", image: "url"},
  {headline: "GB Advance SP", image: "url"}
];

class App extends React.Component {
    render(){

      let navigation = [];
      let section = [];
      
      navitems.forEach(function(item){
          navigation.push(
            <Nav name={item.name}/>
          )
      });

      sectionitems.forEach(function(item){
        section.push(
          <ProductSection headline={item.headline}/>
        )
    });

      return (
        <div className="App">
          {/* Section with Logo */}
          {/* NavBar*/}
          <Navbar>
              {navigation}
          </Navbar>
          {/* Items as Sections with Content - Image, Button, Text */}
          {section}
          {/* Footer */}
        </div>
       
      );    
    } 
}

export default App;
