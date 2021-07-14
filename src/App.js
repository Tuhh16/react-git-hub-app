'use strict'

import { hot } from 'react-hot-loader/root'
import React from 'react'
import AppContent from './components/app-content'
import Header from './components/header/'
import { GitHubSearch } from './context/gitHubSearch'

const App = () => {
  return (
    <div>
      <GitHubSearch>
        <Header />
        <AppContent/>
      </GitHubSearch>
    </div>
  )
}

export default hot(App)