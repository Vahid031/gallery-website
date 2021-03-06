import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from './assets/bg1.jpg';

const TheSidebar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const {t} = useTranslation();
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {t("sidebarTitle")}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">{t("new")}</span>}
          >
            {t("dashboard")}
          </MenuItem>
          <MenuItem icon={<FaGem />}> {t("components")}</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={t("withSuffix")}
            icon={<FaRegLaughWink />}
          >
            <MenuItem>{t("submenu")} 1</MenuItem>
            <MenuItem>{t("submenu")} 2</MenuItem>
            <MenuItem>{t("submenu")} 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={t("withPrefix")}
            icon={<FaHeart />}
          >
            <MenuItem>{t("submenu")} 1</MenuItem>
            <MenuItem>{t("submenu")} 2</MenuItem>
            <MenuItem>{t("submenu")} 3</MenuItem>
          </SubMenu>
          <SubMenu title={t("multiLevel")} icon={<FaList />}>
            <MenuItem>{t("submenu")} 1 </MenuItem>
            <MenuItem>{t("submenu")} 2 </MenuItem>
            <SubMenu title={`${t("submenu")} 3`}>
              <MenuItem>{t("submenu")} 3.1 </MenuItem>
              <MenuItem>{t("submenu")} 3.2 </MenuItem>
              <SubMenu title={`${t("submenu")} 3.3`}>
                <MenuItem>{t("submenu")} 3.3.1 </MenuItem>
                <MenuItem>{t("submenu")} 3.3.2 </MenuItem>
                <MenuItem>{t("submenu")} 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/Vahid031/gallery-website"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {t("viewSource")}
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default TheSidebar;
