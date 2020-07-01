import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import routes from './config/routes'
import store from './config/store'

export class App extends React.Component {
  render () {
    return (
      <ReduxProvider store={ store }>
        <Router>
          <Switch>
            { routes.map(({ path, exact, component }) =>
              <Route exact={ exact } path={ path } key={ path }>
                { component }
              </Route>
            )}
          </Switch>
        </Router>
      </ReduxProvider>
    )
  }
}

export default App
