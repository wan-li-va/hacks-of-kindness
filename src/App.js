import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';

import Home from './components/Home';
import View from './components/View';

const firebaseConfig = {
  apiKey: 'AIzaSyCblFEhn6FKGMYSaBeKLWLiojJaqxRABpI',
  authDomain: 'wics-app-8c601.firebaseapp.com',
  databaseURL: 'https://wics-app-8c601.firebaseio.com',
  projectId: 'wics-app-8c601',
  storageBucket: 'wics-app-8c601.appspot.com',
  messagingSenderId: '1042898649667',
  appId: '1:1042898649667:web:59908e029a4591ec7ccaf6',
  measurementId: 'G-5F3SMMMTJ3',
};

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Router>
        <Switch>
          <Route path='/view/:id'>
            <View />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </FirebaseAppProvider>
  );
}

export default App;
