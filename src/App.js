import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import SidebarLeft from './components/SidebarLeft';
import firebase from 'firebase/app';
import 'firebase/database';

// Config firebase
const FirebaseConfig = require("./config/firebaseConfig.json");

import './App.css';
import './assets/lib/material-design-icons/css/material-design-iconic-font.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/js/app.js';

class App extends Component {

  constructor(props){
    super(props);
    firebase.initializeApp(FirebaseConfig);
  }
  render() {
    return (
        <div>
            <Header />
            <SidebarLeft />
            <Content db={firebase}/>
        </div>
    );
  }
}

export default App;
