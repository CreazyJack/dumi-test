/*
 * @Description: Menu display
 * @Date: 2021-05-14 15:49:55
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-14 20:19:54
 */

import React from 'react';
import Menu from '.';

const MenuShow = () => {
  return (
    <>
      <Menu>
        <Menu.Item>1</Menu.Item>
        <Menu.Item>2</Menu.Item>
        <Menu.SubMenu title="subMenu">
          <Menu.Item>3</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item>4</Menu.Item>
      </Menu>
      <Menu mode="vertical">
        <Menu.Item>1</Menu.Item>
        <Menu.Item>2</Menu.Item>
        <Menu.SubMenu title="subMenu">
          <Menu.Item>3</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item>4</Menu.Item>
      </Menu>
    </>
  );
};

export default MenuShow;
