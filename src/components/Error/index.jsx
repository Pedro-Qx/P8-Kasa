import React from 'react';
import style from "./error.module.scss";

function Error() {
    return (
      <div className={style.container}>
        <h2 className={style.h2}>404</h2>
        <p className={style.errorMessage}>Oups! La page que vous demandez n'existe pas.</p>
        <a href='http://localhost:3000/'>Retournez sur la page d'accueil</a>
      </div>
    )
  }
  
  export default Error