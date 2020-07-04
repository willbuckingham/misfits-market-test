import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'

import routes from './config/routes'
import store from './config/store'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#B0C472',
    },
    secondary: {
      main: '#F1C34B',
    },
  },
  typography: {
    body1: {
      lineHeight: 1.2,
    },
    h6: {
      lineHeight: 1.2,
    },
  },
})

export class App extends React.Component {
  render () {
    return (
      <ReduxProvider store={ store }>
        <ThemeProvider theme={ theme }>
          <Router>
            <Switch>
              { routes.map(({ path, exact, component }) =>
                <Route exact={ exact } path={ path } key={ path }>
                  { component }
                </Route>
              )}
            </Switch>
          </Router>
        </ThemeProvider>
      </ReduxProvider>
    )
  }
}

export default App
