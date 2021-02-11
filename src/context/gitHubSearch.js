'use stric'

import React, { createContext } from 'react'

import userGit from './hooks/userGit'

const Context = createContext()

const GitHubSearch = ({ children }) => {

   const { user, repos, starred, userShow, loading, error, getGitHubApiUrl, handleSearch, getRepos } = userGit()

    return (
        <Context.Provider
           value={{ user, repos, starred, userShow, loading, error, getGitHubApiUrl, handleSearch, getRepos }} 
        >
            {children}
        </Context.Provider>
    )
}

export { Context, GitHubSearch }