import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Auth from '../modules/Auth';

import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
// import FaBeer from 'react-icons/fa/beer';
// import mui from 'material-ui';
// import AlarmIcon from 'react-material-icons/icons/action/alarm';
// {<img src="../images/parking.jpg"/>}
const styles = {
  title: {
    cursor: 'pointer',
  },
  appBarstyle: {
    background:'#002e6d',
  },
  a : {
    padding:'10px',
  },
  // icon:{
  //   fontSize:'150%',
  //   color:'white',
  //   width:50,
  //   marginTop:'10px',
  // }
};
const Base = ({ children }) => (
  <div>
  <AppBar
      title={<Link to="/Home"><a className="mdi mdi-car-connected mdi-36px mdi-light">Parking App</a></Link>}
      showMenuIconButton = {false}
      style={styles.appBarstyle}
      iconElementRight = {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout"><a className="mdi mdi-login mdi-24px mdi-light" style={styles.a}>Logout</a></Link>
          <Link to="/booking"><a className="mdi mdi-library-books mdi-24px mdi-light" style={styles.a}>BookingDetails</a></Link>
        </div>

      ) : (

        <div className="top-bar-right">
          <Link to="/login"><a className="mdi mdi-login-variant mdi-24px mdi-light" style={styles.a}>Login</a></Link>
          <Link to="/signup"><a className="mdi mdi-account mdi-24px mdi-light" style={styles.a}>SignUp</a></Link>
        </div>
      )}
/>


    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
