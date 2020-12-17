'use strict'

import React from 'react';

const Actions = ({ getRepos, getStarred }) => {
    return (
        <div className="botoes">
            <button className="btn-repo" onClick={getRepos}>Ver Repositórios</button>
            <button className="btn-fav" onClick={getStarred}>Ver Favoritos</button>
        </div>
    )
}
  
  export default Actions