import React from "react";
import style from "./banner.module.scss";

const Banner = ({ homeBgPic, aproposBgPic }) => {
    return (
      <div className={style.bannerContainer}>
        {homeBgPic ? (
          <div>
            <img src={homeBgPic} alt="Paysage" className={style.picture} />
            <div className={style.filterPicH}>
                <div className={style.pContainer}>
                    <p className={style.p}>Chez vous, partout et ailleurs</p>
                </div>
            </div>
          </div>
        ) : (
          <div>
            <img src={aproposBgPic} alt="Paysage" className={style.picture} />
            <div className={style.filterPicAp}></div>
          </div>
        )}
      </div>
    );
  };

export default Banner
