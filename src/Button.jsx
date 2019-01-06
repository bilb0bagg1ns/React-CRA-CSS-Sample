
import React, { Component } from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles
//import anotherStyles from './another-stylesheet.css'; // Import regular stylesheet

class Button extends Component {
  render() {
    // reference as a js object
    return (
        <div className="container">
           <button className={styles.error}>Error Button</button>;
        </div>
    )
  }
}

export default Button;