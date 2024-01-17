import React from "react";
import profile from '../../../../../assets/img/profile.svg'
import './userCard.css'

const UserCard = ({nombre,apellido,rol}) => {
  return <li className="userCard">
    <img className="profile" src={profile} alt="profile" />
    <h3>{nombre || 'Nombre' }</h3>
    <h4>{apellido || 'Apellido'}</h4>
    <h4>{rol}</h4>
  </li>;
};

export default UserCard;
