import React from 'react';
import Input from '.';
import Card from '../Cord';

export default () => {
  return (
    <>
      <Card title="不同大小">
        <div style={{ marginBottom: 16 }}>
          <Input size="small" placeholder="small" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input placeholder="middle" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input size="large" placeholder="large" />
        </div>
      </Card>
      <Card title="前缀">
        <Input prefix="prefix" />
      </Card>
      <Card title="后缀">
        <Input suffix="suffix" />
      </Card>
      <Card title="前后缀">
        <Input prefix="prefix" suffix="suffix" />
      </Card>
      <Card title="禁用">
        <Input disabled prefix="prefix" suffix="suffix" />
      </Card>
    </>
  );
};
