'use strict'

import React, { useContext } from 'react';
import { Context } from '../../context/gitHubSearch'

const UserInfo = () => {
    const { user } = useContext(Context)
    let userinfo = user
    return (
        <div className="perfil">
            <div className="imagem-perfil">
                <img src={userinfo.photo} width="200" width="200"/>
            </div>
            <div className="informacoes">
                <a href="#" className="user-link"><h2>{userinfo.login}</h2></a>
                <ul>
                    <li>- Repositórios: <strong>{userinfo.repos}</strong></li>
                    <li>- Seguidores: <strong>{userinfo.followers}</strong></li>
                    <li>- Seguindo: <strong>{userinfo.following}</strong></li>
                </ul>
            </div>
        </div>
    )
}
  
export default UserInfo