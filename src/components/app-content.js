'use strict'

import React from 'react';
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({
    user,
    repos, 
    starred,
    getRepos, 
    getStarred 
}) => {
    return (
        <div className="container">
            <UserInfo user={user} />
            <Actions  getRepos={getRepos} getStarred={getStarred} />        
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
  
  export default AppContent