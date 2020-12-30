'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Actions = ({ getRepos, getStarred }) => {
    return (
        <div className="botoes">
            <button className="btn-repo" onClick={getRepos}>Ver Repositórios</button>
            <button className="btn-fav" onClick={getStarred}>Ver Favoritos</button>
        </div>
    )
}

Actions.propTypes = {
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}
  
export default Actions