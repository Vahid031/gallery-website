import React from 'react';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import reactLogo from './assets/logo.svg';
import { useTranslation } from 'react-i18next';
import i18n from './i18nextConf';

const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>

        </div>
        <div className="App-intro">
        <FaBars />
      </div>
      <header>
      <button onClick={() => i18n.changeLanguage("fa")}>fa</button>
          <button onClick={() =>  i18n.changeLanguage("en")}>en</button>
        <h1>
          <img width={80} src={reactLogo} alt="react logo" /> 
          {t("title")}
        </h1>
        {/* <p>{t("description")}</p> */}
        <div className="social-bagdes">
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
            />
          </a>
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub forks"
              src="https://img.shields.io/github/forks/azouaoui-med/react-pro-sidebar?style=social"
            />
          </a>
        </div>
      </header>
      <div className="block ">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        {/* <span> {t("collapsed")}</span> */}
      </div>
      <div className="block">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleRtlChange}
          checked={rtl}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        {/* <span> {t("rtl")}</span> */}
      </div>
      <div className="block">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleImageChange}
          checked={image}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        {/* <span> {t("image")}</span> */}
      </div>

      <footer>
        <small>
          © {new Date().getFullYear()} made with <FaHeart style={{ color: 'red' }} /> by -{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://azouaoui.netlify.com">
            Mohamed Azouaoui
          </a>
        </small>
        <br />
        <div className="social-bagdes">
          <a href="https://github.com/azouaoui-med" target="_blank" rel="noopener noreferrer">
            <img
              alt="GitHub followers"
              src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social"
            />
          </a>
          <a href="https://twitter.com/azouaoui_med" target="_blank" rel="noopener noreferrer">
            <img
              alt="Twitter Follow"
              src="https://img.shields.io/twitter/follow/azouaoui_med?label=twitter&style=social"
            />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Main;
