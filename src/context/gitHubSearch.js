'use stric'

import React, { createContext } from 'react'

import useGit from './hooks/useGit'

const Context = createContext()

const GitHubSearch = ({ children }) => {

   const { user, repos, starred, userShow, loading, error, getGitHubApiUrl, handleSearch, getRepos } = useGit()

    return (
        <Context.Provider
           value={{ user, repos, starred, userShow, loading, error, getGitHubApiUrl, handleSearch, getRepos }} 
        >
            {children}
        </Context.Provider>
    )
}

export { Context, GitHubSearch }