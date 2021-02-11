'use strict'

import React, { useContext } from 'react'
import UserInfo from '../user-info/'
import Actions from '../actions/'
import Repos from '../repos/'
import LoadingGif from '../../imgs/loading.gif'
import { Context } from '../../context/gitHubSearch'

const AppContent = () => {

    const {
        user,
        userShow,
        loading,
        error,
        repos, 
        starred
    } = useContext(Context)

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
            
                <Actions />        
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

export default AppContent