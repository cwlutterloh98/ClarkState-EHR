import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../pages/Home'
import DailyCare from '../pages/Daily-Care'

const patientRoutes = () => (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/daily-care" component={DailyCare}/>
    </Switch>
);

export default patientRoutes;