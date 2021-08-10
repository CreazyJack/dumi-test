import React from 'react'
import Input from '.'
import Card from '../Cord'
// import axios from 'axios'

export default () => {
  return (
    <React.Fragment>
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

      <Card title="自动补全">
        <Input
          prefix="prefix"
          suffix="suffix"
          autoComplete={{
            data: ['james', 'jacky', 'josh', 'john', 'tom', 'david']
            // customFn: (condition, data) => {
            //   console.log(condition, data)
            //   return ['123', '3313']
            // }
          }}
        />
      </Card>
    </React.Fragment>
  )
}
