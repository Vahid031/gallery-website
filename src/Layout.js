import React, { useState, useEffect } from 'react';
import Aside from './Aside';
import Main from './Main';
import i18n from './i18nextConf';

function Layout() {
  const [rtl, setRtl] = useState(i18n.language === 'fa-IR');
  // const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    console.log(i18n.language);
    // i18n.changeLanguage("en");
  }, []);

  const handleRtlChange = (checked) => {
    setRtl(checked);
    i18n.changeLanguage(checked ? 'fa-IR' : 'en-US');
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
      <Aside
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main
        toggled={toggled}
        rtl={rtl}
        handleToggleSidebar={handleToggleSidebar}
        handleRtlChange={handleRtlChange}
      />
    </div>
  );
}

export default Layout;
