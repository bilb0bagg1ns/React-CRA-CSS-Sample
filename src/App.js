import React, { Component } from 'react';
import './App.css';
import Button from './Button.jsx';
import Button2 from './ButtonTwo.jsx';
import Footer from './Footer.jsx'
//import mystyles from './MyApp.css'; 
import styles from './Button.module.css'; // Import css modules stylesheet as styles


/**
 * https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet
 */
class App extends Component {

  myClick = () => {
    console.log ("clicked");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
          <button className={styles.error} onClick={this.myClick}>Error Button</button>;
            <Footer/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
