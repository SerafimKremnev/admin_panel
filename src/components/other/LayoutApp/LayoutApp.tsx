import React, {ReactNode} from 'react';
import Logo from '/public/icons/logo.svg'
import styles from './LayoutApp.module.css'
import {Icon} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from "next/link";

interface LayoutAppProps {
  children: ReactNode
}

const items = [
  {
    label: 'Текущий трек',
    link: '/',
    icon: <Icon><AccessTimeIcon/></Icon>
  }
]

const LayoutApp = ({children}: LayoutAppProps) => {

  return (
    <div>
      <div className={styles.sider}>
        <Logo viewBox="0 0 104 26" className={styles.logo}/>
        <nav className={styles.menu}>
          <ul className={styles.list}>
          {items.map((item, i) =>
            <li key={i} className={styles.itemMenu}>
              <span>{item.icon}</span>
              <Link href={item.link}>{item.label}</Link>
            </li>
          )}
          </ul>
        </nav>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default LayoutApp;