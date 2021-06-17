import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './Nav';
import Section from './Section';

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
          <Section name={item.headline}/>
        )
    });

      return (
        <div className="App">
          <header className="App-header">
            <ul>
              {navigation}
            </ul>   
          </header>
          <body>
              {section}
          </body>
        </div>
       
      );    
    } 
}

export default App;
