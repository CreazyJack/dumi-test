/*
 * @Description: Button display
 * @Date: 2021-05-13 16:32:15
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-15 15:11:19
 */

import React from 'react';
import Button from '.';

const ButtonShow: React.FC = () => {
  const styles: React.CSSProperties = {
    marginRight: 16,
  };
  const boxCss: React.CSSProperties = {
    margin: 8,
  };
  return (
    <React.Fragment>
      <div style={boxCss}>
        <Button style={styles} size="small">
          small
        </Button>
        <Button style={styles} size="middle">
          middle
        </Button>
        <Button style={styles} size="large">
          large
        </Button>
      </div>
      <div style={boxCss}>
        <Button style={styles}>default</Button>
        <Button style={styles} type="primary">
          primary
        </Button>
        <Button style={styles} type="primary" danger>
          primary danger
        </Button>
        <Button style={styles} disabled>
          disabled
        </Button>
        <Button style={styles} type="link">
          link
        </Button>
        <Button style={styles} type="link" danger>
          link danger
        </Button>
      </div>
    </React.Fragment>
  );
};

export default ButtonShow;
