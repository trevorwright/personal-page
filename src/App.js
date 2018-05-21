import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
// eslint-disable-next-line
import { hot } from 'react-hot-loader'
// eslint-disable-next-line
import Routes from 'react-static-routes'

import { globalCss } from './styles'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ${globalCss}
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #1976d2;
    font-weight: bold;
    cursor: pointer;

    :hover {
      color: #2196f3;
      text-decoration: underline;
    }
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
