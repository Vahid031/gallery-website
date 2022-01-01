import React from 'react';
import { FaHeart, FaBars, } from 'react-icons/fa';
import reactLogo from './assets/logo.svg';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag"

const Main = ({
  rtl,
  handleToggleSidebar,
  handleRtlChange,
}) => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="btn-toggle" >
        <FaBars onClick={() => handleToggleSidebar(true)} style={rtl? {marginLeft:"1em"}:{marginRight:"1em"}} />
        {rtl ?
          <ReactCountryFlag countryCode="IR" svg title="Fa" style={{ cursor: "pointer" }} onClick={() => handleRtlChange(false)} />:
          <ReactCountryFlag countryCode="US" svg title="US" style={{ cursor: "pointer" }} onClick={() => handleRtlChange(true)} /> }
      </div>

      <header>

        <h1>
          <img width={80} src={reactLogo} alt="react logo" />
          {t("title")}
        </h1>
        <p>{t("description")}</p>
        <div className="social-bagdes">
          <a
            href="https://github.com/vahid031/gallery-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/vahid031/gallery-website?style=social"
            />
          </a>
          <a
            href="https://github.com/vahid031/gallery-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub forks"
              src="https://img.shields.io/github/forks/vahid031/gallery-website?style=social"
            />
          </a>
        </div>
      </header>

      <div className="block">
        content .........
      </div>

      <footer>
        <small>
          © {new Date().getFullYear()} made with <FaHeart style={{ color: 'red' }} /> by -{' '}
          <a target="_blank" rel="noopener noreferrer" href="http://vahid031.ir">
            Vahid Goodarzi
          </a>
        </small>
        <br />
        <div className="social-bagdes">
          <a href="https://github.com/vahid031" target="_blank" rel="noopener noreferrer">
            <img
              alt="GitHub followers"
              src="https://img.shields.io/github/followers/vahid031?label=github&style=social"
            />
          </a>
          <a href="https://twitter.com/Vahid031" target="_blank" rel="noopener noreferrer">
            <img
              alt="Twitter Follow"
              src="https://img.shields.io/twitter/follow/vahid031?label=twitter&style=social"
            />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Main;
