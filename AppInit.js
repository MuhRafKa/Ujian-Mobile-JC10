import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import MainStack from './src/components/MainStack';
import { connect } from 'react-redux';
import { alreadyLogin, notLoginYet } from './src/actions';

class AppInit extends Component {
  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAdOfxYLcCJ0QVnoHBTBD_JwaP-lBaT6hY",
      authDomain: "instagrin-jc-10.firebaseapp.com",
      databaseURL: "https://instagrin-jc-10.firebaseio.com",
      projectId: "instagrin-jc-10",
      storageBucket: "instagrin-jc-10.appspot.com",
      messagingSenderId: "882545090312",
      appId: "1:882545090312:web:e341471b33fae7483e96bd"
    };
    // Initialize Firebase
    //console.log('Isi Firebase Apps', firebase.apps)
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.props.alreadyLogin(user);
        } else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return (
      <MainStack />
    )
  }
}

export default connect(null, { notLoginYet, alreadyLogin })(AppInit);