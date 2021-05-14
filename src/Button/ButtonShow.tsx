/*
 * @Description: Button display
 * @Date: 2021-05-13 16:32:15
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-14 14:23:18
 */

import React, { FC } from 'react';
import Button from '.';

const ButtonShow: FC = () => {
  return (
    <>
      <Button style={{ marginRight: 16 }}>default</Button>
      <Button style={{ marginRight: 16 }} type="primary">
        primary
      </Button>
      <Button style={{ marginRight: 16 }} type="primary" disabled>
        disabled
      </Button>
      <Button style={{ marginRight: 16 }} type="link">
        link
      </Button>
    </>
  );
};

export default ButtonShow;
