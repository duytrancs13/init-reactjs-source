import React from 'react';
import './App.scss';
import routes from './routes';
import { BrowserRouter as Switch, Route } from 'react-router-dom'

function App() {
  const routeItems = routes.map((route, index) => {
    return <Route key={index} path={route.path} exact={route.exact} component={route.component} />
  })
  return (
    <div>
      <Switch>
        {routeItems}
      </Switch>
    </div>
  );
}

export default App;
