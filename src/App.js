'use strict'

import { hot } from 'react-hot-loader/root'
import axios from 'axios'
import React, { useState } from 'react'
import AppContent from './components/app-content'
import Header from './components/header'

const App = () => {

  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [starred, setStarred] = useState([])

  /*
  let getGit = getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }
  */

  async function handleSearch (e) { 
    let value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    
    if (keyCode === ENTER) {
        try {
          const result = await axios.get(`https://api.github.com/users/${value}`);
          const user = result.data
          
          setUser({
            username: user.name,
            photo: user.avatar_url,
            login: user.login,
            repos: user.public_repos,
            followers: user.followers,
            following: user.following  
          })

          setRepos([])
          setStarred([])
                
        } catch (error) {
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
        repos={repos}
        starred={starred}
        getRepos={() => getRepos('repos')}
        getStarred={() => getRepos('starred')}
      />
    </div>
  )

}

export default hot(App)