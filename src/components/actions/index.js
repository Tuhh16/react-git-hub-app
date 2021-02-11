'use strict'

import React, { useContext } from 'react'
import { Context } from '../../context/gitHubSearch'



const Actions = () => {

    const { getRepos } = useContext(Context)

    return (
        <div className="botoes">
            <button className="btn-repo" onClick={() => getRepos('repos')}>Ver Repositórios</button>
            <button className="btn-fav" onClick={() => getRepos('starred')}>Ver Favoritos</button>
        </div>
    )
}

/*Actions.propTypes = {
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}*/

  
export default Actions