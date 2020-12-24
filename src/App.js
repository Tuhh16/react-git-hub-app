'use strict'

import { hot } from 'react-hot-loader/root'
import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import AppContent from './components/app-content'
import Header from './components/header'

const App = () => {
  
  const [user, setUser] = useState([])
  const [repos, setRepos] = useState([])
  const [starred, setStarred] = useState([])
  const [userShow, setUserShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  
  /*
  https://api.github.com/users/Tuhh16
  let getGit = getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }
  */

  function WaitTowSeconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(axios.get(x))
      }, 2000)
    })
  }
  
  async function handleSearch (e) { 
    let value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
        setLoading(true)
        setError(false)
        setUserShow(false)
        setUser([])
        setRepos([])
        setStarred([])
        try {
          const result = await axios.get(`https://api.github.com/users/${value}`);    
          const user = await result.data
          setLoading(false)
          setUser({
            username: user.name,
            photo: user.avatar_url,
            login: user.login,
            repos: user.public_repos,
            followers: user.followers,
            following: user.following  
          })

          setUserShow(true)
          
                
        } catch (error) {
          setLoading(false)
          setError(true)
          console.error(error);
        }
    }

  }

  async function getRepos (type) {
      const username = user.login
      const Type = type == 'repos' ? setRepos : setStarred
      
      const result = await axios.get(`https://api.github.com/users/${username}/${type}`);
      const resultFilter = result.data
      
      Type(
        resultFilter.map((repo) => ({
          name: repo.name,
          link: repo.html_url
        }))
      )
  }

  return (
    <div>
      <Header handleSearch={handleSearch} />
      <AppContent 
        user={user}
        userShow={userShow}
        loading={loading}
        error={error}
        repos={repos}
        starred={starred}
        getRepos={() => getRepos('repos')}
        getStarred={() => getRepos('starred')}
      />
    </div>
  )

}

export default hot(App)