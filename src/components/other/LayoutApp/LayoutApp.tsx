import React, {ReactNode} from 'react';
import {Layout, Menu, MenuProps, theme} from 'antd';
import Link from "next/link";
import Logo from '/public/icons/logo.svg'
import styles from './LayoutApp.module.css'

import {
  FieldTimeOutlined
} from '@ant-design/icons';
const { Content, Sider } = Layout;


interface LayoutAppProps {
  children: ReactNode
}

const items: MenuProps['items'] = [
  {
    icon:  React.createElement(FieldTimeOutlined),
    label: (
      <Link href="/">
        Текущий трек
      </Link>
    ),
    key: '1',
  },
]


const LayoutApp = ({children}: LayoutAppProps) => {

  return (
    <Layout hasSider>
      <Sider className={styles.sider}>
        <Logo viewBox="0 0 104 26" className={styles.logo}/>
        <Menu className={styles.menu} theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout" rootClassName={styles.layout}>
        <Content className={styles.content} style={{ overflow: 'initial' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;