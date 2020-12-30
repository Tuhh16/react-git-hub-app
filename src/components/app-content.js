'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import LoadingGif from '../imgs/loading.gif'

const AppContent = ({
    user,
    userShow,
    loading,
    error,
    repos, 
    starred,
    getRepos, 
    getStarred 
}) => {
    return (
        <div className="container">
            
            {loading && <img src={LoadingGif} alt="loading..." className="loading" /> }
            
            {error && 
                <div className="error"> 
                    <p>Nenhum usuários encontrado</p>
                </div> }

            {!!userShow &&
                <UserInfo user={user} />
            }
            {!!userShow &&
                <Actions getRepos={getRepos} getStarred={getStarred}  />        
            }

            <div className="row">   
                {!!repos.length &&            
                    <Repos 
                        className='repositorios col-xs-12-12 col-md-6-12' 
                        title='Repositórios' 
                        repos={repos}
                    />
                }
                {!!starred.length && 
                    <Repos 
                        className='favoritos col-xs-12-12 col-md-6-12' 
                        title='Favoritos' 
                        repos={starred}
                    />
                }
            </div>
            
        </div>
    )
}

AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    getRepos: PropTypes.func.isRequired, 
    getStarred: PropTypes.func.isRequired 
}

export default AppContent