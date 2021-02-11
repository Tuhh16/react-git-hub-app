import { useState } from 'react'
import axios from 'axios'

const useGit = () => {
    const [user, setUser] = useState([])
    const [repos, setRepos] = useState([])
    const [starred, setStarred] = useState([])
    const [userShow, setUserShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    function getGitHubApiUrl (username, type) {
      const internalUser = username ? `/${username}` : ''
      const internalType = type ? `/${type}` : ''
      return `https://api.github.com/users${internalUser}${internalType}`
    }
   
    async function handleSearch (e) { 
      let value = e.target.value
      const keyCode = e.which || e.keyCode
      const ENTER = 13
      if (keyCode === ENTER && value != '') {
          setLoading(true)
          setError(false)
          setUserShow(false)
          setUser([])
          setRepos([])
          setStarred([])
          try {
            const result = await axios.get(getGitHubApiUrl(value));    
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
        const result = await axios.get(getGitHubApiUrl(username, type));
        const resultFilter = result.data
       
        Type(
          resultFilter.map((repo) => ({
            name: repo.name,
            link: repo.html_url
          }))
        )
    }

    return { user, repos, starred, userShow, loading, error, handleSearch, getRepos }

}

export default useGit