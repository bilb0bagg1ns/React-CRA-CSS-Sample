import React, { Component } from 'react';
import styles from './Button.module.css';

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <footer id="myFooter" style={{ position: "relative", zIndex: "0" }}>
           <div
              className={[styles.w3row, styles.w3padding12].join(" ")}>        
              <div
                  className={[styles.w3container, styles.w3garrus].join(" ")}>
                  <p className={[styles.w3textwhite]}>
                    Colorado Secretary of State | 1700 Broadway, Suite 200,
                    Denver CO 80290 |{" "}
                    <a href="tel:303-894-2200" style={{ color: "#fff" }}>
                      303-894-2200
                    </a>
                  </p>
              </div>
              <div
                  className={[
                    styles.w3container,
                    styles.w3black,
                    styles.w3hidesmall].join(" ")}>
                    <p className={styles.w3medium}>
                        <a
                          className={[
                            styles.w3textwhite,
                            styles.w3hovertextwheatley].join(" ")}
                          href="  https://www.sos.state.co.us/pubs/info_center/terms.html">
                          Terms &amp; conditions
                        </a>{" "}
                        |
                        <a
                          className={[
                            styles.w3textwhite,
                            styles.w3hovertextwheatley].join(" ")}
                          href="https://www.sos.state.co.us/pubs/info_center/compatibility.html">
                          Browser compatibility
                        </a>
                      </p>   
              </div>       
          </div>       
        </footer>
     </div>
    )
  }
}

export default Footer;