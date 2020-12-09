import { hot } from 'react-hot-loader/root'
import React from 'react'
import AppContent from './components/app-content'
import Header from './components/header'

const App = () => (
  <div>
    <Header />
    <AppContent />
  </div>
)

export default hot(App)